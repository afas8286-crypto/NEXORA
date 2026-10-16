const projects = [
{ id:1,title:"جاقلمی با قوطی مقوایی",cat:"بازیافتی",emoji:"✏️",time:"۳۰ تا ۴۵ دقیقه",materials:"لولهٔ مقوایی دستمال، مقوای ضخیم، چسب، قیچی، کاغذ رنگی",goal:"ساخت یک جاقلمی سبک برای میز مطالعه.",steps:["لولهٔ مقوایی را تمیز و خشک کن.","دور آن را با کاغذ رنگی بپوشان.","یک دایره از مقوا ببُر و به زیر لوله بچسبان.","لبه‌ها را محکم کن و ظاهرش را تزئین کن.","چند مداد داخل آن بگذار و پایداری‌اش را آزمایش کن."],test:"جاقلمی نباید با چند مداد معمولی واژگون شود.",safety:"قیچی را با احتیاط استفاده کن؛ قوطی فلزی تیز انتخاب نکن."},
{ id:2,title:"جعبهٔ نظم‌دهندهٔ میز",cat:"بازیافتی",emoji:"📦",time:"۴۵ دقیقه",materials:"جعبهٔ کفش کوچک، مقوا، خط‌کش، چسب، مداد",goal:"ساخت بخش‌بندی برای وسایل کوچک.",steps:["جعبه‌ای سالم انتخاب کن.","داخل جعبه را اندازه بگیر.","نوارهای مقوایی را به اندازهٔ داخل جعبه ببر.","نوارها را به شکل خانه‌های جدا درون جعبه بچسبان.","مداد، پاک‌کن و گیره‌ها را در بخش‌های جدا قرار بده."],test:"وسایل باید در خانه‌های جدا بمانند و دیواره‌ها خم نشوند.",safety:"هنگام برش، مقوا را روی سطح صاف قرار بده."},
{ id:3,title:"پایهٔ موبایل مقوایی",cat:"بازیافتی",emoji:"📱",time:"۳۰ دقیقه",materials:"مقوای ضخیم، خط‌کش، مداد، قیچی، چسب",goal:"ساخت پایه برای نگه‌داشتن گوشی در زاویهٔ مناسب.",steps:["یک پایهٔ پهن مستطیلی بکش.","دو تکیه‌گاه مثلثی از مقوا ببُر.","تکیه‌گاه‌ها را در دو طرف پایه بچسبان.","لبهٔ جلویی کوتاهی بساز تا گوشی سر نخورد.","با گوشی خاموش یا وسیله‌ای هم‌اندازه پایداری را بررسی کن."],test:"پایه باید روی میز صاف بماند و گوشی را بدون لغزش نگه دارد.",safety:"گوشی را نزدیک لبهٔ میز آزمایش نکن."},
{ id:4,title:"نشانگر کتاب",cat:"طراحی",emoji:"📚",time:"۱۵ دقیقه",materials:"مقوا، مداد رنگی، خط‌کش، قیچی",goal:"ساخت نشانگر ساده و بادوام برای کتاب.",steps:["یک نوار مقوایی به اندازهٔ دلخواه رسم کن.","آن را با خط‌کش صاف ببر.","نام یا نماد دلخواهت را روی آن بکش.","اگر خواستی یک روکش کاغذی اضافه کن.","آن را بین صفحه‌های کتاب قرار بده."],test:"نشانگر باید صفحه را مشخص کند و به کتاب آسیب نزند.",safety:"از چسباندن مواد خیس یا رنگ پس‌دهنده به کتاب خودداری کن."},
{ id:5,title:"پاکت مرتب‌سازی برگه‌ها",cat:"سازمان‌دهی",emoji:"🗂️",time:"۳۰ دقیقه",materials:"مقوای نازک، چسب کاغذی، خط‌کش، ماژیک",goal:"ساخت پاکت برای نگهداری برگه‌های درسی.",steps:["یک مستطیل بزرگ روی مقوا رسم کن.","لبه‌های کناری و پایینی را تا بزن.","لبه‌ها را با چسب کاغذی ثابت کن.","روی پاکت نام درس را بنویس.","چند برگه داخل آن بگذار و اندازه را بررسی کن."],test:"برگه‌ها باید بدون خم‌شدن شدید در پاکت جا شوند.",safety:"لبه‌های مقوا را صاف نگه دار."},
{ id:6,title:"چرخ رنگ‌ها",cat:"طراحی",emoji:"🎨",time:"۳۰ دقیقه",materials:"مقوا، پرگار یا ظرف گرد، مداد رنگی، خط‌کش",goal:"ساخت وسیله‌ای برای شناخت گروه‌های رنگ.",steps:["یک دایره روی مقوا بکش.","دایره را به شش بخش تقریباً برابر تقسیم کن.","هر بخش را با رنگ متفاوت رنگ‌آمیزی کن.","نام رنگ‌ها را بنویس.","از چرخ برای انتخاب رنگ‌های هماهنگ استفاده کن."],test:"بخش‌ها باید جدا و رنگ‌ها قابل تشخیص باشند.",safety:"از ماژیک روی سطحی استفاده کن که لک‌شدنش مهم نیست."},
{ id:7,title:"پوستر ایمنی کارگاه",cat:"طراحی",emoji:"🦺",time:"۴۵ دقیقه",materials:"کاغذ یا مقوا، مداد، خط‌کش، ماژیک یا مداد رنگی",goal:"یادآوری سه تا پنج قانون ایمنی در کلاس کارگاه.",steps:["سه تا پنج قانون کوتاه و درست انتخاب کن.","برای هر قانون یک نماد ساده طراحی کن.","عنوان واضحی بالای پوستر بنویس.","قانون‌ها را با فاصله و خوانا بچین.","پوستر را از فاصلهٔ دو متری بخوان و اصلاح کن."],test:"همهٔ قانون‌ها باید از فاصلهٔ معمول به‌راحتی خوانده شوند.",safety:"قانون‌ها را مطابق دستور معلم و ابزار واقعی کلاس انتخاب کن."},
{ id:8,title:"جعبهٔ کوچک نگهداری ابزار",cat:"سازمان‌دهی",emoji:"🧰",time:"۳۰ تا ۴۵ دقیقه",materials:"جعبهٔ مقوایی کوچک، مقوا، خط‌کش، مداد، چسب",goal:"ساخت محفظه‌ای برای نگهداری ابزارهای سبک و بی‌خطرِ کاردستی.",steps:["یک جعبهٔ مقوایی تمیز و سالم انتخاب کن.","اندازهٔ داخل جعبه را بگیر.","چند جداکننده از مقوا ببُر.","جداکننده‌ها را داخل جعبه بچسبان.","وسایل سبک مانند مداد، پاک‌کن و خط‌کش کوچک را مرتب کن."],test:"وسایل باید در بخش‌های جدا قرار بگیرند و جعبه به‌آسانی باز و بسته شود.",safety:"ابزارهای تیز یا برنده را داخل جعبهٔ دانش‌آموزی نگهداری نکن."},
{ id:9,title:"جعبهٔ بازیافت کاغذ",cat:"بازیافتی",emoji:"♻️",time:"۲۰ دقیقه",materials:"جعبهٔ مقوایی تمیز، کاغذ رنگی، ماژیک",goal:"جداکردن کاغذهای باطله برای بازیافت.",steps:["یک جعبهٔ تمیز انتخاب کن.","روی آن برچسب «کاغذ باطله» بزن.","نمونه‌های قابل قبول و غیرقابل قبول را مشخص کن.","جعبه را در محل مناسب بگذار.","پس از پرشدن، کاغذها را به محل جمع‌آوری بازیافت منتقل کن."],test:"دیگران باید با دیدن برچسب بفهمند چه چیزی داخل جعبه می‌رود.",safety:"کاغذ آلوده یا مواد تیز داخل آن نریز."},
{ id:10,title:"بسته‌بندی محافظ تخم‌مرغ",cat:"آزمایش ساده",emoji:"🥚",time:"۴۵ دقیقه",materials:"کاغذ باطله، مقوا، چسب کاغذی، یک تخم‌مرغ خام فقط با نظارت بزرگسال",goal:"آزمایش اینکه لایه‌های نرم چگونه از یک شیء شکننده محافظت می‌کنند.",steps:["یک محفظهٔ کوچک مقوایی بساز.","داخل آن را با کاغذ مچاله‌شده پر کن.","فضای خالی اطراف تخم‌مرغ را کم کن، اما فشار نده.","بزرگسال بسته را روی سطحی کوتاه و نرم آزمایش کند.","نتیجه را ثبت کن و شکل بسته‌بندی را بهتر کن."],test:"هدف مقایسهٔ میزان محافظت است؛ نتیجه تضمین‌شده نیست.",safety:"آزمایش افتادن فقط با نظارت بزرگسال و از ارتفاع کم روی سطح نرم انجام شود؛ از ارتفاع زیاد استفاده نکن."},
{ id:11,title:"پل کاغذی کوچک",cat:"آزمایش ساده",emoji:"🌉",time:"۳۰ دقیقه",materials:"چند برگ کاغذ، دو کتاب هم‌ارتفاع، چند سکه",goal:"مقایسهٔ مقاومت کاغذ صاف و تاخورده.",steps:["دو کتاب را با فاصلهٔ کم قرار بده.","یک برگ صاف را بین آن‌ها بگذار.","سکه‌ها را یکی‌یکی وسط کاغذ بگذار و تعداد را ثبت کن.","کاغذ دوم را آکاردئونی تا کن و دوباره آزمایش کن.","نتایج دو حالت را مقایسه کن."],test:"تعداد سکه‌ها را برای هر حالت یادداشت کن؛ نتیجه به شکل تا و فاصله بستگی دارد.",safety:"از وزنهٔ سنگین استفاده نکن و کتاب‌ها را روی لبهٔ میز نگذار."},
{ id:12,title:"گلدان خودآبیاری ساده",cat:"بازیافتی",emoji:"🌱",time:"۴۵ دقیقه",materials:"دو ظرف کوچک تمیز، نخ پنبه‌ای، آب، کمی خاک و گیاه",goal:"مشاهدهٔ حرکت آب در نخ و مرطوب ماندن خاک.",steps:["از یک ظرف برای آب و ظرف دیگر برای خاک استفاده کن.","یک سر نخ پنبه‌ای را در آب بگذار.","سر دیگر را داخل خاک نزدیک ریشه قرار بده.","ظرف آب را کمی پایین‌تر یا هم‌سطح گلدان بگذار.","پس از چند ساعت و یک روز، رطوبت خاک را بررسی کن."],test:"نخ باید خیس شود؛ مقدار آب‌رسانی به جنس نخ و ارتفاع ظرف بستگی دارد.",safety:"از ظرف تمیز استفاده کن و آب را کنار وسایل برقی نریز."},
{ id:13,title:"چراغ راهنمای کاغذی",cat:"طراحی",emoji:"🚦",time:"۳۰ دقیقه",materials:"مقوا، کاغذ قرمز و زرد و سبز، چسب، ماژیک",goal:"ساخت مدل آموزشی چراغ راهنمایی.",steps:["یک پایه و بدنهٔ مستطیلی از مقوا بساز.","سه دایره هم‌اندازه بکش و ببر.","دایره‌ها را به ترتیب قرمز، زرد و سبز بچسبان.","معنی هر رنگ را کنار مدل بنویس.","با یکی از اعضای خانواده قوانین عبور را مرور کن."],test:"ترتیب چراغ‌ها و معنی رنگ‌ها باید درست باشد.",safety:"این مدل فقط آموزشی است و جای چراغ واقعی را نمی‌گیرد."},
{ id:14,title:"خط‌کش نشانه‌دار مطالعه",cat:"سازمان‌دهی",emoji:"📏",time:"۱۵ دقیقه",materials:"خط‌کش، برچسب کاغذی کوچک، مداد",goal:"ساخت نشانه برای پیگیری پیشرفت مطالعه.",steps:["چند برچسب کوچک آماده کن.","روی آن‌ها عنوان‌هایی مانند «شروع»، «مرور» و «تمام شد» بنویس.","برچسب‌ها را کنار بخش‌های مناسب خط‌کش بچسبان، بدون پوشاندن درجه‌ها.","هنگام مطالعه از آن‌ها برای یادآوری استفاده کن.","پس از چند روز بررسی کن کدام نشانه مفیدتر بوده است."],test:"درجه‌های خط‌کش باید همچنان دیده شوند.",safety:"از چسبی استفاده کن که خط‌کش را خراب نکند."},
{ id:15,title:"کارت راهنمای ابزار",cat:"طراحی",emoji:"🛠️",time:"۳۰ دقیقه",materials:"کارت مقوایی، مداد، ماژیک، خط‌کش",goal:"ساخت کارت تصویری برای معرفی ابزار و کاربرد آن.",steps:["سه ابزار آشنا و مجاز کلاس را انتخاب کن.","نام هر ابزار را بنویس.","کاربرد درست آن را با یک جمله توضیح بده.","یک تصویر ساده از هر ابزار بکش.","کارت‌ها را با معلم بررسی کن."],test:"نام، کاربرد و تصویر هر ابزار باید با هم مطابقت داشته باشند.",safety:"برای ابزار خطرناک، فقط قوانین ایمنی تأییدشدهٔ معلم را بنویس."},
{ id:16,title:"پاکت بذر و برچسب گیاه",cat:"سازمان‌دهی",emoji:"🌼",time:"۲۰ دقیقه",materials:"کاغذ، مداد، خط‌کش، چسب کاغذی، بذر مجاز",goal:"مرتب نگه‌داشتن بذرها با نام و تاریخ.",steps:["از کاغذ یک پاکت کوچک تا کن.","لبه‌ها را با چسب کاغذی ثابت کن.","نام گیاه و تاریخ جمع‌آوری را بنویس.","بذر خشک و مجاز را داخل پاکت بگذار.","پاکت را در محل خشک و مناسب نگهداری کن."],test:"پاکت باید بسته بماند و برچسبش خوانا باشد.",safety:"بذر ناشناس یا سمی را لمس یا مصرف نکن."},
{ id:17,title:"ترازوی مقوایی آموزشی",cat:"آزمایش ساده",emoji:"⚖️",time:"۴۵ دقیقه",materials:"چوب بستنی یا خط‌کش سبک، نخ، دو ظرف کاغذی یکسان، پایهٔ ثابت",goal:"مقایسهٔ تقریبی وزن دو شیء سبک.",steps:["دو ظرف کاغذی هم‌اندازه آماده کن.","هر ظرف را با نخ به دو سر خط‌کش سبک وصل کن.","وسط خط‌کش را با نخ به یک پایهٔ ثابت و محکم آویزان کن.","دو شیء سبک را در ظرف‌ها قرار بده.","مشاهده کن کدام سمت پایین‌تر می‌رود."],test:"این وسیله برای مقایسهٔ تقریبی است، نه اندازه‌گیری دقیق جرم.",safety:"پایه باید محکم باشد و از اشیای سنگین استفاده نکن."},
{ id:18,title:"دفترچهٔ مراحل حل مسئله",cat:"سازمان‌دهی",emoji:"📝",time:"۲۰ دقیقه",materials:"چند برگ کاغذ، منگنه یا نخ، مداد",goal:"ثبت مشکل، ایده‌ها، ساخت و نتیجهٔ یک پروژه.",steps:["چند برگ را مرتب روی هم بگذار.","آن‌ها را از وسط تا کن و با کمک بزرگسال محکم کن.","صفحه‌ها را به «مشکل»، «ایده»، «ساخت»، «آزمایش» و «بهبود» اختصاص بده.","برای یک کار کوچک هر بخش را پر کن.","در پایان نتیجه و چیزی را که یاد گرفتی بنویس."],test:"دفترچه باید همهٔ پنج بخش را داشته باشد.",safety:"اگر از منگنه استفاده می‌کنی، از بزرگسال کمک بگیر."},
{ id:19,title:"تابلوی یادآور خاموش‌کردن چراغ",cat:"طراحی",emoji:"💡",time:"۲۰ دقیقه",materials:"مقوا، ماژیک، خط‌کش، چسب کاغذی",goal:"یادآوری صرفه‌جویی در انرژی در محل مناسب.",steps:["یک پیام کوتاه و مودبانه بنویس.","یک نماد ساده از لامپ بکش.","متن را درشت و خوانا بنویس.","تابلو را در محل مجاز و مناسب نصب کن.","پس از چند روز بررسی کن آیا پیام قابل مشاهده است."],test:"پیام باید واضح باشد و مسیر رفت‌وآمد را مسدود نکند.",safety:"تابلو را نزدیک سیم برق یا روی تجهیزات برقی نصب نکن."},
{ id:20,title:"بسته‌بندی هدیهٔ کاغذی",cat:"بازیافتی",emoji:"🎁",time:"۳۰ دقیقه",materials:"کاغذ استفاده‌شدهٔ تمیز، نخ، چسب کاغذی، قیچی",goal:"ساخت بسته‌بندی ساده با استفادهٔ دوباره از کاغذ.",steps:["کاغذ تمیز و سالم انتخاب کن.","وسیلهٔ سبک را وسط کاغذ بگذار.","لبه‌ها را مرتب تا بزن.","با نخ یا چسب کاغذی ببند.","بسته را از نظر استحکام و ظاهر بررسی کن."],test:"بسته باید وسیلهٔ سبک را نگه دارد و به‌راحتی باز نشود.",safety:"برای اشیای شکننده یا گران‌قیمت از بسته‌بندی حرفه‌ای استفاده کن."}
];
const $ = s => document.querySelector(s);
const grid = $("#projectGrid");
const PROGRESS_KEY = "nexora_project_progress_v2";
function getProgress(){try{return JSON.parse(localStorage.getItem(PROGRESS_KEY)||"{}")}catch{return {}}}
function saveProgress(data){try{localStorage.setItem(PROGRESS_KEY,JSON.stringify(data));return true}catch{return false}}
function projectProgress(id){return (getProgress()[id]||[]).filter(Boolean).length}
function updateDashboard(){
 const data=getProgress();let completed=0,started=0,done=0,total=0;
 projects.forEach(p=>{const steps=data[p.id]||[];const n=steps.filter(Boolean).length;total+=p.steps.length;done+=n;if(n===p.steps.length)completed++;else if(n>0)started++;});
 $("#completedCount").textContent=String(completed);$("#startedCount").textContent=String(started);
 $("#totalStepsCount").textContent=total?Math.round(done/total*100)+"٪":"۰٪";
}
function renderProjects(){
 const q=$("#search").value.trim().toLowerCase(), cat=$("#category").value;
 const filtered=projects.filter(p=>(cat==="همه"||p.cat===cat)&&(p.title+" "+p.goal+" "+p.cat).toLowerCase().includes(q));
 grid.innerHTML=filtered.length?filtered.map(p=>`<article class="card"><div class="card-top"><span class="emoji">${p.emoji}</span><span class="level">خیلی آسان</span></div><h3>${p.id}. ${p.title}</h3><p>${p.goal}</p><div class="meta">⏱ ${p.time} · ${p.cat}</div><div class="mini-progress"><span style="width:${Math.round(projectProgress(p.id)/p.steps.length*100)}%"></span></div><small>${projectProgress(p.id)} از ${p.steps.length} مرحله انجام شده</small><button class="primary" data-open="${p.id}">انتخاب برای پروژهٔ گروهی ←</button></article>`).join(""):`<div class="empty">پروژه‌ای پیدا نشد؛ عبارت دیگری جست‌وجو کن.</div>`;
 $("#groupProject").innerHTML=projects.map(p=>`<option value="${p.id}">${p.title}</option>`).join("");
}
function openProject(id){
 const p=projects.find(x=>x.id===Number(id));if(!p)return;
 const saved=getProgress()[p.id]||[];
 $("#detailContent").innerHTML=`<span class="eyebrow">راهنمای ساخت · پروژهٔ ${p.id}</span><h2>${p.emoji} ${p.title}</h2><p>${p.goal}</p><p class="materials"><b>وسایل لازم:</b> ${p.materials}</p><p><b>زمان تقریبی:</b> ${p.time}</p><h3>مراحل ساخت خودم</h3><p class="help-text">بعد از انجام هر مرحله، تیک آن را بزن.</p><div class="step-checklist">${p.steps.map((s,i)=>`<label class="step-item"><input type="checkbox" data-step="${i}" ${saved[i]?"checked":""}><span>${i+1}. ${s}</span></label>`).join("")}</div><div class="progress-summary"><div class="mini-progress"><span id="detailProgressBar" style="width:${Math.round(saved.filter(Boolean).length/p.steps.length*100)}%"></span></div><span id="detailProgressText">${saved.filter(Boolean).length} از ${p.steps.length} مرحله انجام شده</span></div><div class="checklist"><b>روش آزمایش:</b><p>${p.test}</p><b>نکتهٔ ایمنی:</b><p>${p.safety}</p></div><button class="primary" id="selectForGroup">انتخاب برای گروه من</button><button class="secondary" id="reportThisProject">ساخت گزارش برای این پروژه</button>`;
 $("#detailDialog").showModal();
 $("#detailContent").querySelectorAll("[data-step]").forEach(input=>input.addEventListener("change",()=>{
   const all=getProgress();const steps=all[p.id]||Array(p.steps.length).fill(false);
   steps[Number(input.dataset.step)]=input.checked;all[p.id]=steps;
   const ok=saveProgress(all),n=steps.filter(Boolean).length;
   $("#detailProgressBar").style.width=Math.round(n/p.steps.length*100)+"%";
   $("#detailProgressText").textContent=`${n} از ${p.steps.length} مرحله انجام شده`;
   if(!ok)$("#notice").textContent="ذخیره‌سازی در این مرورگر ممکن نشد.";
   renderProjects();updateDashboard();
 }));
 $("#selectForGroup").onclick=()=>{
 const groups=getGroups();
 if(!groups.length){$("#notice").textContent="اول در بخش «گروه پروژهٔ ما» گروه کلاسی بساز؛ پروژه‌ها فقط گروهی هستند.";$("#group").scrollIntoView({behavior:"smooth"});return;}
 $("#groupProject").value=String(p.id);
 const choice=groups.length===1?0:0;
 groups[choice].project=String(p.id);groups[choice].status="در حال انجام";saveGroups(groups);renderGroups();
 $("#group").scrollIntoView({behavior:"smooth"});$("#detailDialog").close();$("#notice").textContent="پروژه به گروه «"+groups[choice].name+"» وصل شد.";
};
 $("#reportThisProject").onclick=()=>{$("#reportTitle").value=p.title;$("#reportGoal").value=p.goal;$("#reportTools").value=p.materials;$("#reportResult").value="مراحل انجام‌شده: "+(getProgress()[p.id]||[]).filter(Boolean).length+" از "+p.steps.length+" مرحله. نتیجهٔ آزمایش را اینجا بنویس.";$("#detailDialog").close();$("#reportSection").scrollIntoView({behavior:"smooth"});};
}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-open]");if(b)openProject(b.dataset.open)});
$("#search").addEventListener("input",renderProjects);$("#category").addEventListener("change",renderProjects);
$("#closeDialog").onclick=()=>$("#detailDialog").close();
const STORAGE="nexora_easy_groups_v1";
function getGroups(){try{return JSON.parse(localStorage.getItem(STORAGE)||"[]")}catch{return []}}
function saveGroups(items){localStorage.setItem(STORAGE,JSON.stringify(items))}
function renderGroups(){
 const items=getGroups(), box=$("#savedGroups");
 box.innerHTML=items.length?items.map((g,i)=>`<article class="saved-group"><h3>${escapeHTML(g.name)}</h3><p><b>اعضا:</b> ${escapeHTML(g.members)}</p><p><b>پروژه:</b> ${escapeHTML(projects.find(p=>p.id===Number(g.project))?.title||"پروژهٔ حذف‌شده")}</p><p><b>وظایف:</b> ${escapeHTML(g.tasks||"هنوز ثبت نشده")}</p><label>وضعیت <select data-status="${i}"><option ${g.status==="شروع نشده"?"selected":""}>شروع نشده</option><option ${g.status==="در حال انجام"?"selected":""}>در حال انجام</option><option ${g.status==="انجام شد"?"selected":""}>انجام شد</option></select></label><p class="status">وضعیت فعلی: ${escapeHTML(g.status)}</p><button class="secondary" data-delete="${i}">حذف گروه</button></article>`).join(""):`<div class="empty">هنوز گروهی ثبت نکرده‌ای. فرم بالا را پر کن.</div>`;
 $("#groupCount").textContent=String(items.length);
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
$("#groupForm").addEventListener("submit",e=>{e.preventDefault();const items=getGroups();items.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),name:$("#groupName").value.trim(),members:$("#members").value.trim(),project:$("#groupProject").value,status:$("#groupStatus").value,tasks:$("#tasks").value.trim(),updatedAt:new Date().toISOString()});try{saveGroups(items);renderGroups();e.target.reset();$("#notice").textContent="گروه روی همین دستگاه ذخیره شد."}catch{$("#notice").textContent="ذخیره‌سازی ممکن نشد؛ فضای مرورگر را بررسی کن."}});
$("#savedGroups").addEventListener("change",e=>{if(e.target.matches("[data-status]")){const items=getGroups();const i=Number(e.target.dataset.status);if(items[i]){items[i].status=e.target.value;items[i].updatedAt=new Date().toISOString();saveGroups(items);renderGroups();}}});
$("#savedGroups").addEventListener("click",e=>{const b=e.target.closest("[data-delete]");if(b){const items=getGroups();items.splice(Number(b.dataset.delete),1);saveGroups(items);renderGroups();}});
$("#exportData").onclick=()=>{
 const payload={app:"NEXORA",version:2,exportedAt:new Date().toISOString(),groups:getGroups(),progress:getProgress()};
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
 const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="nexora-backup.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 $("#notice").textContent="فایل پشتیبان ساخته شد.";
};
$("#importData").addEventListener("change",async e=>{
 const file=e.target.files&&e.target.files[0];if(!file)return;
 try{const payload=JSON.parse(await file.text());
  if(payload.app!=="NEXORA"||!Array.isArray(payload.groups)||!payload.progress||typeof payload.progress!=="object")throw new Error("invalid");
  const validGroups=payload.groups.filter(g=>g&&typeof g.name==="string"&&typeof g.members==="string"&&["شروع نشده","در حال انجام","انجام شد"].includes(g.status)&&projects.some(p=>p.id===Number(g.project)));
  if(!confirm("اطلاعات فعلی با اطلاعات فایل جایگزین شود؟")){e.target.value="";return;}
  saveGroups(validGroups);saveProgress(payload.progress);renderGroups();renderProjects();updateDashboard();$("#notice").textContent="بازیابی اطلاعات انجام شد.";
 }catch{$("#notice").textContent="فایل پشتیبان معتبر نیست یا خوانده نشد.";}
 e.target.value="";
});
$("#makeReport").onclick=()=>{if(!$("#reportTitle").value.trim()){$("#notice").textContent="اول نام پروژه را وارد کن.";$("#reportTitle").focus();return;}$("#reportOutput").value=`گزارش کار پروژه\nنام پروژه: ${$("#reportTitle").value}\nهدف: ${$("#reportGoal").value}\nوسایل مورد استفاده: ${$("#reportTools").value}\nنتیجهٔ آزمایش و آموخته‌ها: ${$("#reportResult").value}\n\nساخته‌شده توسط دانش‌آموز پایه نهم`;$("#notice").textContent="گزارش ساخته شد؛ آن را مرور و کامل کن.";};
$("#copyReport").onclick=async()=>{try{await navigator.clipboard.writeText($("#reportOutput").value);$("#notice").textContent="گزارش کپی شد."}catch{$("#reportOutput").select();$("#notice").textContent="متن گزارش انتخاب شد؛ از گزینهٔ کپی گوشی استفاده کن."}};

const REPORTS_KEY="nexora_submitted_reports_v1";
function getSubmitted(){try{return JSON.parse(localStorage.getItem(REPORTS_KEY)||"[]")}catch{return []}}
function saveSubmitted(v){localStorage.setItem(REPORTS_KEY,JSON.stringify(v))}
function renderSubmitted(){
 const reports=getSubmitted();
 $("#submittedCount").textContent=String(reports.length);
 const html=reports.length?reports.map((r,i)=>`<article class="saved-group"><h3>${escapeHTML(r.title)}</h3><p><b>گروه:</b> ${escapeHTML(r.group||"گروه انتخاب نشده")}</p><p><b>وضعیت:</b> ${escapeHTML(r.reviewStatus||"ارسال‌شده برای بررسی")}</p><p>${escapeHTML(r.result||"نتیجه ثبت نشده")}</p></article>`).join(""):`<div class="empty">هنوز گزارشی برای بررسی ثبت نشده است.</div>`;
 $("#submittedReports").innerHTML=html;
 $("#teacherReports").innerHTML=reports.length?reports.map((r,i)=>`<article class="saved-group"><h3>${escapeHTML(r.title)} — ${escapeHTML(r.group||"گروه")}</h3><p><b>هدف:</b> ${escapeHTML(r.goal||"—")}</p><p><b>وسایل:</b> ${escapeHTML(r.tools||"—")}</p><p><b>نتیجه:</b> ${escapeHTML(r.result||"—")}</p><label>وضعیت بررسی<select data-review="${i}"><option ${r.reviewStatus==="ارسال‌شده برای بررسی"?"selected":""}>ارسال‌شده برای بررسی</option><option ${r.reviewStatus==="نیاز به اصلاح"?"selected":""}>نیاز به اصلاح</option><option ${r.reviewStatus==="تأیید شد"?"selected":""}>تأیید شد</option></select></label><label>بازخورد<textarea data-feedback="${i}" rows="2">${escapeHTML(r.feedback||"")}</textarea></label><button class="secondary" data-save-review="${i}">ذخیرهٔ بازخورد</button></article>`).join(""):`<div class="empty">هنوز گزارشی ثبت نشده است.</div>`;
}
$("#submitReport").onclick=()=>{
 const title=$("#reportTitle").value.trim();if(!title){$("#notice").textContent="نام پروژه را وارد کن.";return;}
 const groups=getGroups();if(!groups.length){$("#notice").textContent="برای تحویل گزارش، اول گروه کلاسی بساز.";$("#group").scrollIntoView({behavior:"smooth"});return;}
 const g=groups[0];
 const reports=getSubmitted();reports.push({id:Date.now().toString(36),title,goal:$("#reportGoal").value,tools:$("#reportTools").value,result:$("#reportResult").value,group:g.name,reviewStatus:"ارسال‌شده برای بررسی",feedback:"",submittedAt:new Date().toISOString()});
 saveSubmitted(reports);renderSubmitted();$("#notice").textContent="گزارش در نمونهٔ آزمایشی ثبت شد؛ هنوز برای معلم از طریق اینترنت ارسال نشده است.";
};
$("#teacherReports").addEventListener("click",e=>{
 const b=e.target.closest("[data-save-review]");if(!b)return;
 const i=Number(b.dataset.saveReview),r=getSubmitted();if(!r[i])return;
 const article=b.closest(".saved-group");
 r[i].reviewStatus=article.querySelector("[data-review]").value;
 r[i].feedback=article.querySelector("[data-feedback]").value;
 saveSubmitted(r);renderSubmitted();$("#notice").textContent="بازخورد در همین مرورگر ذخیره شد.";
});

renderProjects();renderGroups();updateDashboard();renderSubmitted();
