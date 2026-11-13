/* Categories page: cards + per-category item previews */

import { getAllListings, CATEGORIES, ICONS } from './data.js';
import { listingCardHTML, bindListingActions, initSharedChrome } from './main.js';

initSharedChrome();

const listings = getAllListings();
const container = document.getElementById('categories-container');

container.innerHTML = CATEGORIES.map(cat => {
    const items = listings.filter(l => l.category === cat.id).slice(0, 4);
    return `
  <section class="section" id="${cat.id}">
    <div class="section-head">
      <span class="kicker">${ICONS[cat.icon]}</span>
      <h2>${cat.name}</h2>
      <a class="see-all" href="/pages/marketplace.html?cat=${cat.id}">See all →</a>
    </div>
    <p class="text-muted" style="margin-bottom:24px">${cat.blurb}</p>
    <div class="card-grid">${items.map(listingCardHTML).join('')}</div>
  </section>`;
}).join('');

bindListingActions(container);
