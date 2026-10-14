'use strict';
const express = require('express');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const production = process.env.NODE_ENV === 'production';
const sessionSecret = process.env.SESSION_SECRET || '';
const adminKey = process.env.ADMIN_API_KEY || '';
if (production && sessionSecret.length < 32) throw new Error('SESSION_SECRET must be at least 32 characters in production.');
if (production && adminKey.length < 32) throw new Error('ADMIN_API_KEY must be at least 32 characters in production.');

const dbPath = path.resolve(process.env.DATABASE_PATH || './data/nexora.sqlite');
fs.mkdirSync(path.dirname(dbPath), { recursive: true });
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');
db.exec(`
CREATE TABLE IF NOT EXISTS users (
 id INTEGER PRIMARY KEY AUTOINCREMENT, display_name TEXT NOT NULL, email TEXT NOT NULL UNIQUE,
 password_hash TEXT NOT NULL, role TEXT NOT NULL DEFAULT 'student' CHECK(role IN ('student','teacher','admin')),
 teacher_approved INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS projects (
 id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 title TEXT NOT NULL, description TEXT NOT NULL DEFAULT '', status TEXT NOT NULL DEFAULT 'submitted',
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS assignments (
 id INTEGER PRIMARY KEY AUTOINCREMENT, teacher_id INTEGER NOT NULL REFERENCES users(id), title TEXT NOT NULL,
 subject TEXT NOT NULL, description TEXT NOT NULL DEFAULT '', due_date TEXT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS teacher_questions (
 id INTEGER PRIMARY KEY AUTOINCREMENT, teacher_id INTEGER NOT NULL REFERENCES users(id), subject TEXT NOT NULL,
 prompt TEXT NOT NULL, answer TEXT NOT NULL DEFAULT '', kind TEXT NOT NULL DEFAULT 'تشریحی', created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS feedback (
 id INTEGER PRIMARY KEY AUTOINCREMENT, teacher_id INTEGER NOT NULL REFERENCES users(id), student_id INTEGER NOT NULL REFERENCES users(id),
 project_id INTEGER REFERENCES projects(id) ON DELETE SET NULL, body TEXT NOT NULL, grade REAL,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, CHECK(grade IS NULL OR (grade >= 0 AND grade <= 20))
);
CREATE TABLE IF NOT EXISTS notifications (
 id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 title TEXT NOT NULL, body TEXT NOT NULL, read_at TEXT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_projects_user ON projects(user_id, created_at);
CREATE INDEX IF NOT EXISTS idx_feedback_student ON feedback(student_id, created_at);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id, created_at);
`);

app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc: ["'self'"], scriptSrc: ["'self'"], styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'], fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'], imgSrc: ["'self'", 'data:'], connectSrc: ["'self'"], objectSrc: ["'none'"], frameAncestors: ["'none'"] } } }));
app.use(express.json({ limit: '200kb' }));
app.use(express.urlencoded({ extended: false, limit: '20kb' }));
app.use(session({
  name: 'nexora.sid', secret: sessionSecret || 'local-development-secret-change-before-deploy',
  resave: false, saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.sqlite', dir: path.dirname(dbPath) }),
  cookie: { httpOnly: true, sameSite: 'lax', secure: production && process.env.COOKIE_SECURE !== 'false', maxAge: 1000 * 60 * 60 * 8 }
}));
app.use('/api/', rateLimit({ windowMs: 15 * 60 * 1000, limit: 180, standardHeaders: 'draft-7', legacyHeaders: false }));
app.use('/api/auth/', rateLimit({ windowMs: 15 * 60 * 1000, limit: 12, standardHeaders: 'draft-7', legacyHeaders: false }));

const publicUser = u => ({ id: u.id, displayName: u.display_name, email: u.email, role: u.role, teacherApproved: Boolean(u.teacher_approved) });
function requireAuth(req, res, next) { if (!req.session.userId) return res.status(401).json({ error: 'برای ادامه وارد حساب شو.' }); next(); }
function requireTeacher(req, res, next) {
  if (!req.session.userId) return res.status(401).json({ error: 'ابتدا وارد حساب شو.' });
  const user = db.prepare('SELECT role, teacher_approved FROM users WHERE id=?').get(req.session.userId);
  if (!user || !['teacher','admin'].includes(user.role) || (user.role === 'teacher' && !user.teacher_approved)) return res.status(403).json({ error: 'دسترسی معلم تأیید نشده است.' });
  next();
}
function cleanText(value, max) { return typeof value === 'string' ? value.trim().slice(0, max) : ''; }

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'NEXORA API', database: 'connected' }));
app.post('/api/auth/register', async (req, res, next) => {
  try {
    const displayName = cleanText(req.body.displayName, 40);
    const email = cleanText(req.body.email, 254).toLowerCase();
    const password = typeof req.body.password === 'string' ? req.body.password : '';
    if (displayName.length < 2) return res.status(400).json({ error: 'نام نمایشی باید حداقل ۲ حرف باشد.' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'ایمیل معتبر وارد کن.' });
    if (password.length < 10 || password.length > 128) return res.status(400).json({ error: 'رمز باید بین ۱۰ تا ۱۲۸ نویسه باشد.' });
    const hash = await bcrypt.hash(password, 12);
    let result;
    try { result = db.prepare('INSERT INTO users(display_name,email,password_hash) VALUES(?,?,?)').run(displayName, email, hash); }
    catch (e) { if (String(e.code).includes('SQLITE_CONSTRAINT_UNIQUE')) return res.status(409).json({ error: 'این ایمیل قبلاً ثبت شده است.' }); throw e; }
    req.session.userId = Number(result.lastInsertRowid);
    res.status(201).json({ user: publicUser(db.prepare('SELECT * FROM users WHERE id=?').get(req.session.userId)) });
  } catch (e) { next(e); }
});
app.post('/api/auth/login', async (req, res, next) => {
  try {
    const email = cleanText(req.body.email, 254).toLowerCase();
    const password = typeof req.body.password === 'string' ? req.body.password : '';
    const user = db.prepare('SELECT * FROM users WHERE email=?').get(email);
    if (!user || !(await bcrypt.compare(password, user.password_hash))) return res.status(401).json({ error: 'ایمیل یا رمز درست نیست.' });
    req.session.regenerate(err => { if (err) return next(err); req.session.userId = user.id; res.json({ user: publicUser(user) }); });
  } catch (e) { next(e); }
});
app.post('/api/auth/logout', (req, res, next) => req.session.destroy(err => { if (err) return next(err); res.clearCookie('nexora.sid'); res.json({ ok: true }); }));
app.get('/api/auth/me', requireAuth, (req, res) => { const u = db.prepare('SELECT * FROM users WHERE id=?').get(req.session.userId); if (!u) return res.status(401).json({ error: 'حساب پیدا نشد.' }); res.json({ user: publicUser(u) }); });

// A student can only access their own projects; a teacher may review projects only via teacher routes.
app.get('/api/projects', requireAuth, (req, res) => res.json({ projects: db.prepare('SELECT id,title,description,status,created_at AS createdAt,updated_at AS updatedAt FROM projects WHERE user_id=? ORDER BY created_at DESC').all(req.session.userId) }));
app.post('/api/projects', requireAuth, (req, res) => {
  const title = cleanText(req.body.title, 100), description = cleanText(req.body.description, 4000);
  if (title.length < 2) return res.status(400).json({ error: 'عنوان پروژه را وارد کن.' });
  const r = db.prepare('INSERT INTO projects(user_id,title,description) VALUES(?,?,?)').run(req.session.userId, title, description);
  res.status(201).json({ project: db.prepare('SELECT id,title,description,status,created_at AS createdAt FROM projects WHERE id=?').get(r.lastInsertRowid) });
});
app.delete('/api/projects/:id', requireAuth, (req, res) => { const r = db.prepare('DELETE FROM projects WHERE id=? AND user_id=?').run(Number(req.params.id), req.session.userId); if (!r.changes) return res.status(404).json({ error: 'پروژه پیدا نشد.' }); res.json({ ok: true }); });

app.get('/api/teacher/assignments', requireTeacher, (_req, res) => res.json({ assignments: db.prepare('SELECT id,title,subject,description,due_date AS dueDate,created_at AS createdAt FROM assignments ORDER BY created_at DESC LIMIT 200').all() }));
app.post('/api/teacher/assignments', requireTeacher, (req, res) => { const title=cleanText(req.body.title,100), subject=cleanText(req.body.subject,80), description=cleanText(req.body.description,2000), dueDate=cleanText(req.body.dueDate,30)||null; if(title.length<2||!subject) return res.status(400).json({error:'عنوان و درس الزامی است.'}); const r=db.prepare('INSERT INTO assignments(teacher_id,title,subject,description,due_date) VALUES(?,?,?,?,?)').run(req.session.userId,title,subject,description,dueDate); res.status(201).json({assignment:db.prepare('SELECT id,title,subject,description,due_date AS dueDate,created_at AS createdAt FROM assignments WHERE id=?').get(r.lastInsertRowid)}); });
app.post('/api/teacher/questions', requireTeacher, (req,res)=>{ const subject=cleanText(req.body.subject,80), prompt=cleanText(req.body.prompt,3000), answer=cleanText(req.body.answer,5000), kind=cleanText(req.body.kind,40)||'تشریحی'; if(!subject||prompt.length<3) return res.status(400).json({error:'درس و متن سؤال الزامی است.'}); const r=db.prepare('INSERT INTO teacher_questions(teacher_id,subject,prompt,answer,kind) VALUES(?,?,?,?,?)').run(req.session.userId,subject,prompt,answer,kind); res.status(201).json({id:Number(r.lastInsertRowid)}); });
app.get('/api/teacher/projects', requireTeacher, (_req,res)=>res.json({projects:db.prepare(`SELECT p.id,p.title,p.description,p.status,p.created_at AS createdAt,u.display_name AS studentName,u.email AS studentEmail FROM projects p JOIN users u ON u.id=p.user_id ORDER BY p.created_at DESC LIMIT 300`).all()}));
app.post('/api/teacher/feedback', requireTeacher, (req,res)=>{ const studentId=Number(req.body.studentId), projectId=req.body.projectId==null?null:Number(req.body.projectId), body=cleanText(req.body.body,3000), grade=req.body.grade===''||req.body.grade==null?null:Number(req.body.grade); if(!Number.isInteger(studentId)||studentId<1||body.length<2) return res.status(400).json({error:'دانش‌آموز و متن بازخورد لازم است.'}); if(grade!==null&&(!Number.isFinite(grade)||grade<0||grade>20)) return res.status(400).json({error:'نمره باید بین صفر و ۲۰ باشد.'}); const student=db.prepare('SELECT id FROM users WHERE id=? AND role="student"').get(studentId); if(!student)return res.status(404).json({error:'دانش‌آموز پیدا نشد.'}); const tx=db.transaction(()=>{const r=db.prepare('INSERT INTO feedback(teacher_id,student_id,project_id,body,grade) VALUES(?,?,?,?,?)').run(req.session.userId,studentId,projectId,body,grade);db.prepare('INSERT INTO notifications(user_id,title,body) VALUES(?,?,?)').run(studentId,'بازخورد جدید از معلم',grade===null?body:`نمره: ${grade} از ۲۰ — ${body}`);return Number(r.lastInsertRowid)}); res.status(201).json({id:tx()}); });
app.get('/api/student/feedback', requireAuth, (req,res)=>res.json({feedback:db.prepare('SELECT f.id,f.body,f.grade,f.created_at AS createdAt,u.display_name AS teacherName FROM feedback f JOIN users u ON u.id=f.teacher_id WHERE f.student_id=? ORDER BY f.created_at DESC').all(req.session.userId)}));
app.get('/api/notifications', requireAuth, (req,res)=>res.json({notifications:db.prepare('SELECT id,title,body,read_at AS readAt,created_at AS createdAt FROM notifications WHERE user_id=? ORDER BY created_at DESC LIMIT 100').all(req.session.userId)}));
app.post('/api/admin/teachers/:id/approve', (req,res)=>{ if(!adminKey || req.get('x-admin-key')!==adminKey) return res.status(403).json({error:'اجازه ندارید.'}); const r=db.prepare("UPDATE users SET role='teacher',teacher_approved=1 WHERE id=? AND role='student'").run(Number(req.params.id)); if(!r.changes)return res.status(404).json({error:'حساب دانش‌آموز پیدا نشد.'}); res.json({ok:true}); });

app.use(express.static(path.join(__dirname), { index: 'index.html', extensions: ['html'] }));
app.use((req,res)=>{ if(req.path.startsWith('/api/'))return res.status(404).json({error:'مسیر پیدا نشد.'}); res.status(404).send('صفحه پیدا نشد. <a href="/">بازگشت به NEXORA</a>'); });
app.use((err, _req, res, _next)=>{ console.error('NEXORA request error:', err.message); if(res.headersSent)return; res.status(500).json({error: production?'خطای داخلی رخ داد. دوباره تلاش کن.':err.message}); });
app.listen(PORT, ()=>console.log(`NEXORA listening on port ${PORT}`));
