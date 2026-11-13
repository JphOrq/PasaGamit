/* About page: animated counters, expandable timeline, team bios, FAQ */
import { SAFETY_TIPS } from './data.js';
import { initSharedChrome } from './main.js';

initSharedChrome();

const STORY = [
    { year: '2023', title: 'A bulletin board idea', body: 'Started as a corkboard in a UP Diliman dorm hallway — students pinning pre-loved textbook flyers between class breaks.' },
    { year: '2024', title: 'Going digital', body: 'PasaGamit launched online so students from any campus could swap, sell, and trade without leaving their block.' },
    { year: '2025', title: 'Swap Day', body: 'Our first campus-wide Textbook Swap Day rehomed 500+ items in one afternoon — zero pesos, zero waste.' },
    { year: '2026', title: 'Today', body: 'Thousands of student listings across the country, all built on bayad na, bago naman buhay.' }
];

const GOALS = [
    { title: 'Zero-waste campuses', body: 'Help every student pass on what they no longer need instead of sending it to the landfill.' },
    { title: 'Affordable student life', body: 'Make textbooks, uniforms, and gadgets reachable for every budget.' },
    { title: 'Trust & safety first', body: 'Campus meet-up points, verified students, and a Report button on every listing.' },
    { title: 'Student-led, always', body: 'Built by students, for students — no corporate middlemen, just barkada energy.' }
];

const TEAM = [
    { name: 'Ella Mendoza', role: 'Founder & Chief Tipa', init: 'EM', color: '#8B5E3C', bio: 'Architecture graduate who turned her drafting-table declutter into PasaGamit.' },
    { name: 'Miguel Santos', role: 'Community Lead', init: 'MS', color: '#4A6A4B', bio: 'Engineering student who believes every calculator deserves a second life.' },
    { name: 'Andrea Reyes', role: 'Safety & Trust', init: 'AR', color: '#C6482A', bio: 'Nursing student keeping meet-ups safe and scams off the board.' },
    { name: 'Sofia Garcia', role: 'Growth', init: 'SG', color: '#2A6A8A', bio: 'Psychology student connecting blockmates to blockmate deals.' }
];

const IMPACT_STATS = [
    { label: 'items rehomed', target: 2340 },
    { label: 'verified students', target: 1850 },
    { label: 'saved by the community', target: 480000, prefix: '₱' },
    { label: 'kept from landfills', target: 1200000, suffix: ' kg' }
];

const FAQS = [
    { q: 'Is PasaGamit only for students?', a: 'Yes — it is built for and by students. A verified student email or school ID gets you posting privileges.' },
    { q: 'Is posting free?', a: 'Yes. Posting an item is free for verified students. We make nothing from your sale.' },
    { q: 'How do meet-ups work?', a: 'Sellers and buyers pick a public campus zone — library lobby, guard house, or student center — and inspect the item before paying.' },
    { q: 'What if something goes wrong?', a: 'Use the Report button on any listing or email report@pasagamit.ph. We act within 24 hours.' }
];

/* ---------- Timeline ---------- */

const timeline = document.getElementById('timeline');
timeline.innerHTML = STORY.map((s, i) => `
    <div class="timeline-item">
        <span class="timeline-item__year">${s.year}</span>
        <div class="timeline-item__card">
            <h3>${s.title}</h3>
            <button class="timeline-item__toggle" data-timeline="${i}" aria-expanded="false" aria-controls="timeline-body-${i}">What happened?</button>
            <div class="timeline-item__body" id="timeline-body-${i}">${s.body}</div>
        </div>
    </div>`).join('');

timeline.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-timeline]');
    if (!btn) return;
    const idx = btn.dataset.timeline;
    const body = document.getElementById(`timeline-body-${idx}`);
    const open = !body.classList.contains('is-open');
    body.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Show less' : 'What happened?';
});

/* ---------- Goals ---------- */

const goalsList = document.getElementById('goals-list');
goalsList.innerHTML = GOALS.map(g => `
    <div class="goal-item">
        <h3>${g.title}</h3>
        <p>${g.body}</p>
    </div>`).join('');

/* ---------- Team ---------- */

const teamGrid = document.getElementById('team-grid');
teamGrid.innerHTML = TEAM.map(t => `
    <article class="team-card" style="--accent:${t.color}">
        <span class="team-avatar" style="background:${t.color}">${t.init}</span>
        <div class="team-card__body">
            <h3>${t.name}</h3>
            <span class="role">${t.role}</span>
            <div class="team-card__bio" id="bio-${t.init}">${t.bio}</div>
        </div>
        <button class="btn btn--primary btn--sm" data-team="${t.init}" data-first="${t.name.split(' ')[0]}">Meet ${t.name.split(' ')[0]}</button>
    </article>`).join('');

teamGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-team]');
    if (!btn) return;
    const init = btn.dataset.team;
    const first = btn.dataset.first;
    const bio = document.getElementById(`bio-${init}`);
    const open = !bio.classList.contains('is-open');
    bio.classList.toggle('is-open');
    btn.textContent = open ? 'Know less' : `Meet ${first}`;
    btn.setAttribute('aria-expanded', String(open));
});

/* ---------- FAQ ---------- */

const faqList = document.getElementById('faq-list');
faqList.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item">
        <details id="faq-${i}">
            <summary>${f.q}</summary>
            <div class="faq-body">${f.a}</div>
        </details>
    </div>`).join('');

/* ---------- Safety tips ---------- */

const safetyList = document.getElementById('safety-list');
safetyList.innerHTML = SAFETY_TIPS.map(tip => `<li>${tip}</li>`).join('');

/* ---------- Animated impact counters ---------- */

const statContainer = document.getElementById('leaf-stats');
statContainer.innerHTML = IMPACT_STATS.map(s => `
    <div class="stat">
        <strong class="counter" data-target="${s.target}" data-prefix="${s.prefix || ''}" data-suffix="${s.suffix || ''}">0</strong>
        <span>${s.label}</span>
    </div>`).join('');

const counters = document.querySelectorAll('.counter');
let counted = false;

const formatNumber = (n) => Number(n).toLocaleString();

const startCounting = () => {
    if (counted) return;
    counted = true;
    counters.forEach(el => {
        const target = +el.dataset.target;
        const prefix = el.dataset.prefix;
        const suffix = el.dataset.suffix;
        let start = 0;
        const duration = 1400;
        const startTime = performance.now();
        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(progress * target);
            el.textContent = prefix + formatNumber(value) + suffix;
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = prefix + formatNumber(target) + suffix;
        };
        requestAnimationFrame(step);
    });
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) startCounting();
    });
}, { threshold: 0.2 });

observer.observe(statContainer);
