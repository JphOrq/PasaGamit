/* Contact page: inquiry form validation + FAQ */

import { ICONS } from './data.js';
import { initSharedChrome, showToast } from './main.js';

initSharedChrome();

/* Contact info cards */
const info = [
    { icon: ICONS.mail, title: 'Email us', body: '<a href="mailto:hello@pasagamit.ph">hello@pasagamit.ph</a><br>We reply within 1–2 school days.' },
    { icon: ICONS.phone, title: 'Text or call', body: '<a href="tel:+639171234567">0917 123 4567</a><br>Mon–Sat, 9AM–6PM (except holidays).' },
    { icon: ICONS.users, title: 'Facebook / IG', body: '@PasaGamitPH<br>DM us for quick questions.' },
    { icon: ICONS.shield, title: 'Report a scam', body: 'Use the Report button on any listing, or email <a href="mailto:report@pasagamit.ph">report@pasagamit.ph</a>. We act within 24 hours.' }
];
document.getElementById('contact-info').innerHTML = info.map(i => `
  <div class="contact-info-item">
    <span class="ci-icon" aria-hidden="true">${i.icon}</span>
    <div><h3>${i.title}</h3><p>${i.body}</p></div>
  </div>`).join('');

/* Inquiry form validation */
const form = document.getElementById('contact-form');
const validators = {
    'c-name': v => v.trim().length >= 2 || 'Please tell us your name.',
    'c-email': v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Please use a valid email (school email is best).',
    'c-subject': v => v !== '' || 'Pick what this is about.',
    'c-message': v => v.trim().length >= 15 || 'A few more details, please — at least 15 characters.'
};

function validateField(input) {
    const result = validators[input.id](input.value);
    const field = input.closest('.field');
    const msg = field.querySelector('.error-msg');
    if (result === true) {
        field.classList.remove('has-error'); field.classList.add('is-valid'); msg.textContent = '';
        return true;
    }
    field.classList.add('has-error'); field.classList.remove('is-valid'); msg.textContent = result;
    return false;
}

form.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => {
        if (el.closest('.field').classList.contains('has-error')) validateField(el);
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let allValid = true;
    Object.keys(validators).forEach(id => { if (!validateField(document.getElementById(id))) allValid = false; });
    if (!allValid) {
        showToast('Please fix the highlighted fields before sending.');
        return;
    }
    document.getElementById('contact-success').classList.add('is-visible');
    showToast('Message sent! We will reply within 1–2 school days.');
    form.reset();
    form.querySelectorAll('.is-valid').forEach(f => f.classList.remove('is-valid'));
});
