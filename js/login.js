/* Login / Register: tabbed forms with student verification */

import { initSharedChrome, showToast } from './main.js';

initSharedChrome();

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginTab = document.getElementById('tab-login');
const registerTab = document.getElementById('tab-register');

function showForm(which) {
    const isLogin = which === 'login';
    loginForm.style.display = isLogin ? 'block' : 'none';
    registerForm.style.display = isLogin ? 'none' : 'block';
    loginTab.setAttribute('aria-selected', String(isLogin));
    registerTab.setAttribute('aria-selected', String(!isLogin));
}
loginTab.addEventListener('click', () => showForm('login'));
registerTab.addEventListener('click', () => showForm('register'));
document.getElementById('go-register').addEventListener('click', () => showForm('register'));
document.getElementById('go-login').addEventListener('click', () => showForm('login'));

const emailRule = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Enter a valid email address.';
const validators = {
    'l-email': emailRule,
    'l-password': v => v.length >= 6 || 'Password must be at least 6 characters.',
    'r-name': v => v.trim().length >= 2 || 'Please enter your full name.',
    'r-email': emailRule,
    'r-verify': v => /.+@.*\.edu(\.ph)?$/.test(v.trim()) || /^\d{6,}$/.test(v.trim()) || 'Use your school email (.edu / .edu.ph) or a student ID of 6+ digits.',
    'r-password': v => v.length >= 6 || 'Password must be at least 6 characters.'
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

Object.keys(validators).forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => {
        if (el.closest('.field').classList.contains('has-error')) validateField(el);
    });
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    ['l-email', 'l-password'].forEach(id => { if (!validateField(document.getElementById(id))) ok = false; });
    if (!ok) return;
    showToast('Welcome back, Isko! (demo — no real account needed)');
    setTimeout(() => location.href = '/pages/profile.html', 900);
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    ['r-name', 'r-email', 'r-verify', 'r-password'].forEach(id => { if (!validateField(document.getElementById(id))) ok = false; });
    if (!ok) return;
    showToast('Account created! Welcome to the tambayan. (demo)');
    setTimeout(() => location.href = '/pages/profile.html', 900);
});
