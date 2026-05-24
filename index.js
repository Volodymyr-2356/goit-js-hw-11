import{a as u,S as d,i as f}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p=u.create({baseURL:"https://pixabay.com/api/",params:{key:"56004619-5e359d977e1c08efaf1a151d7",image_type:"photo",orientation:"horizontal",safesearch:!0}}),m=s=>p.get("",{params:{q:s}}).then(o=>o.data),y=document.querySelector(".gallery");let a;function h(s){const o=s.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" />
          </a>

          <div class="info">
            <p> Likes ${t.likes}</p>
            <p>Views ${t.views}</p>
            <p>Comments ${t.comments}</p>
            <p>Downloads ${t.downloads}</p>
          </div>
        </li>
      `).join("");y.innerHTML=o,a?a.refresh():a=new d(".gallery a")}const l=document.querySelector(".form"),g=document.querySelector(".gallery"),c=document.querySelector(".loader");l.addEventListener("submit",s=>{s.preventDefault();const t=l.elements["search-text"].value.trim();if(!t){f.show({title:"Warninig",titleColor:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}g.innerHTML="",c.classList.remove("hidden"),m(t).then(n=>{h(n.hits)}).catch(n=>{console.error(n)}).finally(()=>{c.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
