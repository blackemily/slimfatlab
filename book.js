const parts = [
{
 title:"Understand Your Weight",
 subtitle:"Start with the foundations: body weight, fat, energy balance, metabolism, nutrition, and the signals that influence hunger.",
 chapters:[
 "The Real Meaning of Weight Loss",
 "Understanding Body Fat and How It Accumulates",
 "Why People Gain Weight",
 "Calories, Energy Balance, and the Human Body",
 "Why Losing Weight Is Different for Everyone",
 "How Your Metabolism Really Works",
 "Basal Metabolic Rate and Daily Energy Needs",
 "The Relationship Between Muscle and Metabolism",
 "Insulin, Blood Sugar, and Weight Management",
 "Age, Hormones, and Changes in Metabolism",
 "Building a Weight-Loss-Friendly Diet",
 "Protein, Carbohydrates, and Dietary Fats",
 "Fiber and Its Role in Weight Management",
 "Portion Sizes and Understanding Food Labels",
 "Making Better Food Choices Without Feeling Deprived",
 "The Difference Between Hunger and Appetite"
 ]
},
{
 title:"Take Control of Your Habits",
 subtitle:"Turn understanding into everyday action: manage cravings, build activity, strengthen habits, and work with sleep, stress, and your environment.",
 chapters:[
 "Why Food Cravings Happen",
 "Emotional Eating and Its Hidden Triggers",
 "Managing Hunger While Losing Weight",
 "Breaking the Cycle of Overeating",
 "The Role of Exercise in Weight Loss",
 "Walking: An Underrated Weight-Loss Tool",
 "Strength Training and Preserving Muscle",
 "Cardio, Resistance Training, and Fat Loss",
 "Staying Active With a Sedentary Lifestyle",
 "The Psychology Behind Successful Weight Loss",
 "Motivation Versus Discipline",
 "Developing Healthy Habits That Last",
 "Overcoming Setbacks and the All-or-Nothing Trap",
 "Building a Stronger Mind Through Weight Loss",
 "Sleep and Its Relationship to Weight",
 "Stress, Cortisol, and Eating Behavior",
 "Daily Routines That Support Weight Management",
 "Alcohol, Sugary Drinks, and Hidden Calories"
 ]
},
{
 title:"Lose Weight and Keep It Off",
 subtitle:"Bring the pieces together: shape your environment, choose a realistic strategy, evaluate popular claims, and build a sustainable long-term plan.",
 chapters:[
 "How Your Environment Influences Eating Habits",
 "Creating a Realistic Weight-Loss Plan",
 "Understanding Intermittent Fasting",
 "Low-Carbohydrate Diets and Other Popular Approaches",
 "Why Weight-Loss Plateaus Happen",
 "Losing Abdominal Fat: What You Need to Understand",
 "Do Weight-Loss Supplements Really Work?",
 "Understanding Common Weight-Loss Ingredients",
 "The Truth About Fat Burners and Metabolism Boosters",
 "GLP-1 Medications: Benefits, Risks, and Alternatives",
 "Why Quick Fixes Often Fail to Produce Lasting Results",
 "Setting Realistic Weight-Loss Goals",
 "Tracking Progress Beyond the Scale",
 "Avoiding Weight Regain After Losing Weight",
 "Building a Sustainable Long-Term Lifestyle",
 "Your Personal Roadmap to Lasting Weight Management"
 ]
}
];
const chapterTitles = parts.flatMap(p=>p.chapters);
function chapterHref(n){return "chapter-"+String(n).padStart(2,"0")+".html";}
function partStart(pi){return parts.slice(0,pi).reduce((n,p)=>n+p.chapters.length,0)+1;}
function partForChapter(n){let count=0;for(let i=0;i<parts.length;i++){count+=parts[i].chapters.length;if(n<=count)return i;}return parts.length-1;}
(function(){
 const groups=document.getElementById("chapter-groups");
 if(groups){
  parts.forEach((part,pi)=>{
   const start=partStart(pi),end=start+part.chapters.length-1;
   const section=document.createElement("section");section.className="part-card";
   const label=document.createElement("div");label.className="part-label";label.textContent="PART "+(pi+1)+" · "+part.chapters.length+" CHAPTERS";section.appendChild(label);
   const heading=document.createElement("h3");heading.textContent=part.title;section.appendChild(heading);
   const desc=document.createElement("p");desc.className="part-description";desc.textContent=part.subtitle;section.appendChild(desc);
   const range=document.createElement("p");range.className="chapter-range";range.textContent="Chapters "+start+"–"+end;section.appendChild(range);
   const list=document.createElement("ol");
   part.chapters.forEach((title,ci)=>{
    const n=start+ci,li=document.createElement("li"),a=document.createElement("a");
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
  const summary=document.createElement("summary");summary.textContent="Three learning paths · 50 chapters";
  const nav=document.createElement("nav");
  parts.forEach((part,pi)=>{
   const h=document.createElement("h3");h.textContent="Part "+(pi+1)+" · "+part.title+" ("+part.chapters.length+")";nav.appendChild(h);
   const ol=document.createElement("ol"),start=partStart(pi);
   part.chapters.forEach((title,ci)=>{
    const n=start+ci,li=document.createElement("li"),a=document.createElement("a");
    a.href=chapterHref(n);a.textContent="Chapter "+n+": "+title;
    if(n===current){a.className="active";a.setAttribute("aria-current","page");}
    li.appendChild(a);ol.appendChild(li);
   });
   nav.appendChild(ol);
  });
  const home=document.createElement("p");home.className="small";
  const link=document.createElement("a");link.href="index.html";link.textContent="Home · Full guide";home.appendChild(link);nav.appendChild(home);
  details.appendChild(summary);details.appendChild(nav);host.appendChild(details);
 }
 if(current){
  const pager=document.getElementById("chapter-pager");
  if(pager){
   const prev=document.createElement("a");prev.href=current===1?"index.html":chapterHref(current-1);prev.textContent=current===1?"← Home": "← Previous chapter";
   const home=document.createElement("a");home.href="index.html";home.textContent="Home";
   const next=document.createElement("a");next.href=current===50?"index.html":chapterHref(current+1);next.textContent=current===50?"Back to home ↑":"Next chapter →";
   pager.appendChild(prev);pager.appendChild(home);pager.appendChild(next);
  }
  const article=document.querySelector(".article");
  const recommendation=document.createElement("section");recommendation.className="recommendation-link";
  const p=document.createElement("p");p.textContent="Want to explore additional resources alongside what you've learned?";
  const a=document.createElement("a");a.className="button-link";a.href="recommendations.html";a.textContent="Explore Our Weight-Loss Recommendations";
  recommendation.appendChild(p);recommendation.appendChild(a);
  if(article&&document.getElementById("chapter-pager"))article.insertBefore(recommendation,document.getElementById("chapter-pager"));
  const chapterLabel=document.querySelector(".chapter-no");
  if(chapterLabel){const pi=partForChapter(current);chapterLabel.textContent="PART "+(pi+1)+" · "+parts[pi].title+"  |  CHAPTER "+current+" OF 50";}
 }
})();
