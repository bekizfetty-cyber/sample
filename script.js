// script.js - Combined and modified

// --------- Mobile nav toggle ----------
const navToggle = document.getElementById('mobile-nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('nav-active');
  });
}

// --------- Menu tabs ----------
// This script will now only apply to 'Mains' and 'Drinks' as per the HTML update
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.target;
    document.querySelectorAll('.menu-pane').forEach(p => p.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

// --------- Smooth scrolling for nav links ----------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const el = document.querySelector(this.getAttribute('href'));
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Close mobile nav if open after clicking a link
    if (mainNav.classList.contains('nav-active')) {
      mainNav.classList.remove('nav-active');
    }
  });
});

// --------- Basic gallery lightbox ----------
document.querySelectorAll('.gallery-item').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';
    overlay.style.cursor = 'zoom-out';
    const large = document.createElement('img');
    large.src = img.src;
    large.style.maxWidth = '90%';
    large.style.maxHeight = '90%';
    large.style.borderRadius = '8px';
    overlay.appendChild(large);
    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    document.body.appendChild(overlay);
  });
});

// --------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();
