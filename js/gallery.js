/* Gallery page: masonry of product shots, featured deals, success stories */

import { getAllListings, SUCCESS_STORIES, thumbHTML, priceHTML, starsHTML } from './data.js';
import { initSharedChrome, openInquiryModal, initSaveButtons } from './main.js';

initSharedChrome();
initSaveButtons();

const listings = getAllListings();

/* Product photo wall (first 8 listings as gallery tiles) */
document.getElementById('gallery-products').innerHTML = listings.slice(0, 8).map(l => `
  <figure class="masonry-item">
    ${thumbHTML(l, { height: 220 })}
    <figcaption>
      <h3>${l.title}</h3>
      <p>${l.condition} · listed by ${l.seller}</p>
    </figcaption>
  </figure>`).join('');

/* Featured deals strip */
document.getElementById('gallery-featured').innerHTML = listings.filter(l => l.featured).map(l => `
  <article class="listing-card">
    <div class="listing-card__media">${thumbHTML(l)}</div>
    <div class="listing-card__body">
      <h3 class="listing-card__title">${l.title}</h3>
      <div>${priceHTML(l)}</div>
      <div>${starsHTML(l.rating)} <span class="listing-card__meta">(${l.reviews})</span></div>
      <div class="listing-card__footer">
        <span class="listing-card__meta">by ${l.seller}</span>
        <button class="btn btn--sm btn--primary" data-gallery-inquire="${l.id}">Inquire</button>
      </div>
    </div>
  </article>`).join('');

document.getElementById('gallery-featured').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-gallery-inquire]');
    if (!btn) return;
    const listing = listings.find(l => l.id === btn.dataset.galleryInquire);
    if (listing) openInquiryModal(listing);
});

/* Successful transactions — pinned cards with quotes */
document.getElementById('gallery-stories').innerHTML = SUCCESS_STORIES.map(s => `
  <figure class="masonry-item">
    <div class="thumb ${s.thumb}" style="height:150px" role="img" aria-label="Illustration for ${s.title}"></div>
    <figcaption><h3>${s.title}</h3><p>${s.caption}</p></figcaption>
    <p class="quote">${s.quote}</p>
  </figure>`).join('');
