import{i as r,g as c,I as t,l as i,b as l,A as p,B as o}from"./main-BXhKCHyo.js";r();const n=c(),d=[{href:"/pages/post-item.html",label:"Post an Item",icon:t.plus},{href:"/pages/marketplace.html",label:"Browse Marketplace",icon:t.search},{href:"/pages/marketplace.html?trade=Open%20to%20trade",label:"Trade an Item",icon:t.swap},{href:"/index.html#featured",label:"View Featured Deals",icon:t.tag},{href:"/pages/student-hub.html",label:"Join Student Discussions",icon:t.chat}];document.getElementById("quick-actions").innerHTML=d.map(e=>`<a class="quick-action" href="${e.href}"><span class="qa-icon">${e.icon}</span>${e.label}</a>`).join("");const m=n.filter(e=>e.featured),[a,...g]=m,h=new Date().toLocaleDateString("en-PH",{weekday:"long",year:"numeric",month:"long",day:"numeric"});document.getElementById("featured-paper").innerHTML=`
  <div class="paper__masthead">
    <span class="paper__date">${h} · Special Marketplace Edition · Free forever</span>
    <h2>The PasaGamit Daily</h2>
    <p class="paper__slogan">"Walang forever sa textbook — lahat, aagos!"</p>
  </div>
  <div class="featured-grid">
    <article class="featured-story featured-story--lead">
      <span class="tag tag--red font-marker">Front Page Deal</span>
      <div class="thumb thumb--${a.seed} hero-lead-thumb" role="img" aria-label="Illustration for ${a.title}"></div>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
      <div style="margin-top:auto;display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        ${a.price===0?'<span class="price-tag price-tag--free">FREE</span>':`<span class="price-tag">₱${a.price.toLocaleString()}</span>`}
        <a class="btn btn--primary btn--sm" href="/pages/marketplace.html?item=${a.id}">Read the full story →</a>
      </div>
    </article>
    ${g.slice(0,2).map(e=>`
    <article class="featured-story">
      <span class="tag tag--yellow font-marker">Editor's Pick</span>
      <h3>${e.title}</h3>
      <p>${e.desc.slice(0,120)}...</p>
      <div style="margin-top:auto;display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <span class="price-tag">₱${e.price.toLocaleString()}</span>
        <a class="btn btn--accent btn--sm" href="/pages/marketplace.html?item=${e.id}">See the deal →</a>
      </div>
    </article>`).join("")}
  </div>`;const u=[...n].sort((e,s)=>new Date(s.posted)-new Date(e.posted)).slice(0,8);document.getElementById("recent-listings").innerHTML=u.map(i).join("");const f=[...n].sort((e,s)=>s.reviews-e.reviews).slice(0,4);document.getElementById("trending-listings").innerHTML=f.map(i).join("");l(document.getElementById("recent-listings"));l(document.getElementById("trending-listings"));document.getElementById("announcements").innerHTML=p.map(e=>`
  <div class="alert alert--${e.type}">
    <span aria-hidden="true" style="width:28px">${t.megaphone}</span>
    <div><strong>${e.title}</strong><p>${e.body}</p></div>
  </div>`).join("");const y=o.slice(0,4);document.getElementById("board-preview").innerHTML=y.map(e=>`
  <a class="pinned-card" href="/pages/student-hub.html" style="text-decoration:none">
    <h3>${e.title}</h3>
    <p>${e.excerpt.slice(0,100)}...</p>
    <span class="pin-meta">${e.author} · ${e.replies} replies · ${e.last}</span>
  </a>`).join("");
