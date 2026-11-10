const chapterTitles = ["A Closer Look at Nagano Lean Belly Tonic","Understanding the Japanese-Inspired Positioning","The Ingredient List: Start With the Label","How to Think About a Multi-Ingredient Formula","Green Tea Extract and EGCG","Camu Camu, Acerola, and Vitamin C","Mangosteen and Plant Antioxidants","Panax Ginseng and Eleuthero","Bitter Melon and Blood Sugar","Ashwagandha: Stress, Sleep, and Caution","Cinnamon and Ginger","Inulin, Fiber, and Digestive Health","Metabolism: What the Word Really Means","Belly Fat: What Can and Cannot Be Targeted","Appetite, Cravings, and Eating Patterns","How to Evaluate Supplement Claims","Safety, Medication Interactions, and Who Should Ask First","Choosing, Buying, and Using the Product Responsibly","A Practical Plan Beyond Any Supplement","Making an Informed Decision About Nagano"];
(function(){
 const script=document.currentScript;
 const current=Number(script && script.dataset.chapter || 0);
 const host=document.getElementById('book-toc');
 if(host){
   const nav=document.createElement('nav'); nav.innerHTML='<h2>Contents · 20 Chapters</h2>';
   const ol=document.createElement('ol');
   chapterTitles.forEach((title,i)=>{
     const n=i+1, li=document.createElement('li'), a=document.createElement('a');
     a.href='chapter-'+String(n).padStart(2,'0')+'.html';
     a.textContent='Chapter '+n+': '+title;
     if(n===current) a.className='active';
     li.appendChild(a); ol.appendChild(li);
   });
   nav.appendChild(ol);
   const home=document.createElement('p');home.className='small';
   const link=document.createElement('a');link.href='index.html';link.textContent='Book home';home.appendChild(link);
   nav.appendChild(home); host.appendChild(nav);
 }
 if(current){
   const pager=document.getElementById('chapter-pager');
   if(pager){
     const prev=document.createElement('a');
     prev.href=current===1?'index.html':'chapter-'+String(current-1).padStart(2,'0')+'.html';
     prev.textContent=current===1?'← Book home':'← Previous chapter';
     const next=document.createElement('a');
     next.href=current===chapterTitles.length?'index.html':'chapter-'+String(current+1).padStart(2,'0')+'.html';
     next.textContent=current===chapterTitles.length?'Back to contents ↑':'Next chapter →';
     pager.appendChild(prev);pager.appendChild(next);
   }
 }
})();