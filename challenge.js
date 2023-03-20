(()=>{"use strict";function e(e,t){return e.filter((e=>e.type===t))}function t(e){e.target.classList.contains("modal-container")&&!e.target.classList.contains("button")&&n()}function n(){document.body.removeEventListener("click",t),document.querySelector(".modal-container").remove()}async function a(e){const t=document.querySelector(".modal-container");t.innerHTML="",t.appendChild(await e)}function c(){document.querySelectorAll(".challenge-item button").forEach((e=>{e.addEventListener("click",(()=>{!function(e){const c=document.createElement("div");c.classList.add("modal-container"),document.body.appendChild(c),a(async function(e){const t=document.createElement("form");t.classList.add("modal-content");const c=document.createElement("h1");c.textContent=`Book room ${e.title} (step 1)`,t.appendChild(c);const i=document.createElement("p");i.textContent="What date would you like to come?",t.appendChild(i);const o=document.createElement("label");o.textContent="Date",o.for="input[type=date]",t.appendChild(o);const l=document.createElement("input");l.type="date",l.setAttribute("min",(new Date).toLocaleDateString()),t.appendChild(l);const s=document.createElement("button");return s.type="submit",s.classList.add("button","primary"),s.name="search-times",s.textContent="Search available times",t.appendChild(s),t.addEventListener("submit",(async t=>{t.preventDefault();const c=l.value;if(""===l.value)alert("Please choose a date");else{const t=await async function(e,t){const n=await fetch("https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date="+t+"&challenge="+e);return await n.json()}(e.id,c);a(async function(e,t){const c=document.createElement("form");c.classList.add("modal-content");const i=document.createElement("h1");i.textContent=`Book room ${e.title} (step 2)`,c.appendChild(i);const o=document.createElement("label");o.textContent="Name",o.for="input-name",c.appendChild(o);const l=document.createElement("input");l.type="text",l.setAttribute("required","true"),l.classList.add("input-name"),c.appendChild(l);const s=document.createElement("label");s.textContent="E-mail",s.for="input-email",c.appendChild(s);const r=document.createElement("input");r.type="email",r.setAttribute("required","true"),r.classList.add("input-email"),c.appendChild(r);const d=document.createElement("label");d.textContent="Phone number",d.for="input-phone",c.appendChild(d);const u=document.createElement("input");u.type="tel",u.setAttribute("required","true"),u.classList.add("input-phone"),c.appendChild(u);const m=document.createElement("label");m.textContent="What time?",s.for="select-time",c.appendChild(m);const p=document.createElement("select");p.classList.add("select-time");const h=document.createElement("option");h.textContent="-- Choose time --",p.appendChild(h),c.appendChild(p);for(let e=0;e<t.slots.length;e++){const n=document.createElement("option");n.textContent=t.slots[e],p.appendChild(n)}const y=document.createElement("label");y.textContent="How many participants?",y.for="select-participants",c.appendChild(y);const f=document.createElement("input");f.classList.add("select-participants"),f.type="number",f.min=e.minParticipants,f.max=e.maxParticipants,f.value=e.minParticipants,f.required=!0,c.appendChild(f);const g=document.createElement("button");return g.type="submit",g.classList.add("button","primary"),g.name="submit-booking",g.textContent="Submit booking",c.appendChild(g),c.addEventListener("submit",(async c=>{c.preventDefault();let i=document.querySelector(".input-name").value,o=document.querySelector(".input-email").value,l=document.querySelector(".input-phone").value,s=document.querySelector(".select-participants").value,r=document.querySelector(".select-time").value,d=t.date,u=e.id,m=s.match(/(\d+)/);l.match(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm)||alert("Wrongly putten phone number pleas try again."),"-- Select number --"===s?alert("Please select participants."):"-- Choose time --"===r?alert("Please choose time."):(s=parseInt(m[0]),await async function(e,t,n,a,c,i,o){const l=await fetch("https://lernia-sjj-assignments.vercel.app/api/booking/reservations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({challenge:e,name:t,email:n,phone:a,date:c,time:i,participants:o})}),s=await l.json();console.log(s)}(u,i,o,l,d,r,s),a(function(){const e=document.createElement("div");e.classList.add("modal-content","center");const t=document.createElement("h1");t.textContent="Thank you!",e.appendChild(t);const a=document.createElement("button");return a.classList.add("button","secondary"),a.textContent="Back to challenges",a.addEventListener("click",n),e.appendChild(a),e}()))})),c}(e,t))}})),t}(e)),document.body.addEventListener("click",t)}(JSON.parse(e.querySelector("input").value))}))}))}async function i(e,t,n,...a){document.querySelectorAll("input[name='sort-by']").forEach((e=>{e.checked=!1}));let i=await e;n.innerHTML="",n.nextElementSibling.classList.add("hidden"),a.forEach((e=>{i=e(i)})),0===i.length?n.nextElementSibling.classList.remove("hidden"):i.forEach((e=>{const a=t(e);n.append(a)})),c()}function o(e){let t,n,a;"online"===e.type?(t="fa-solid fa-laptop",n="Take challenge online",a="(online)"):(t="fa-sharp fa-solid fa-house",n="Book this room",a="(on-site)");const c=document.createElement("li");c.classList.add("challenge-item");const i=document.createElement("i");i.setAttribute("class",t+" challenge-image-icon"),c.appendChild(i);const o=document.createElement("img");o.classList.add("challenge-image"),o.src=e.image,o.alt="challenge image",c.appendChild(o);const l=document.createElement("h3");l.classList.add("challenge-title"),l.textContent=`${e.title} ${a}`,c.appendChild(l);const s=document.createElement("ul");s.classList.add("rating"),s.setAttribute("role","meter"),s.setAttribute("aria-label","rating"),s.setAttribute("arial-valuemin","0"),s.setAttribute("aria-valuemax","5"),s.setAttribute("aria-valuenow",e.rating),s.setAttribute("aria-valuetext",e.rating+" out of 5"),c.appendChild(s);const r=Math.floor(e.rating);for(let e=0;e<5;e++){let t=document.createElement("li");t.classList.add("rating-star"),e<r&&t.classList.add("active"),s.appendChild(t)}const d=document.createElement("small");d.classList.add("challenge-meta"),d.textContent=`${e.minParticipants}-${e.maxParticipants} participants`,c.appendChild(d);const u=document.createElement("p");u.classList.add("challenge-description"),u.textContent=e.description,u.textContent.length<50||(u.textContent=u.textContent.substring(0,50)+"..."),c.appendChild(u);const m=document.createElement("input");m.setAttribute("hidden","true"),m.setAttribute("value",JSON.stringify(e));const p=document.createElement("button");return p.classList.add("button","primary"),p.textContent=n,p.append(m),c.appendChild(p),function(e){e.classList.add("loading");const t=document.createElement("div");t.classList.add("lds-ring"),e.append(t);for(let e=0;e<5;e++){const e=document.createElement("div");t.append(e)}}(c),o.onload=()=>function(e){e.classList.remove("loading"),e.querySelector(".lds-ring").remove()}(c),c}function l(e){const t=[];return document.querySelectorAll(".filter-by-type input[type=checkbox]:checked").forEach((e=>{t.push(e.value)})),e.filter((e=>t.some((t=>e.type.includes(t)))))}async function s(e,t){let n=await t;return n=n.filter((t=>e.every((e=>t.labels.includes(e))))),n}function r(e){let t=document.getElementById("text-filter").value;return t.length>=3?e.filter((e=>e.title.toUpperCase().includes(t.toUpperCase())||e.description.toUpperCase().includes(t.toUpperCase()))):e}function d(e){const t=document.querySelectorAll(".starFrom.active"),n=document.querySelectorAll(".starTo.active");return e.filter((e=>e.rating>=t.length&&e.rating<=n.length))}const u=document.querySelector(".challenge-list"),m=document.querySelector("#text-filter"),p=document.querySelector("input[name='online-challenge']"),h=document.querySelector("input[name='on-site-challenge']"),y=[p,h],f=document.querySelector("#btn-container"),g=document.querySelectorAll(".rating-star");!async function(){const t=await async function(){const e=await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");return(await e.json()).challenges}(),n=function(){const e={},t=window.location.search,n=new URLSearchParams(t);return e.type=n.get("type"),e.minRating=n.get("min-rating"),e.maxRating=n.get("max-rating"),e.text=n.get("text"),e.tags=n.get("tags"),null!=e.tags&&(e.tags=e.tags.split(",")),e}();!function(){const e=document.querySelectorAll("input[name='sort-by']");let t;const n=document.querySelector(".challenge-list");let a;e.forEach((c=>{c.addEventListener("click",(()=>{t=document.querySelectorAll(".challenge-item"),e.forEach((e=>{"sort-by-rating"===e.id&&(a=e.checked)})),t=Array.from(t),a?t.sort((function(e,t){return t.childNodes[3].getAttribute("aria-valuenow")-e.childNodes[3].getAttribute("aria-valuenow")})):t.sort((function(e,t){return e.childNodes[2].textContent<t.childNodes[2].textContent?-1:e.childNodes[2].textContent>t.childNodes[2].textContent?1:0})),n.innerHTML="",t.forEach((e=>{n.append(e)}))}))}))}(),"online"===n.type?p.setAttribute("checked","true"):("onsite"===n.type||p.setAttribute("checked","true"),h.setAttribute("checked","true")),function(){const e=document.querySelectorAll(".starsFrom li"),t=document.querySelectorAll(".starsTo li");let n=null,a=5;e.forEach(((c,i)=>{c.addEventListener("click",(c=>{n===i?(c.target.classList.remove("active"),n=i-1):(c.target.classList.add("active"),n=i),e.forEach(((e,t)=>{t<i?e.classList.add("active"):t>i&&e.classList.remove("active")})),n>a&&t.forEach(((e,t)=>{t<=n&&e.classList.add("active")}))}))})),t.forEach(((e,c)=>{e.addEventListener("click",(e=>{a===c?(e.target.classList.remove("active"),a=c-1):(e.target.classList.add("active"),a=c),t.forEach(((e,t)=>{t<c?e.classList.add("active"):t>c&&e.classList.remove("active")})),n>a&&t.forEach(((e,t)=>{t<=n?e.classList.add("active"):e.classList.remove("active")}))}))}))}(),g.forEach((e=>{e.addEventListener("click",(async()=>{let e=f.querySelectorAll(".active");e=Array.from(e),e=e.map((e=>e.textContent));let n=t;n=await s(e,n),await i(n,o,u,r,l,d)}))}));const a=async function(e,t,n){let a=await e;const c=[];return a.forEach((e=>{const t=document.createElement("button");t.classList.add("btn"),t.textContent=e,n.append(t),c.push(t)})),c}(async function(e){let t=await e,n=[];return t.forEach((e=>{n.push(e.labels)})),n=n.flat(),n=new Set(n),n=Array.from(n),n}(t),0,f);(await a).forEach((e=>{e.addEventListener("click",(async e=>{e.target.classList.toggle("active");let n=f.querySelectorAll(".active");n=Array.from(n),n=n.map((e=>e.textContent));let a=t;a=s(n,a),i(a,o,u,r,l,d)}))})),m.addEventListener("keyup",(async()=>{let e=f.querySelectorAll(".active");e=Array.from(e),e=e.map((e=>e.textContent));let n=t;n=await s(e,n),await i(n,o,u,r,l,d)})),y.forEach((e=>{e.addEventListener("click",(async()=>{let e=f.querySelectorAll(".active");e=Array.from(e),e=e.map((e=>e.textContent));let n=t;n=await s(e,n),await i(n,o,u,r,l,d)}))})),await async function(e,t,n,a,c){const i=e;let o=n;if("online"===i.type?o=a(o,"online"):"onsite"===i.type&&(o=a(o,"onsite")),null!=i.tags&&i.tags.length>0){const e=document.querySelectorAll(".btn");i.tags.forEach((t=>{e.forEach((e=>{t===e.innerText&&e.click()}))}))}null!=i.minRating&&i.minRating>0&&i.minRating<=5&&document.querySelectorAll(".starsFrom li")[parseInt(i.minRating)-1].click(),null!=i.maxRating&&i.maxRating>=0&&i.maxRating<5&&document.querySelectorAll(".starsTo li")[parseInt(i.maxRating)-1].click(),null!=i.text&&document.getElementById("text-filter").setAttribute("value",i.text),o.forEach((e=>{const n=c(e);t.append(n)}))}(n,u,t,e,o),c()}(),document.querySelector("#show-filters").addEventListener("click",(()=>{document.querySelector(".filter-container").classList.add("show"),document.querySelector("#show-filters").classList.add("show")})),document.querySelector("#hide-filters").addEventListener("click",(()=>{document.querySelector(".filter-container").classList.remove("show"),document.querySelector("#show-filters").classList.remove("show")}))})();