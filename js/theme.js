/* ═══════════════════════════════════════════
   theme.js — Light / Dark Mode Toggle
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  const STORAGE_KEY = 'rs-theme';
  const html = document.documentElement;
  const btn  = document.getElementById('themeBtn');
  const icon = document.getElementById('themeIcon');

  // Restore saved preference or system preference
  const saved  = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let isDark = saved ? saved === 'dark' : prefersDark;

  function applyTheme(dark) {
    html.setAttribute('data-theme', dark ? 'dark' : 'light');
    icon.className = dark ? 'fas fa-moon' : 'fas fa-sun';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  applyTheme(isDark);

  btn.addEventListener('click', function () {
    isDark = !isDark;
    applyTheme(isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  });
})();
