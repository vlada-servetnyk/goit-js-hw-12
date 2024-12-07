import{a as y,S as f,i as g}from"./assets/vendor-D0cagnvz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const h=async(t,o=1)=>{const i="47345226-0bb2374200c7482689dd59086",r="https://pixabay.com/api/",{data:e}=await y(r,{params:{key:i,q:t,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}});return e},u=t=>t.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:s,comments:c,downloads:A})=>`
    <li class="gallery-item">
    <a href="${i}">
    <img class="image-down" src="${o}", alt="${r}" width="360px" height="150px">
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
    `).join(""),p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",b=new f(".gallery a",{captionsData:"alt",captionDelay:250}),w=document.querySelector(".form"),d=document.querySelector(".gallery"),m=document.querySelector(".loader"),a=document.querySelector(".btn-none");let l="",n=1;w.addEventListener("submit",S);a.addEventListener("click",L);function S(t){t.preventDefault(),n=1,a.classList.replace("btn-load-more","btn-none"),d.innerHTML="";let o=t.target.elements.name;if(l=o.value.trim(),!l){g.show({title:"",iconUrl:`${p}`,backgroundColor:"red",messageColor:"white",message:"Enter the data for the search!",position:"topRight"});return}m.style.display="inline-block",h(l,n).then(i=>{i.totalHits===0&&g.show({title:"",iconUrl:`${p}`,backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.insertAdjacentHTML("beforeend",u(i.hits)),a.classList.replace("btn-none","btn-load-more"),b.refresh(),o.value="",m.style.display="none"}).catch(i=>console.log(i))}async function L(){n+=1,a.classList.replace("btn-load-more","btn-none"),m.style.display="inline-block";try{const t=await h(l,n);d.insertAdjacentHTML("beforeend",u(t.hits)),a.classList.replace("btn-none","btn-load-more"),m.style.display="none";const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:i*2,behavior:"smooth"}),n>=t.totalHits/t.hits.length&&(a.classList.replace("btn-load-more","btn-none"),g.show({title:"",backgroundColor:"blue",messageColor:"white",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t.message)}}
//# sourceMappingURL=index.js.map
