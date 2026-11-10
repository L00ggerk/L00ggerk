(()=>{
  const langBtn=document.querySelector('#lang');const burger=document.querySelector('#burger');const nav=document.querySelector('#nav');
  let locale=localStorage.getItem('l00lang')==='en'?'en':'ru';
  function translate(){document.documentElement.lang=locale;document.querySelectorAll('[data-ru][data-en]').forEach(el=>{el.innerHTML=el.dataset[locale]});langBtn.textContent=locale==='ru'?'EN':'RU';}
  translate();langBtn.addEventListener('click',()=>{locale=locale==='ru'?'en':'ru';localStorage.setItem('l00lang',locale);translate()});
  burger.addEventListener('click',()=>{let on=nav.classList.toggle('open');burger.setAttribute('aria-expanded',on)});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');burger.setAttribute('aria-expanded','false')}));
  document.querySelector('#year').textContent=new Date().getFullYear();
  function progress(){let max=document.documentElement.scrollHeight-innerHeight;document.querySelector('#progress').style.width=(max>0?(scrollY/max*100):0)+'%'}
  addEventListener('scroll',progress,{passive:true});addEventListener('resize',progress);progress();
})();
