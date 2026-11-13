/* Home page: hero stats, featured deals (newspaper), recent, trending, board preview */

import { getAllListings, ANNOUNCEMENTS, BOARD_THREADS, ICONS } from './data.js';
import { listingCardHTML, bindListingActions, initSharedChrome } from './main.js';

initSharedChrome();

const listings = getAllListings();

/* Quick action buttons */
const quickActions = [
    { href: '/pages/post-item.html', label: 'Post an Item', icon: ICONS.plus },
    { href: '/pages/marketplace.html', label: 'Browse Marketplace', icon: ICONS.search },
    { href: '/pages/marketplace.html?trade=Open%20to%20trade', label: 'Trade an Item', icon: ICONS.swap },
    { href: '/index.html#featured', label: 'View Featured Deals', icon: ICONS.tag },
    { href: '/pages/student-hub.html', label: 'Join Student Discussions', icon: ICONS.chat }
];
document.getElementById('quick-actions').innerHTML = quickActions.map(a =>
    `<a class="quick-action" href="${a.href}"><span class="qa-icon">${a.icon}</span>${a.label}</a>`).join('');

/* Featured deals — front page newspaper style */
const featured = listings.filter(l => l.featured);
const [lead, ...side] = featured;
const today = new Date().toLocaleDateString('en-PH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

document.getElementById('featured-paper').innerHTML = `
  <div class="paper__masthead">
    <span class="paper__date">${today} · Special Marketplace Edition · Free forever</span>
    <h2>The PasaGamit Daily</h2>
    <p class="paper__slogan">"Walang forever sa textbook — lahat, aagos!"</p>
  </div>
  <div class="featured-grid">
    <article class="featured-story featured-story--lead">
      <span class="tag tag--red font-marker">Front Page Deal</span>
      <div class="thumb thumb--${lead.seed} hero-lead-thumb" role="img" aria-label="Illustration for ${lead.title}"></div>
      <h3>${lead.title}</h3>
      <p>${lead.desc}</p>
      <div style="margin-top:auto;display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        ${lead.price === 0 ? '<span class="price-tag price-tag--free">FREE</span>' : `<span class="price-tag">₱${lead.price.toLocaleString()}</span>`}
        <a class="btn btn--primary btn--sm" href="/pages/marketplace.html?item=${lead.id}">Read the full story →</a>
      </div>
    </article>
    ${side.slice(0, 2).map(s => `
    <article class="featured-story">
      <span class="tag tag--yellow font-marker">Editor's Pick</span>
      <h3>${s.title}</h3>
      <p>${s.desc.slice(0, 120)}...</p>
      <div style="margin-top:auto;display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <span class="price-tag">₱${s.price.toLocaleString()}</span>
        <a class="btn btn--accent btn--sm" href="/pages/marketplace.html?item=${s.id}">See the deal →</a>
      </div>
    </article>`).join('')}
  </div>`;

/* Recently posted */
const recent = [...listings].sort((a, b) => new Date(b.posted) - new Date(a.posted)).slice(0, 8);
document.getElementById('recent-listings').innerHTML = recent.map(listingCardHTML).join('');

/* Trending (most reviews) */
const trending = [...listings].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
document.getElementById('trending-listings').innerHTML = trending.map(listingCardHTML).join('');

bindListingActions(document.getElementById('recent-listings'));
bindListingActions(document.getElementById('trending-listings'));

/* Bulletin board: announcements */
document.getElementById('announcements').innerHTML = ANNOUNCEMENTS.map(a => `
  <div class="alert alert--${a.type}">
    <span aria-hidden="true" style="width:28px">${ICONS.megaphone}</span>
    <div><strong>${a.title}</strong><p>${a.body}</p></div>
  </div>`).join('');

/* Board thread teasers */
const threads = BOARD_THREADS.slice(0, 4);
document.getElementById('board-preview').innerHTML = threads.map(t => `
  <a class="pinned-card" href="/pages/student-hub.html" style="text-decoration:none">
    <h3>${t.title}</h3>
    <p>${t.excerpt.slice(0, 100)}...</p>
    <span class="pin-meta">${t.author} · ${t.replies} replies · ${t.last}</span>
  </a>`).join('');
