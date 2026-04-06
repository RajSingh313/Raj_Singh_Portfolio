/* ═══════════════════════════════════════════
   typed.js — Typewriter Effect
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  var roles = [
    'Java Backend Developer',
    'Spring Boot Engineer',
    'REST API Specialist',
    'Microservices Architect',
    'Full-Stack Learner'
  ];

  var el      = document.getElementById('typedRole');
  if (!el) return;

  var roleIdx = 0;
  var charIdx = 0;
  var deleting = false;
  var PAUSE_END   = 2000; // ms to pause at full word
  var PAUSE_START = 400;  // ms before starting to type next
  var TYPE_SPEED  = 75;
  var DEL_SPEED   = 45;

  function tick() {
    var current = roles[roleIdx];

    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, PAUSE_END);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx  = (roleIdx + 1) % roles.length;
        setTimeout(tick, PAUSE_START);
        return;
      }
    }

    setTimeout(tick, deleting ? DEL_SPEED : TYPE_SPEED);
  }

  // Start after a brief delay
  setTimeout(tick, 800);
})();
