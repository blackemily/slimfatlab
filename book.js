const parts = [
{title:"Understanding Weight Loss",chapters:["The Real Meaning of Weight Loss","Understanding Body Fat and How It Accumulates","Why People Gain Weight","Calories, Energy Balance, and the Human Body","Why Losing Weight Is Different for Everyone"]},
{title:"Metabolism and the Science of Fat Loss",chapters:["How Your Metabolism Really Works","Basal Metabolic Rate and Daily Energy Needs","The Relationship Between Muscle and Metabolism","Insulin, Blood Sugar, and Weight Management","Age, Hormones, and Changes in Metabolism"]},
{title:"Nutrition and Eating Habits",chapters:["Building a Weight-Loss-Friendly Diet","Protein, Carbohydrates, and Dietary Fats","Fiber and Its Role in Weight Management","Portion Sizes and Understanding Food Labels","Making Better Food Choices Without Feeling Deprived"]},
{title:"Hunger, Appetite, and Cravings",chapters:["The Difference Between Hunger and Appetite","Why Food Cravings Happen","Emotional Eating and Its Hidden Triggers","Managing Hunger While Losing Weight","Breaking the Cycle of Overeating"]},
{title:"Exercise, Activity, and Muscle",chapters:["The Role of Exercise in Weight Loss","Walking: An Underrated Weight-Loss Tool","Strength Training and Preserving Muscle","Cardio, Resistance Training, and Fat Loss","Staying Active With a Sedentary Lifestyle"]},
{title:"The Psychology of Weight Loss",chapters:["The Psychology Behind Successful Weight Loss","Motivation Versus Discipline","Developing Healthy Habits That Last","Overcoming Setbacks and the All-or-Nothing Trap","Building a Stronger Mind Through Weight Loss"]},
{title:"Sleep, Stress, and Lifestyle",chapters:["Sleep and Its Relationship to Weight","Stress, Cortisol, and Eating Behavior","Daily Routines That Support Weight Management","Alcohol, Sugary Drinks, and Hidden Calories","How Your Environment Influences Eating Habits"]},
{title:"Weight-Loss Strategies and Challenges",chapters:["Creating a Realistic Weight-Loss Plan","Understanding Intermittent Fasting","Low-Carbohydrate Diets and Other Popular Approaches","Why Weight-Loss Plateaus Happen","Losing Abdominal Fat: What You Need to Understand"]},
{title:"Supplements, Shortcuts, and Common Misconceptions",chapters:["Do Weight-Loss Supplements Really Work?","Understanding Common Weight-Loss Ingredients","The Truth About Fat Burners and Metabolism Boosters","GLP-1 Medications: Benefits, Risks, and Alternatives","Why Quick Fixes Often Fail to Produce Lasting Results"]},
{title:"Long-Term Success and Maintaining Your Results",chapters:["Setting Realistic Weight-Loss Goals","Tracking Progress Beyond the Scale","Avoiding Weight Regain After Losing Weight","Building a Sustainable Long-Term Lifestyle","Your Personal Roadmap to Lasting Weight Management"]}
];
const chapterTitles = parts.flatMap(p=>p.chapters);
function chapterHref(n){return "chapter-"+String(n).padStart(2,"0")+".html";}
(function(){
 const groups=document.getElementById("chapter-groups");
 if(groups){
  parts.forEach((part,pi)=>{
   const section=document.createElement("section");section.className="part-card";
   const heading=document.createElement("h3");heading.textContent="Part "+(pi+1)+" · "+part.title;section.appendChild(heading);
   const list=document.createElement("ol");
   part.chapters.forEach((title,ci)=>{
    const n=pi*5+ci+1,li=document.createElement("li"),a=document.createElement("a");
    a.href=chapterHref(n);a.textContent="Chapter "+n+": "+title;li.appendChild(a);list.appendChild(li);
   });
   section.appendChild(list);groups.appendChild(section);
  });
 }
 const script=document.currentScript,current=Number(script&&script.dataset.chapter||0);
 const host=document.getElementById("book-toc");
 if(host){
  const details=document.createElement("details");details.className="toc-details";
  details.open=window.matchMedia("(min-width: 801px)").matches;
  const summary=document.createElement("summary");summary.textContent="Contents · 50 Chapters";
  const nav=document.createElement("nav");
  parts.forEach((part,pi)=>{
   const h=document.createElement("h3");h.textContent="Part "+(pi+1)+" · "+part.title;nav.appendChild(h);
   const ol=document.createElement("ol");
   part.chapters.forEach((title,ci)=>{
    const n=pi*5+ci+1,li=document.createElement("li"),a=document.createElement("a");
    a.href=chapterHref(n);a.textContent="Chapter "+n+": "+title;
    if(n===current){a.className="active";a.setAttribute("aria-current","page");}
    li.appendChild(a);ol.appendChild(li);
   });
   nav.appendChild(ol);
  });
  const home=document.createElement("p");home.className="small";
  const link=document.createElement("a");link.href="index.html";link.textContent="Book home";home.appendChild(link);nav.appendChild(home);
  details.appendChild(summary);details.appendChild(nav);host.appendChild(details);
 }
 if(current){
  const pager=document.getElementById("chapter-pager");
  if(pager){
   const prev=document.createElement("a");prev.href=current===1?"index.html":chapterHref(current-1);prev.textContent=current===1?"← Book home":"← Previous chapter";
   const next=document.createElement("a");next.href=current===50?"index.html":chapterHref(current+1);next.textContent=current===50?"Back to contents ↑":"Next chapter →";
   pager.appendChild(prev);pager.appendChild(next);
  }
 }
})();