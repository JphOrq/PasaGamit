/* ==========================================================================
   PasaGamit — shared layout & behaviors (header, footer, nav, modals, saved)
   ========================================================================== */

import { ICONS, NOTIFICATIONS, getSavedIds, toggleSaved, getAllListings, thumbHTML, priceHTML, starsHTML, addReport } from './data.js';

/* ---------- Shared chrome (header + footer) ---------- */

const NAV_LINKS = [
    { href: '/index.html', label: 'Home', key: 'home' },
    { href: '/pages/marketplace.html', label: 'Marketplace', key: 'marketplace' },
    { href: '/pages/categories.html', label: 'Categories', key: 'categories' },
    { href: '/pages/student-hub.html', label: 'Student Hub', key: 'hub' },
    { href: '/pages/about.html', label: 'About Us', key: 'about' },
    { href: '/pages/contact.html', label: 'Contact Us', key: 'contact' },
    { href: '/pages/profile.html', label: 'My Profile', key: 'profile' }
];

function currentPage() {
    const p = location.pathname;
    if (p.includes('marketplace')) return 'marketplace';
    if (p.includes('categories')) return 'categories';
    if (p.includes('student-hub')) return 'hub';
    if (p.includes('about')) return 'about';
    if (p.includes('contact')) return 'contact';
    if (p.includes('profile')) return 'profile';
    return 'home';
}

function renderHeader() {
    const active = currentPage();
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `
    <p class="utility-bar"><span class="font-marker">Sari-sari prices, student-to-student.</span> Free posting for verified students.</p>
    <div class="container header-inner">
      <a class="brand" href="/index.html" aria-label="PasaGamit home">
        <span class="brand__mark" aria-hidden="true">PG</span>
        <span>
          <span class="brand__name">PasaGamit</span>
          <span class="brand__tag">bayad na, bago naman buhay</span>
        </span>
      </a>
      <nav class="main-nav" id="main-nav" aria-label="Main navigation">
        <ul class="main-nav__list">
          ${NAV_LINKS.map(l => `<li><a class="main-nav__link" href="${l.href}" ${l.key === active ? 'aria-current="page"' : ''}>${l.label}</a></li>`).join('')}
        </ul>
      </nav>
      <div class="header-actions">
        <div class="notif-wrap">
          <button class="icon-btn" id="notif-btn" aria-haspopup="true" aria-expanded="false" aria-label="Notifications">
            ${ICONS.bell}
            <span class="badge" id="notif-count">${NOTIFICATIONS.filter(n => n.unread).length}</span>
          </button>
          <div class="notif-panel" id="notif-panel" role="dialog" aria-label="Notifications">
            <h3>Balita sa iyo</h3>
            <ul id="notif-list">
              ${NOTIFICATIONS.map(n => `<li class="${n.unread ? 'is-unread' : ''}"><span class="dot" aria-hidden="true">${n.unread ? '●' : '○'}</span><span>${n.text}</span></li>`).join('')}
            </ul>
          </div>
        </div>
        <a class="icon-btn" href="/pages/post-item.html" aria-label="Post an item">${ICONS.plus}</a>
        <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>`;
    document.body.prepend(header);

    // Hamburger
    const toggle = header.querySelector('#nav-toggle');
    const nav = header.querySelector('#main-nav');
    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
    });

    // Notification dropdown
    const notifBtn = header.querySelector('#notif-btn');
    const notifPanel = header.querySelector('#notif-panel');
    notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = notifPanel.classList.toggle('is-open');
        notifBtn.setAttribute('aria-expanded', String(open));
        if (open) {
            const count = header.querySelector('#notif-count');
            if (count) count.remove();
            NOTIFICATIONS.forEach(n => (n.unread = false));
            notifPanel.querySelectorAll('li').forEach(li => {
                li.classList.remove('is-unread');
                li.querySelector('.dot').textContent = '○';
            });
        }
    });
    document.addEventListener('click', (e) => {
        if (!notifPanel.contains(e.target) && e.target !== notifBtn) {
            notifPanel.classList.remove('is-open');
            notifBtn.setAttribute('aria-expanded', 'false');
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            notifPanel.classList.remove('is-open');
            notifBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="/index.html" aria-label="PasaGamit home">
            <span class="brand__mark" aria-hidden="true">PG</span>
            <span>
              <span class="brand__name">PasaGamit</span>
              <span class="brand__tag">bayad na, bago naman buhay</span>
            </span>
          </a>
          <p>The student marketplace built like a barangay bulletin board — post it, pin it, pass it on. Made by students, for students, for a greener campus.</p>
        </div>
        <div>
          <h3>Marketplace</h3>
          <ul>
            <li><a href="/pages/marketplace.html">Browse all items</a></li>
            <li><a href="/pages/categories.html">Categories</a></li>
            <li><a href="/pages/post-item.html">Post an item</a></li>
            <li><a href="/pages/gallery.html">Gallery</a></li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li><a href="/pages/student-hub.html">Student Hub</a></li>
            <li><a href="/pages/about.html">About Us</a></li>
            <li><a href="/pages/contact.html">Contact Us</a></li>
            <li><a href="/pages/login.html">Login / Register</a></li>
          </ul>
        </div>
        <div>
          <h3>Safety &amp; Support</h3>
          <ul>
            <li><a href="/pages/about.html#safety">Transaction guidelines</a></li>
            <li><a href="/pages/contact.html">Report a problem</a></li>
            <li><a href="mailto:hello@pasagamit.ph">hello@pasagamit.ph</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 PasaGamit. A student community project.</span>
        <span class="font-marker">bawal sugal, bawal scam</span>
      </div>
    </div>`;
    document.body.appendChild(footer);
}

/* ---------- Inquiry modal (shared) ---------- */

function ensureModalRoot() {
    let root = document.getElementById('inquiry-modal-root');
    if (!root) {
        root = document.createElement('div');
        root.id = 'inquiry-modal-root';
        document.body.appendChild(root);
    }
    return root;
}

export function openInquiryModal(listing) {
    const root = ensureModalRoot();
    root.innerHTML = `
    <div class="modal-overlay is-open" role="presentation">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
        <div class="modal__head">
          <h2 id="inquiry-title">Message the seller</h2>
          <button class="modal__close" aria-label="Close dialog">×</button>
        </div>
        <div class="seller-chip">
          <span class="avatar-sm" aria-hidden="true">${listing.sellerInit}</span>
          <div>
            <strong>${listing.seller}</strong>
            <div class="rating">${starsHTML(listing.rating)} <span>(${listing.reviews} reviews)</span></div>
          </div>
        </div>
        <p><strong>About:</strong> ${listing.title} — ${priceHTML(listing)}</p>
        <label class="field" style="margin-top:16px">
          <span style="font-weight:700;font-size:.9375rem">Your message</span>
          <textarea id="inquiry-msg" placeholder="Hi! Is this still available? I can meet at the library lobby...">Hi! Is this still available?</textarea>
        </label>
        <div class="modal-actions">
          <button class="btn btn--ghost modal-cancel" type="button">Cancel</button>
          <button class="btn btn--primary modal-send" type="button">${ICONS.chat} Send inquiry</button>
        </div>
      </div>
    </div>`;

    const overlay = root.querySelector('.modal-overlay');
    const close = () => { root.innerHTML = ''; document.body.style.overflow = ''; };
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    root.querySelector('.modal__close').addEventListener('click', close);
    root.querySelector('.modal-cancel').addEventListener('click', close);
    root.querySelector('.modal-send').addEventListener('click', () => {
        const msg = root.querySelector('#inquiry-msg').value.trim();
        if (!msg) { showToast('Please write a short message first.'); return; }
        close();
        showToast('Inquiry sent! The seller will get back to you here.');
    });
    document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });
    document.body.style.overflow = 'hidden';
    root.querySelector('#inquiry-msg').focus();
}

/* ---------- Report modal ---------- */

export function openReportModal(listing) {
    const root = ensureModalRoot();
    const reasons = ['Suspicious price or scam', 'Prohibited item', 'Wrong category or spam', 'Offensive content', 'Counterfeit item'];
    root.innerHTML = `
    <div class="modal-overlay is-open" role="presentation">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="report-title">
        <div class="modal__head">
          <h2 id="report-title">Report this listing</h2>
          <button class="modal__close" aria-label="Close dialog">×</button>
        </div>
        <p class="text-muted" style="font-size:.9375rem">Reporting: <strong>${listing.title}</strong></p>
        <fieldset style="margin-top:12px">
          <legend>Why are you reporting it?</legend>
          <div class="radio-pills" style="flex-direction:column;align-items:stretch">
            ${reasons.map((r, i) => `
              <label class="radio-pill"><input type="radio" name="report-reason" value="${r}" ${i === 0 ? 'checked' : ''}><span>${r}</span></label>`).join('')}
          </div>
        </fieldset>
        <label class="field" style="margin-top:12px">
          <span style="font-weight:700;font-size:.9375rem">Details (optional)</span>
          <textarea id="report-details" placeholder="Tell us what happened..."></textarea>
        </label>
        <div class="modal-actions">
          <button class="btn btn--ghost modal-cancel" type="button">Cancel</button>
          <button class="btn btn--primary modal-send" type="button">${ICONS.flag} Submit report</button>
        </div>
      </div>
    </div>`;

    const overlay = root.querySelector('.modal-overlay');
    const close = () => { root.innerHTML = ''; document.body.style.overflow = ''; };
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    root.querySelector('.modal__close').addEventListener('click', close);
    root.querySelector('.modal-cancel').addEventListener('click', close);
    root.querySelector('.modal-send').addEventListener('click', () => {
        const reason = root.querySelector('input[name="report-reason"]:checked').value;
        addReport({ listingId: listing.id, listingTitle: listing.title, reason, details: root.querySelector('#report-details').value.trim() });
        close();
        showToast('Report received. Our moderators will review it within 24 hours.');
    });
    document.body.style.overflow = 'hidden';
}

/* ---------- Toast ---------- */

let toastTimer;
export function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.setAttribute('role', 'status');
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(() => toast.classList.add('is-visible'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
}

/* ---------- Saved items (event delegation so it works on any page) ---------- */

export function initSaveButtons() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-save-id]');
        if (!btn) return;
        e.preventDefault();
        const id = btn.dataset.saveId;
        const saved = toggleSaved(id);
        btn.classList.toggle('is-saved', saved);
        btn.setAttribute('aria-pressed', String(saved));
        btn.setAttribute('aria-label', saved ? 'Remove from saved items' : 'Save item');
        showToast(saved ? 'Saved! Check your profile to see it.' : 'Removed from your saved items.');
    });
    // Reflect saved state on load
    const ids = getSavedIds();
    document.querySelectorAll('[data-save-id]').forEach(btn => {
        if (ids.includes(btn.dataset.saveId)) {
            btn.classList.add('is-saved');
            btn.setAttribute('aria-pressed', 'true');
            btn.setAttribute('aria-label', 'Remove from saved items');
        }
    });
}

/* ---------- Card factory (used by marketplace, home, profile, etc.) ---------- */

export function listingCardHTML(listing) {
    return `
  <article class="listing-card" data-listing-id="${listing.id}">
    <div class="listing-card__media">
      ${thumbHTML(listing)}
      <button class="listing-card__save" data-save-id="${listing.id}" aria-pressed="false" aria-label="Save item">${ICONS.heart}</button>
    </div>
    <div class="listing-card__body">
      <h3 class="listing-card__title"><a href="/pages/marketplace.html?item=${listing.id}">${listing.title}</a></h3>
      <p class="listing-card__meta">${listing.category} · ${listing.condition} · ${listing.campus || 'Campus'}</p>
      <div>${priceHTML(listing)}</div>
      <div>${starsHTML(listing.rating || 5)} <span class="listing-card__meta">(${listing.reviews || 0})</span></div>
      <div class="listing-card__footer">
        <span class="listing-card__meta">by ${listing.seller}</span>
        <div class="listing-card__actions">
          <button class="btn btn--sm btn--primary" data-inquire-id="${listing.id}">Inquire</button>
          <button class="btn btn--sm btn--ghost" data-report-id="${listing.id}" aria-label="Report this listing">${ICONS.flag}</button>
        </div>
      </div>
    </div>
  </article>`;
}

export function bindListingActions(container) {
    container.addEventListener('click', (e) => {
        const inq = e.target.closest('[data-inquire-id]');
        if (inq) {
            const listing = getAllListings().find(l => l.id === inq.dataset.inquireId);
            if (listing) openInquiryModal(listing);
            return;
        }
        const rep = e.target.closest('[data-report-id]');
        if (rep) {
            const listing = getAllListings().find(l => l.id === rep.dataset.reportId);
            if (listing) openReportModal(listing);
        }
    });
}

/* ---------- Boot ---------- */

export function initSharedChrome() {
    renderHeader();
    renderFooter();
    initSaveButtons();

    const skip = document.createElement('a');
    skip.href = '#main';
    skip.className = 'skip-link';
    skip.textContent = 'Skip to main content';
    document.body.prepend(skip);

    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'main';
}
