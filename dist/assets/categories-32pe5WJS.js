import{i as a,g as t,C as l,I as o,l as c,b as r}from"./main-BXhKCHyo.js";a();const d=t(),i=document.getElementById("categories-container");i.innerHTML=l.map(s=>{const e=d.filter(n=>n.category===s.id).slice(0,4);return`
  <section class="section" id="${s.id}">
    <div class="section-head">
      <span class="kicker">${o[s.icon]}</span>
      <h2>${s.name}</h2>
      <a class="see-all" href="/pages/marketplace.html?cat=${s.id}">See all →</a>
    </div>
    <p class="text-muted" style="margin-bottom:24px">${s.blurb}</p>
    <div class="card-grid">${e.map(c).join("")}</div>
  </section>`}).join("");r(i);
