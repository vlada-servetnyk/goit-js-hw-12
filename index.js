import{a as A,S as f,i as n}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u=async(o,r=1)=>{const t="47345226-0bb2374200c7482689dd59086",a="https://pixabay.com/api/",{data:e}=await A(a,{params:{key:t,q:o,page:r,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}});return e},h=o=>o.map(({webformatURL:r,largeImageURL:t,tags:a,likes:e,views:s,comments:l,downloads:y})=>`
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
            <p class="characteristics-img">${l}</p>
        </li>
        <li class="description-img-item">
            <h2 class="title-img">Downloads</h2>
            <p class="characteristics-img">${y}</p>
        </li>
    </ul>
    </li>
    `).join(""),g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",b=new f(".gallery a",{captionsData:"alt",captionDelay:250}),w=document.querySelector(".form"),d=document.querySelector(".gallery"),c=document.querySelector(".loader"),i=document.querySelector(".btn-none");let m="",p=1;w.addEventListener("submit",C);i.addEventListener("click",S);async function C(o){o.preventDefault(),p=1,i.classList.replace("btn-load-more","btn-none"),d.innerHTML="";let r=o.target.elements.name;if(m=r.value.trim(),!m){n.show({title:"",iconUrl:`${g}`,backgroundColor:"red",messageColor:"white",message:"Enter the data for the search!",position:"topRight"});return}c.style.display="inline-block";try{const t=await u(m,p);if(t.hits.length===0){i.classList.replace("btn-load-more","btn-none"),c.style.display="none",n.show({title:"",iconUrl:`${g}`,backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else t.totalHits<15&&(d.insertAdjacentHTML("beforeend",h(t.hits)),i.classList.replace("btn-load-more","btn-none"),n.show({title:"",backgroundColor:"blue",messageColor:"white",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));d.insertAdjacentHTML("beforeend",h(t.hits)),i.classList.replace("btn-none","btn-load-more"),b.refresh(),r.value="",c.style.display="none"}catch(t){n.show({title:"",iconUrl:`${g}`,backgroundColor:"red",messageColor:"white",message:`Sorry, ${t.message}. Please try again!`,position:"topRight"})}}async function S(){p+=1,i.classList.replace("btn-load-more","btn-none"),c.style.display="inline-block";try{const o=await u(m,p);d.insertAdjacentHTML("beforeend",h(o.hits)),i.classList.replace("btn-none","btn-load-more"),c.style.display="none";const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"}),o.hits.length<15&&(i.classList.replace("btn-load-more","btn-none"),n.show({title:"",backgroundColor:"blue",messageColor:"white",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){n.show({title:"",iconUrl:`${g}`,backgroundColor:"red",messageColor:"white",message:`Sorry, ${o.message}. Please try again!`,position:"topRight"})}}
//# sourceMappingURL=index.js.map
