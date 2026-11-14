import{i as p,S as y}from"./main-BXhKCHyo.js";p();const g=[{year:"2023",title:"A bulletin board idea",body:"Started as a corkboard in a UP Diliman dorm hallway — students pinning pre-loved textbook flyers between class breaks."},{year:"2024",title:"Going digital",body:"PasaGamit launched online so students from any campus could swap, sell, and trade without leaving their block."},{year:"2025",title:"Swap Day",body:"Our first campus-wide Textbook Swap Day rehomed 500+ items in one afternoon — zero pesos, zero waste."},{year:"2026",title:"Today",body:"Thousands of student listings across the country, all built on bayad na, bago naman buhay."}],h=[{title:"Zero-waste campuses",body:"Help every student pass on what they no longer need instead of sending it to the landfill."},{title:"Affordable student life",body:"Make textbooks, uniforms, and gadgets reachable for every budget."},{title:"Trust & safety first",body:"Campus meet-up points, verified students, and a Report button on every listing."},{title:"Student-led, always",body:"Built by students, for students — no corporate middlemen, just barkada energy."}],v=[{name:"Ella Mendoza",role:"Founder & Chief Tipa",init:"EM",color:"#8B5E3C",bio:"Architecture graduate who turned her drafting-table declutter into PasaGamit."},{name:"Miguel Santos",role:"Community Lead",init:"MS",color:"#4A6A4B",bio:"Engineering student who believes every calculator deserves a second life."},{name:"Andrea Reyes",role:"Safety & Trust",init:"AR",color:"#C6482A",bio:"Nursing student keeping meet-ups safe and scams off the board."},{name:"Sofia Garcia",role:"Growth",init:"SG",color:"#2A6A8A",bio:"Psychology student connecting blockmates to blockmate deals."}],$=[{label:"items rehomed",target:2340},{label:"verified students",target:1850},{label:"saved by the community",target:48e4,prefix:"₱"},{label:"kept from landfills",target:12e5,suffix:" kg"}],S=[{q:"Is PasaGamit only for students?",a:"Yes — it is built for and by students. A verified student email or school ID gets you posting privileges."},{q:"Is posting free?",a:"Yes. Posting an item is free for verified students. We make nothing from your sale."},{q:"How do meet-ups work?",a:"Sellers and buyers pick a public campus zone — library lobby, guard house, or student center — and inspect the item before paying."},{q:"What if something goes wrong?",a:"Use the Report button on any listing or email report@pasagamit.ph. We act within 24 hours."}],c=document.getElementById("timeline");c.innerHTML=g.map((e,t)=>`
    <div class="timeline-item">
        <span class="timeline-item__year">${e.year}</span>
        <div class="timeline-item__card">
            <h3>${e.title}</h3>
            <button class="timeline-item__toggle" data-timeline="${t}" aria-expanded="false" aria-controls="timeline-body-${t}">What happened?</button>
            <div class="timeline-item__body" id="timeline-body-${t}">${e.body}</div>
        </div>
    </div>`).join("");c.addEventListener("click",e=>{const t=e.target.closest("[data-timeline]");if(!t)return;const s=t.dataset.timeline,a=document.getElementById(`timeline-body-${s}`),n=!a.classList.contains("is-open");a.classList.toggle("is-open"),t.setAttribute("aria-expanded",String(n)),t.textContent=n?"Show less":"What happened?"});const A=document.getElementById("goals-list");A.innerHTML=h.map(e=>`
    <div class="goal-item">
        <h3>${e.title}</h3>
        <p>${e.body}</p>
    </div>`).join("");const m=document.getElementById("team-grid");m.innerHTML=v.map(e=>`
    <article class="team-card" style="--accent:${e.color}">
        <span class="team-avatar" style="background:${e.color}">${e.init}</span>
        <div class="team-card__body">
            <h3>${e.name}</h3>
            <span class="role">${e.role}</span>
            <div class="team-card__bio" id="bio-${e.init}">${e.bio}</div>
        </div>
        <button class="btn btn--primary btn--sm" data-team="${e.init}" data-first="${e.name.split(" ")[0]}">Meet ${e.name.split(" ")[0]}</button>
    </article>`).join("");m.addEventListener("click",e=>{const t=e.target.closest("[data-team]");if(!t)return;const s=t.dataset.team,a=t.dataset.first,n=document.getElementById(`bio-${s}`),i=!n.classList.contains("is-open");n.classList.toggle("is-open"),t.textContent=i?"Know less":`Meet ${a}`,t.setAttribute("aria-expanded",String(i))});const w=document.getElementById("faq-list");w.innerHTML=S.map((e,t)=>`
    <div class="faq-item">
        <details id="faq-${t}">
            <summary>${e.q}</summary>
            <div class="faq-body">${e.a}</div>
        </details>
    </div>`).join("");const x=document.getElementById("safety-list");x.innerHTML=y.map(e=>`<li>${e}</li>`).join("");const u=document.getElementById("leaf-stats");u.innerHTML=$.map(e=>`
    <div class="stat">
        <strong class="counter" data-target="${e.target}" data-prefix="${e.prefix||""}" data-suffix="${e.suffix||""}">0</strong>
        <span>${e.label}</span>
    </div>`).join("");const T=document.querySelectorAll(".counter");let l=!1;const d=e=>Number(e).toLocaleString(),k=()=>{l||(l=!0,T.forEach(e=>{const t=+e.dataset.target,s=e.dataset.prefix,a=e.dataset.suffix,n=1400,i=performance.now(),o=b=>{const r=Math.min((b-i)/n,1),f=Math.floor(r*t);e.textContent=s+d(f)+a,r<1?requestAnimationFrame(o):e.textContent=s+d(t)+a};requestAnimationFrame(o)}))},E=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&k()})},{threshold:.2});E.observe(u);
