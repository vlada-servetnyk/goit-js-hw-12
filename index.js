import{a as f,S as b,i as n}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u=async(o,r=1)=>{const t="47345226-0bb2374200c7482689dd59086",a="https://pixabay.com/api/",{data:e}=await f(a,{params:{key:t,q:o,page:r,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}});return e},y=o=>o.map(({webformatURL:r,largeImageURL:t,tags:a,likes:e,views:s,comments:c,downloads:A})=>`
    <li class="gallery-item">
    <a href="${t}">
    <img class="image-down" src="${r}", alt="${a}" width="360px" height="150px">
    </a>

        <ul class="description-img">
        <li class="description-img-item">
            <h2 class="title-img">Likes</h2>
            <p class="characteristics-img">${e}</p>
        </li>
        <li class="description-img-item">
            <h2 class="title-img">Views</h2>
            <p class="characteristics-img">${s}</p>
        </li>
        <li class="description-img-item">
            <h2 class="title-img">Comments</h2>
            <p class="characteristics-img">${c}</p>
        </li>
        <li class="description-img-item">
            <h2 class="title-img">Downloads</h2>
            <p class="characteristics-img">${A}</p>
        </li>
    </ul>
    </li>
    `).join(""),g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",h=new b(".gallery a",{captionsData:"alt",captionDelay:250}),w=document.querySelector(".form"),p=document.querySelector(".gallery"),l=document.querySelector(".loader"),i=document.querySelector(".btn-none");let m="",d=1;w.addEventListener("submit",C);i.addEventListener("click",S);async function C(o){o.preventDefault(),d=1,i.classList.replace("btn-load-more","btn-none"),p.innerHTML="";let r=o.target.elements.name;if(m=r.value.trim(),!m){n.show({title:"",iconUrl:`${g}`,backgroundColor:"red",messageColor:"white",message:"Enter the data for the search!",position:"topRight"});return}l.style.display="inline-block";try{const t=await u(m,d);if(console.log(t),t.hits.length===0){i.classList.replace("btn-load-more","btn-none"),l.style.display="none",n.show({title:"",iconUrl:`${g}`,backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(p.insertAdjacentHTML("beforeend",y(t.hits)),t.hits.length<15||t.total===15){i.classList.replace("btn-load-more","btn-none"),l.style.display="none",n.show({title:"",backgroundColor:"blue",messageColor:"white",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),h.refresh(),r.value="";return}i.classList.replace("btn-none","btn-load-more"),h.refresh(),r.value="",l.style.display="none"}catch(t){n.show({title:"",iconUrl:`${g}`,backgroundColor:"red",messageColor:"white",message:`Sorry, ${t.message}. Please try again!`,position:"topRight"})}}async function S(){d+=1,i.classList.replace("btn-load-more","btn-none"),l.style.display="inline-block";try{const o=await u(m,d);p.insertAdjacentHTML("beforeend",y(o.hits)),i.classList.replace("btn-none","btn-load-more"),l.style.display="none";const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"}),o.hits.length<15&&(i.classList.replace("btn-load-more","btn-none"),n.show({title:"",backgroundColor:"blue",messageColor:"white",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){n.show({title:"",iconUrl:`${g}`,backgroundColor:"red",messageColor:"white",message:`Sorry, ${o.message}. Please try again!`,position:"topRight"})}}
//# sourceMappingURL=index.js.map
