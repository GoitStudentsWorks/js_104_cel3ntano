import{A as H,a as ne,b as w,S as ce,K as ae,i as ie}from"./assets/vendor-37492f01.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();H.init({once:!0});window.addEventListener("load",()=>{H.refresh()});function re(e){const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=this.getAttribute("href");re(o)})});document.addEventListener("mousemove",function(e){document.querySelectorAll(".hero-back, .decor-bg").forEach(n=>{const s=-(e.clientX/window.innerWidth-.5)*20,c=-(e.clientY/window.innerHeight-.5)*10;n.style.backgroundPosition=`calc(50% + ${s}px) calc(50% + ${c}px)`}),document.querySelectorAll(".benefits-decor-img").forEach(n=>{const s=-(e.clientX/window.innerWidth-.5)*20,c=-(e.clientY/window.innerHeight-.5)*20;n.style.transform=`translate(${s}px, ${c}px)`})});const V=document.querySelector(".switch-open-burger"),F=document.querySelector(".switch-close-burger"),le=document.querySelector(".nav-list"),de=document.querySelector(".header-nav"),$=document.body,y=document.querySelector(".up-link"),b=document.querySelector(".header"),me=()=>{b.getAttribute("class")!="header"&&b.classList.toggle("header-background")},q=e=>{e.preventDefault(),me(),$.classList.toggle("toggle-scroll"),document.documentElement.classList.toggle("toggle-scroll"),F.classList.toggle("active-btn"),V.classList.toggle("active-btn"),de.classList.toggle("active-nav")},ue=e=>{e.target.getAttribute("class")==="nav-link hover"&&window.innerWidth<768&&q(e)},ge=()=>{(window.scrollY||window.pageYOffset)>100?(b.classList.remove("header-background"),y.classList.add("up-link-active")):(b.classList.add("header-background"),y.classList.remove("up-link-active"))};V.addEventListener("click",q);F.addEventListener("click",q);le.addEventListener("click",ue);document.addEventListener("scroll",ge);const Y=document.querySelector(".theme-btn"),K=document.querySelector(".switch-theme"),pe=document.body,ve=document.querySelectorAll(".change-them"),X=()=>{ve.forEach(e=>e.classList.toggle("change-them"))},U=()=>{pe.classList.toggle("dark-theme")},z=()=>{K.classList.toggle("edit-circle")};document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("statusThem")==="true"&&(Y.checked=!0,z(),U(),X())});const he=()=>{z(),U(),X();const e=K.classList.length>1;localStorage.setItem("statusThem",e)};Y.addEventListener("change",he);const u=document.querySelector(".hidden-text"),E=document.querySelector(".load-more-button");document.addEventListener("DOMContentLoaded",e=>{u.style.display="none"});E.addEventListener("click",()=>{u.style.display==="none"?(u.style.display="block",E.textContent="Show less"):u.style.display==="block"&&(u.style.display="none",E.textContent="Load more")});const R="/js_104_cel3ntano/assets/wallet-webservice-06280c40.jpg",ye="/js_104_cel3ntano/assets/wallet-webservice-2x-e6c5ae3a.jpg",B="/js_104_cel3ntano/assets/green-harvest-35f2b6d7.jpg",be="/js_104_cel3ntano/assets/green-harvest-2x-ae8385c7.jpg",J="/js_104_cel3ntano/assets/english-excellence-8065e930.jpg",fe="/js_104_cel3ntano/assets/english-excellence-2x-13bf943e.jpg",T="/js_104_cel3ntano/assets/power-pulse-05a42d66.jpg",we="/js_104_cel3ntano/assets/power-pulse-2x-e6ed7073.jpg",O="/js_104_cel3ntano/assets/vyshyvanka-vibes-64a37946.jpg",Se="/js_104_cel3ntano/assets/vyshyvanka-vibes-2x-744bc708.jpg",P="/js_104_cel3ntano/assets/energy-flow-7e50e16f.jpg",_e="/js_104_cel3ntano/assets/energy-flow-2x-153e5da2.jpg",A="/js_104_cel3ntano/assets/mimino-9a419ef5.jpg",Le="/js_104_cel3ntano/assets/mimino-2x-1da89b50.jpg",M="/js_104_cel3ntano/assets/chego-jewelry-d2bbb936.jpg",je="/js_104_cel3ntano/assets/chego-jewelry-2x-85306eae.jpg",N="/js_104_cel3ntano/assets/fruitbox-14676b6a.jpg",ke="/js_104_cel3ntano/assets/fruitbox-2x-33174f2d.jpg",D="/js_104_cel3ntano/assets/starlight-studio-e8b93bb6.jpg",xe="/js_104_cel3ntano/assets/starlight-studio-2x-6934bc95.jpg",i="/js_104_cel3ntano/assets/icons-4fa5f8a9.svg",f=[{imgSrc:R,imgSrcSet:`${R} 1x, ${ye} 2x`,alt:"Wallet Webservice",tech:"React, JavaScript, Node JS, Git",title:"wallet webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:B,imgSrcSet:`${B} 1x, ${be} 2x`,alt:"Green Harvest Webservice",tech:"React, JavaScript, Node JS, Git",title:"green harvest webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:J,imgSrcSet:`${J} 1x, ${fe} 2x`,alt:"English Excellence Webservice",tech:"React, JavaScript, Node JS, Git",title:"english excellence website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:T,imgSrcSet:`${T} 1x, ${we} 2x`,alt:"Power Pulse Webservice",tech:"React, JavaScript, Node JS, Git",title:"power pulse webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:O,imgSrcSet:`${O} 1x, ${Se} 2x`,alt:"Vyshyvanka Vibes Landing Page",tech:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes landing page",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:P,imgSrcSet:`${P} 1x, ${_e} 2x`,alt:"Energy Flow Webservice",tech:"React, JavaScript, Node JS, Git",title:"energy flow webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:A,imgSrcSet:`${A} 1x, ${Le} 2x`,alt:"Mimino Website",tech:"React, JavaScript, Node JS, Git",title:"mimino website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:M,imgSrcSet:`${M} 1x, ${je} 2x`,alt:"Chego Jewelry Website",tech:"React, JavaScript, Node JS, Git",title:"chego jewelry website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:N,imgSrcSet:`${N} 1x, ${ke} 2x`,alt:"Fruitbox Online Store",tech:"React, JavaScript, Node JS, Git",title:"fruitbox online store",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:D,imgSrcSet:`${D} 1x, ${xe} 2x`,alt:"Starlight Studio Landing Page",tech:"React, JavaScript, Node JS, Git",title:"starlight studio landing page",link:"https://github.com/cel3ntano/project_myResume"}],Q=document.querySelector(".projects-list"),I=document.querySelector(".project-btn");I.addEventListener("click",$e);let r=0;const l=3;function Ee(){const e=r*l,t=e+l,n=f.slice(e,t).map(({imgSrc:s,imgSrcSet:c,alt:a,tech:j,title:k,link:x})=>`
    <li class="projects-item">
      <img
        class="project-img"
        srcset="${c}"
        src="${s}"
        alt="${a}"
      />
      <p class="project-text">${j}</p>
      <div class="projects-wrap">
        <div class="projects-subtitle-wrap">
          <h3 class="projects-subtitle">${k}</h3>
        </div>
        <div class="project-link-wrap">
          <a
            class="project-link"
            href="${x}"
            target="_blank"
            rel="noopener noreferrer"
          >VISIT
            <svg width="24" height="24">
              <use href="${i}#icon-arrow-project"></use>
            </svg>
          </a>
        </div>
      </div>
    </li>
  `).join("");Q.insertAdjacentHTML("beforeend",n),r++,r*l>=f.length&&(I.style.display="none")}document.addEventListener("DOMContentLoaded",Ee);function $e(){const e=r*l,t=e+l,n=f.slice(e,t).map(({imgSrc:a,imgSrcSet:j,alt:k,tech:x,title:se,link:oe})=>`
    <li class="projects-item">
      <img
        class="project-img"
        srcset="${j}"
        src="${a}"
        alt="${k}"
        width="830"
        height="480"
      />
      <p class="project-text">${x}</p>
      <div class="projects-wrap">
        <div class="projects-subtitle-wrap">
          <h3 class="projects-subtitle">${se}</h3>
        </div>
        <div class="project-link-wrap">
          <a
            class="project-link"
            href="${oe}"
            target="_blank"
            rel="noopener noreferrer"
          >VISIT
            <svg width="24" height="24">
              <use href="${i}#icon-arrow-project"></use>
            </svg>
          </a>
        </div>
      </div>
    </li>
  `).join("");Q.insertAdjacentHTML("beforeend",n);const c=document.querySelector(".projects-item:last-child").getBoundingClientRect().height;window.scrollBy({left:0,top:c*2.5,behavior:"smooth"}),r++,r*l>=f.length&&(I.style.display="none")}const g=document.querySelector(".ac:first-child");g.classList.add("open");g.querySelector(".ac-panel").style.display="block";document.addEventListener("DOMContentLoaded",e=>{document.querySelectorAll(".ac").forEach(o=>{o.style.backgroundColor="var(--White)"}),g.style.backgroundColor="var(--Accent-secondary)"});new ne(".accordion-container",{duration:250,showMultiple:!1,openOnInit:[0],onOpen:function(e){const t=e.querySelector(".icon-button-faq-down"),o=e.querySelector(".icon-button-faq-up");t.classList.toggle("open"),o.classList.toggle("open"),e.style.backgroundColor="var(--Accent-secondary)",document.querySelectorAll(".ac").forEach(s=>{s!==e&&(s.style.backgroundColor="var(--White)",s.style.transition="background 250ms ease",s.classList.remove("open"))})},onClose:function(e){const t=e.querySelector(".icon-button-faq-down"),o=e.querySelector(".icon-button-faq-up");t.classList.toggle("open"),o.classList.toggle("open"),e.style.backgroundColor="transparent",e===g&&(g.style.backgroundColor="var(--Accent-secondary)")}});w.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function qe(){try{return(await w.get("/reviews")).data}catch{throw new Error("Not found")}}const S=document.querySelector(".reviews__arrow-left"),_=document.querySelector(".reviews__arrow-right"),W=document.querySelector(".reviews__list");async function Ie(){try{const e=await qe();G(e)}catch{G([])}}function G(e){if(e.length===0){W.innerHTML='<p class="non_info">Not found</p>';return}const t=e.map(o=>`<li class="reviews__item swiper-slide">
      <div class= reviews__card__container>
       <p class="reviews__descr">${o.review}</p>
       <div class="reviews__person">
        <img
          width="48"
          class="reviews__img"
          src="${o.avatar_url}"
          alt="${o.author}"
         />
       <h3 class="reviews__h3">${o.author}</h3>
       <div class="reviews__stars">
        <svg width="16" height="16">
          <use class="star__icon" href="${i}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${i}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${i}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${i}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${i}#icon-star"></use>
        </svg>
      </div>
       </div>
      </div>
    </li>`).join("");W.insertAdjacentHTML("beforeend",t)}const v=new ce(".reviews__swiper",{modules:[ae],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100,breakpoints:{320:{slidesPerView:1,spaceBetween:16},1280:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});S.addEventListener("click",()=>{v.slidePrev()});_.addEventListener("click",()=>{v.slideNext()});v.on("fromEdge",()=>{S.classList.remove("disabled_btn"),_.classList.remove("disabled_btn")});v.on("reachBeginning",()=>{S.classList.add("disabled_btn"),_.classList.remove("disabled_btn")});v.on("reachEnd",()=>{_.classList.add("disabled_btn"),S.classList.remove("disabled_btn")});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".reviews__swiper");new IntersectionObserver((o,n)=>{o.forEach(s=>{s.isIntersecting&&(Ie(),n.unobserve(e))})},{rootMargin:"0px 0px 50px 0px"}).observe(e)});const h=document.querySelector(".orrder-form-js"),p=document.querySelector(".modal-work-js"),Z=document.querySelector(".close-modal-work-js"),Ce=document.querySelector("[data-modal-root-js]"),Re=h.querySelector('button[type="submit"]'),C="feedback-form-state";let d={email:"",message:""};w.defaults.baseURL="https://portfolio-js.b.goit.study/api";function Be({title:e,message:t}){document.addEventListener("keydown",ee),Z.addEventListener("click",L),p.addEventListener("click",te),p.classList.remove("visually-hidden"),y.style.display="none",$.classList.toggle("modal-open"),document.documentElement.classList.toggle("modal-open"),Ce.innerHTML=`<h2 class="modal-work-text">${e}</h2>
      <p class="modal-work-text-p">${t}</p>`}function L(){Z.removeEventListener("click",L),document.removeEventListener("keydown",ee),p.removeEventListener("click",te),p.classList.add("visually-hidden"),y.style.display="block",$.classList.toggle("modal-open"),document.documentElement.classList.toggle("modal-open")}function ee(e){e.key==="Escape"&&L()}function te(e){e.target===p&&L()}async function Je(e){try{const t=await w.post("/requests",e);Be(t.data)}catch({message:t}){ie.warning({message:t})}}h.addEventListener("input",Oe);h.addEventListener("submit",Pe);Te();function Te(){const e=localStorage.getItem(C);if(!e)return;try{d=JSON.parse(e)}catch(n){console.error(n);return}const{email:t,message:o}=h.elements;t.value=d.email||"",o.value=d.message||"",m()}function Oe(e){const t=e.target.name;d[t]=e.target.value,localStorage.setItem(C,JSON.stringify(d)),m()}function Pe(e){e.preventDefault();const{email:t,message:o}=e.target.elements,n={email:t.value,comment:o.value};Je(n),d={email:"",message:""},localStorage.removeItem(C),h.reset(),Ae()}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("email-user"),t=document.getElementById("email-error"),o=document.getElementById("comment"),n=document.getElementById("comment-error"),s=document.querySelector(".valid-icon");e.addEventListener("blur",function(){e.value===""?(e.classList.remove("valid","invalid"),t.style.display="none",s.style.display="none"):e.validity.valid?(e.classList.remove("invalid"),e.classList.add("valid"),t.style.display="none",s.style.display="block"):(e.classList.remove("valid"),e.classList.add("invalid"),t.style.display="block",s.style.display="none"),m()}),o.addEventListener("blur",function(){o.value.trim()!==""?(o.classList.remove("invalid"),o.classList.add("valid"),n.style.display="none"):(o.classList.remove("valid"),o.classList.add("invalid"),n.style.display="block"),m()}),e.addEventListener("keydown",function(c){c.key==="Enter"&&(c.preventDefault(),e.validity.valid?o.focus():(e.focus(),t.style.display="block",s.style.display="none"))}),m()});function m(){const e=document.getElementById("email-user"),t=document.getElementById("comment");Re.disabled=!(e.validity.valid&&t.value.trim()!=="")}function Ae(){const e=document.getElementById("email-user"),t=document.getElementById("email-error"),o=document.getElementById("comment"),n=document.getElementById("comment-error"),s=document.querySelector(".valid-icon");e.classList.remove("valid","invalid"),t.style.display="none",s.style.display="none",o.classList.remove("valid","invalid"),n.style.display="none",m()}
//# sourceMappingURL=commonHelpers.js.map
