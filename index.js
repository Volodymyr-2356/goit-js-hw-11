import{a as d,S as f,i as p}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m=d.create({baseURL:"https://pixabay.com/api/",params:{key:"56004619-5e359d977e1c08efaf1a151d7",image_type:"photo",orientation:"horizontal",safesearch:!0}}),y=s=>m.get("",{params:{q:s}}).then(o=>o.data),c=document.querySelector(".gallery"),u=document.querySelector(".loader");let i;function h(s){const o=s.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}"  />
          </a>

          <ul class="info">
            <p> Likes ${t.likes}</p>
            <p>Views ${t.views}</p>
            <p>Comments ${t.comments}</p>
            <p>Downloads ${t.downloads}</p>
          </ul>
        </li>
      `).join("");c.innerHTML=o,i?i.refresh():i=new f(".gallery a")}function g(){c.innerHTML=""}function L(){u.classList.add("hidden")}function b(){u.classList.remove("hidden")}const l=document.querySelector(".form");document.querySelector(".gallery");document.querySelector(".loader");l.addEventListener("submit",s=>{s.preventDefault();const t=l.elements["search-text"].value.trim();if(!t){p.show({title:"Warninig",titleColor:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(),b(),y(t).then(n=>{h(n.hits)}).catch(n=>{console.error(n)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
