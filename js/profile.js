/* Profile page: mock user info, tabs for listings / saved / history / settings */

import { getAllListings, getUserListings, getSavedIds, SAFETY_TIPS, ICONS } from './data.js';
import { listingCardHTML, bindListingActions, initSharedChrome, showToast } from './main.js';

initSharedChrome();

/* Transactions mock */
const TRANSACTIONS = [
    { id: 'T001', item: 'Casio fx-991ES PLUS Calculator', with: 'Andrea Reyes', date: '2026-11-10', amount: 480, status: 'done' },
    { id: 'T002', item: 'Anatomy Reviewer Bundle', with: 'Grace Ramos', date: '2026-11-08', amount: 120, status: 'done' },
    { id: 'T003', item: 'PE Uniform (Large)', with: 'Rafael Cruz', date: '2026-11-12', amount: 150, status: 'pending' },
    { id: 'T004', item: 'Canvas Tote + Bottle', with: 'Trina Bautista', date: '2026-11-05', amount: 180, status: 'done' }
];

/* Tabs */
const tabs = document.querySelectorAll('.profile-tab');
tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
    tab.setAttribute('aria-selected', 'true');
    document.querySelectorAll('.profile-panel').forEach(p => p.classList.remove('is-active'));
    document.getElementById(`panel-${tab.dataset.tab}`).classList.add('is-active');
}));

/* My listings */
const myListings = getUserListings();
const myListingsEl = document.getElementById('my-listings');
if (!myListings.length) {
    myListingsEl.innerHTML = `
    <div class="empty-state">
      <h3>Nothing posted yet</h3>
      <p class="font-marker">Your future buyers are waiting — post your first item!</p>
      <a class="btn btn--primary" href="/pages/post-item.html">Post an Item</a>
    </div>`;
} else {
    myListingsEl.innerHTML = myListings.map(listingCardHTML).join('');
    bindListingActions(myListingsEl);
}

/* Saved items */
const savedIds = getSavedIds();
const savedEl = document.getElementById('saved-items');
const saved = getAllListings().filter(l => savedIds.includes(l.id));
if (!saved.length) {
    savedEl.innerHTML = `
    <div class="empty-state">
      <h3>No saved items yet</h3>
      <p class="font-marker">Tap the heart on any listing to pin it here.</p>
      <a class="btn btn--accent" href="/pages/marketplace.html">Browse Marketplace</a>
    </div>`;
} else {
    savedEl.innerHTML = saved.map(listingCardHTML).join('');
    bindListingActions(savedEl);
}

/* Transaction history */
document.getElementById('tx-body').innerHTML = TRANSACTIONS.map(t => `
  <tr>
    <td><strong>${t.item}</strong><br><span class="text-muted" style="font-size:.8125rem">with ${t.with}</span></td>
    <td>${t.date}</td>
    <td>₱${t.amount.toLocaleString()}</td>
    <td><span class="tx-status tx-status--${t.status}">${t.status === 'done' ? 'Completed' : 'Pending'}</span></td>
  </tr>`).join('');

/* Settings toggles */
document.querySelectorAll('.switch input').forEach(sw => {
    sw.addEventListener('change', () => {
        showToast(sw.checked ? 'Setting turned on.' : 'Setting turned off.');
    });
});

/* Safety tips (transaction guidelines) */
document.getElementById('safety-tips').innerHTML = SAFETY_TIPS.map(tip => `
  <li style="display:flex;gap:8px;align-items:flex-start;padding:8px 0;border-bottom:1px dashed rgba(42,42,42,.2)">
    <span style="color:var(--forest-green)" aria-hidden="true">${ICONS.shield}</span><span style="font-size:.9375rem">${tip}</span>
  </li>`).join('');
