/* Post an Item: form with validation, photo upload preview, saves to localStorage */

import { CATEGORIES, CONDITIONS, YEAR_LEVELS, COURSES, TRADE_PREFS, saveUserListing } from './data.js';
import { initSharedChrome, showToast } from './main.js';

initSharedChrome();

const form = document.getElementById('post-form');
const successBox = document.getElementById('form-success');

/* Populate selects */
const fill = (el, arr, placeholder) => {
    el.insertAdjacentHTML('beforeend', `<option value="">${placeholder}</option>`);
    arr.forEach(v => el.insertAdjacentHTML('beforeend', `<option>${v}</option>`));
};
fill(document.getElementById('f-category'), CATEGORIES.map(c => c.name), 'Choose a category');
fill(document.getElementById('f-condition'), CONDITIONS, 'Choose condition');
fill(document.getElementById('f-course'), COURSES, 'Choose course');
fill(document.getElementById('f-year'), YEAR_LEVELS, 'Choose year level');

/* Photo upload preview */
const photoInput = document.getElementById('f-photos');
const previewBox = document.getElementById('photo-preview');
let photoURLs = [];

function addPhotos(files) {
    [...files].slice(0, 4).forEach(file => {
        if (!file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = () => {
            photoURLs.push(reader.result);
            renderPreview();
        };
        reader.readAsDataURL(file);
    });
}

function renderPreview() {
    previewBox.innerHTML = photoURLs.map((src, i) => `
    <div class="ph"><img src="${src}" alt="Uploaded photo preview ${i + 1}">
    <button type="button" data-remove-photo="${i}" aria-label="Remove photo ${i + 1}">×</button></div>`).join('');
}
previewBox.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-remove-photo]');
    if (btn) {
        photoURLs.splice(Number(btn.dataset.removePhoto), 1);
        renderPreview();
    }
});
photoInput.addEventListener('change', () => addPhotos(photoInput.files));
const zone = document.getElementById('upload-zone');
zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('is-dragover'); });
zone.addEventListener('dragleave', () => zone.classList.remove('is-dragover'));
zone.addEventListener('drop', (e) => { e.preventDefault(); zone.classList.remove('is-dragover'); addPhotos(e.dataTransfer.files); });

/* Validation */
const validators = {
    'f-title': v => v.trim().length >= 5 || 'Give it a clear title (at least 5 characters).',
    'f-desc': v => v.trim().length >= 20 || 'Describe it a bit more — at least 20 characters.',
    'f-price': v => v === '' || Number(v) >= 0 || 'Price cannot be negative.',
    'f-category': v => v !== '' || 'Pick a category.',
    'f-condition': v => v !== '' || 'Pick a condition.',
    'f-course': v => v !== '' || 'Pick your course.',
    'f-year': v => v !== '' || 'Pick your year level.'
};

function validateField(input) {
    const rule = validators[input.id];
    if (!rule) return true;
    const result = rule(input.value);
    const field = input.closest('.field');
    const msg = field.querySelector('.error-msg');
    if (result === true) {
        field.classList.remove('has-error'); field.classList.add('is-valid');
        msg.textContent = '';
        return true;
    }
    field.classList.add('has-error'); field.classList.remove('is-valid');
    msg.textContent = result;
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
    Object.keys(validators).forEach(id => {
        const el = document.getElementById(id);
        if (!validateField(el)) allValid = false;
    });
    if (!allValid) {
        showToast('Please fix the highlighted fields before posting.');
        form.querySelector('.has-error input, .has-error select')?.focus();
        return;
    }

    const listing = saveUserListing({
        title: document.getElementById('f-title').value.trim(),
        desc: document.getElementById('f-desc').value.trim(),
        price: Number(document.getElementById('f-price').value) || 0,
        category: document.getElementById('f-category').value.toLowerCase().split(' ')[0] === 'laboratory' ? 'lab' : document.getElementById('f-category').value.toLowerCase().split(' ')[0],
        condition: document.getElementById('f-condition').value,
        course: document.getElementById('f-course').value,
        year: document.getElementById('f-year').value,
        trade: document.getElementById('f-trade').value,
        photos: photoURLs,
        seller: 'You (demo user)',
        sellerInit: 'YU',
        rating: 5,
        reviews: 0,
        campus: 'Your Campus'
    });

    successBox.classList.add('is-visible');
    successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showToast('Posted! Your item is now on the marketplace board.');
    form.reset();
    photoURLs = [];
    renderPreview();
    form.querySelectorAll('.is-valid').forEach(f => f.classList.remove('is-valid'));
    document.getElementById('success-link').href = `/pages/marketplace.html?item=${listing.id}`;
});
