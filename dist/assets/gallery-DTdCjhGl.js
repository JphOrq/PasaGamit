import{i as r,a as l,g as d,t as s,p as c,c as o,o as g,d as m}from"./main-BXhKCHyo.js";r();l();const t=d();document.getElementById("gallery-products").innerHTML=t.slice(0,8).map(i=>`
  <figure class="masonry-item">
    ${s(i,{height:220})}
    <figcaption>
      <h3>${i.title}</h3>
      <p>${i.condition} · listed by ${i.seller}</p>
    </figcaption>
  </figure>`).join("");document.getElementById("gallery-featured").innerHTML=t.filter(i=>i.featured).map(i=>`
  <article class="listing-card">
    <div class="listing-card__media">${s(i)}</div>
    <div class="listing-card__body">
      <h3 class="listing-card__title">${i.title}</h3>
      <div>${c(i)}</div>
      <div>${o(i.rating)} <span class="listing-card__meta">(${i.reviews})</span></div>
      <div class="listing-card__footer">
        <span class="listing-card__meta">by ${i.seller}</span>
        <button class="btn btn--sm btn--primary" data-gallery-inquire="${i.id}">Inquire</button>
      </div>
    </div>
  </article>`).join("");document.getElementById("gallery-featured").addEventListener("click",i=>{const e=i.target.closest("[data-gallery-inquire]");if(!e)return;const a=t.find(n=>n.id===e.dataset.galleryInquire);a&&g(a)});document.getElementById("gallery-stories").innerHTML=m.map(i=>`
  <figure class="masonry-item">
    <div class="thumb ${i.thumb}" style="height:150px" role="img" aria-label="Illustration for ${i.title}"></div>
    <figcaption><h3>${i.title}</h3><p>${i.caption}</p></figcaption>
    <p class="quote">${i.quote}</p>
  </figure>`).join("");
