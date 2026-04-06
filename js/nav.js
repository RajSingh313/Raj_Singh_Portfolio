/* ═══════════════════════════════════════════
   nav.js — Navigation Behaviour
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks   = document.querySelectorAll('.nav-links a');
  const backTop    = document.getElementById('backTop');
  const sections   = document.querySelectorAll('section[id]');

  /* ── Hamburger toggle ── */
  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });

  /* ── Close mobile menu on link click ── */
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });

  /* ── Close on outside click ── */
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ── Active nav link on scroll ── */
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(function (s) { observer.observe(s); });

  /* ── Back to top ── */
  window.addEventListener('scroll', function () {
    if (backTop) {
      backTop.classList.toggle('visible', window.scrollY > 420);
    }
  }, { passive: true });

  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
