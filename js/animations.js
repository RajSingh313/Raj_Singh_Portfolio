/* ═══════════════════════════════════════════
   animations.js — Scroll Reveal & Skill Bars
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Stagger delays for cards ── */
  document.querySelectorAll('[data-delay]').forEach(function (el) {
    el.style.transitionDelay = el.dataset.delay + 'ms';
  });

  /* ── Fade-up observer ── */
  const fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-up').forEach(function (el) {
    fadeObserver.observe(el);
  });

  /* ── Skill bar observer ── */
  const barObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.bar-fill').forEach(function (bar) {
            // Small delay so the animation is visible
            setTimeout(function () {
              bar.style.width = (bar.dataset.w || '0') + '%';
            }, 150);
          });
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  document.querySelectorAll('.skill-card').forEach(function (card) {
    barObserver.observe(card);
  });

  /* ── Timeline items ── */
  const tlObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          tlObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.timeline-item').forEach(function (item) {
    item.classList.add('fade-up');
    tlObserver.observe(item);
  });

  /* ── Project cards stagger ── */
  document.querySelectorAll('.proj-card').forEach(function (card, i) {
    card.classList.add('fade-up');
    card.style.transitionDelay = (i * 80) + 'ms';
    fadeObserver.observe(card);
  });

})();
