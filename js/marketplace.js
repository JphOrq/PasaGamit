/* Marketplace: search bar, live filters, listing grid */

import { getAllListings, CATEGORIES, CONDITIONS, YEAR_LEVELS, COURSES } from './data.js';
import { listingCardHTML, bindListingActions, initSharedChrome, openInquiryModal, showToast } from './main.js';

initSharedChrome();

const grid = document.getElementById('market-grid');
const countEl = document.getElementById('result-count');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

/* Build the filter selects */
const catSelect = document.getElementById('filter-category');
CATEGORIES.forEach(c => catSelect.insertAdjacentHTML('beforeend', `<option value="${c.id}">${c.name}</option>`));
const courseSelect = document.getElementById('filter-course');
COURSES.forEach(c => courseSelect.insertAdjacentHTML('beforeend', `<option>${c}</option>`));
const yearSelect = document.getElementById('filter-year');
YEAR_LEVELS.forEach(y => yearSelect.insertAdjacentHTML('beforeend', `<option>${y}</option>`));
const condSelect = document.getElementById('filter-condition');
CONDITIONS.forEach(c => condSelect.insertAdjacentHTML('beforeend', `<option>${c}</option>`));

const state = { q: '', category: '', course: '', year: '', condition: '', maxPrice: '' };

function applyFilters() {
    let items = getAllListings();
    if (state.q) {
        const q = state.q.toLowerCase();
        items = items.filter(l => (l.title + ' ' + l.desc).toLowerCase().includes(q));
    }
    if (state.category) items = items.filter(l => l.category === state.category);
    if (state.course) items = items.filter(l => l.course === state.course);
    if (state.year) items = items.filter(l => l.year === state.year);
    if (state.condition) items = items.filter(l => l.condition === state.condition);
    if (state.maxPrice) items = items.filter(l => l.price <= Number(state.maxPrice));

    // Deep-link from home "Trade an Item" quick action or categories page
    const params = new URLSearchParams(location.search);
    if (params.get('trade')) items = items.filter(l => l.trade === params.get('trade'));
    if (params.get('cat')) items = items.filter(l => l.category === params.get('cat'));
    if (params.get('q')) {
        state.q = params.get('q').toLowerCase();
        searchInput.value = params.get('q');
        items = items.filter(l => (l.title + ' ' + l.desc).toLowerCase().includes(state.q));
    }

    countEl.textContent = items.length ? `${items.length} naka-paskil on the board` : 'Wala pa — try widening your filters!';
    if (!items.length) {
        grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <h3>Nothing pinned here yet</h3>
        <p class="font-marker">Try loosening the filters, or post the item yourself!</p>
        <a class="btn btn--primary" href="/pages/post-item.html">Post an Item</a>
      </div>`;
        return;
    }
    grid.innerHTML = items.map(listingCardHTML).join('');
    const single = items.length === 1 ? items[0] : null;
    if (single && params.get('item') === single.id) {
        showToast(`Showing ${single.title} — message the seller below.`);
        setTimeout(() => openInquiryModal(single), 600);
    }
}

searchForm.addEventListener('submit', (e) => { e.preventDefault(); state.q = searchInput.value.trim(); applyFilters(); });
searchInput.addEventListener('input', () => { state.q = searchInput.value.trim(); applyFilters(); });
catSelect.addEventListener('change', () => { state.category = catSelect.value; applyFilters(); });
courseSelect.addEventListener('change', () => { state.course = courseSelect.value; applyFilters(); });
yearSelect.addEventListener('change', () => { state.year = yearSelect.value; applyFilters(); });
condSelect.addEventListener('change', () => { state.condition = condSelect.value; applyFilters(); });
document.getElementById('filter-price').addEventListener('input', (e) => {
    state.maxPrice = e.target.value;
    document.getElementById('price-label').textContent = e.target.value ? `Up to ₱${Number(e.target.value).toLocaleString()}` : 'Any price';
    applyFilters();
});
document.getElementById('clear-filters').addEventListener('click', () => {
    Object.keys(state).forEach(k => (state[k] = ''));
    searchInput.value = ''; catSelect.value = ''; courseSelect.value = ''; yearSelect.value = ''; condSelect.value = '';
    document.getElementById('filter-price').value = '';
    document.getElementById('price-label').textContent = 'Any price';
    history.replaceState(null, '', location.pathname);
    applyFilters();
});

bindListingActions(grid);
applyFilters();
