const registerServiceWorker=async()=>{if("serviceWorker"in navigator)try{const e=await navigator.serviceWorker.register("/serviceWorker.js");e.installing?console.log("Service worker installing"):e.waiting?console.log("Service worker installed"):e.active&&console.log("Service worker active")}catch(e){console.error(`Registration failed with ${e}`)}},setProjectsSectionAsGridInMobile=async()=>{const e=document.querySelector("section.projects");e.classList.forEach((t=>{"projects"!=t&&e.classList.remove(t)}));if(window.screen.width>992){e.classList.add("list");document.querySelector('button[data-class="list"]').classList.add("selected")}else{e.classList.add("grid");document.querySelector('button[data-class="grid"]').classList.add("selected")}},setCardDisplay=e=>{const t="selected";document.querySelectorAll(".project-btn").forEach((e=>{e.classList.remove(t)})),e.classList.add(t);const s=document.querySelector("section.projects");s.classList.forEach((e=>{"projects"!=e&&s.classList.remove(e)})),s.classList.add(e.dataset.class)},onSearchChange=e=>{console.log(e),document.querySelectorAll("article.row.project-tile").forEach((t=>{const s=t.dataset.title??"",r=t.dataset.description??"",o=s.toLowerCase().includes(e.toLowerCase()),c=r.toLowerCase().includes(e.toLowerCase());let i=3;t.style.setProperty("opacity",1),t.style.setProperty("order",i);const l=t.querySelector(".text-column h3"),a=t.querySelector(".text-column p");o|c?(o&&(i-=2),c&&(i-=1),t.style.setProperty("order",i),highlight(l,s,e),highlight(a,r,e)):(t.style.setProperty("opacity","0.25"),l.innerHTML=s,a.innerHTML=r)}))},highlight=(e,t,s)=>{const r=t.toLowerCase().indexOf(s.toLowerCase());if(r>=0){const o=t.substring(0,r)+"<span class='highlight'>"+t.substring(r,r+s.length)+"</span>"+t.substring(r+s.length);e.innerHTML=o}else e.innerHTML=t};registerServiceWorker(),setProjectsSectionAsGridInMobile();
