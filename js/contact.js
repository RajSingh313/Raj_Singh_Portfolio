/* ═══════════════════════════════════════════
   contact.js — Form Validation & Submission
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  var form    = document.getElementById('contactForm');
  var status  = document.getElementById('formStatus');
  if (!form) return;

  function setStatus(msg, type) {
    status.textContent = msg;
    status.className   = 'form-status ' + type;
  }

  function clearErrors() {
    form.querySelectorAll('.error').forEach(function (el) {
      el.classList.remove('error');
    });
    setStatus('', '');
  }

  function validate(name, email, message) {
    var errors = [];
    var nameEl    = document.getElementById('fname');
    var emailEl   = document.getElementById('femail');
    var messageEl = document.getElementById('fmessage');

    if (!name.trim()) {
      nameEl.classList.add('error');
      errors.push('Name is required.');
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailEl.classList.add('error');
      errors.push('A valid email is required.');
    }
    if (!message.trim()) {
      messageEl.classList.add('error');
      errors.push('Message cannot be empty.');
    }
    return errors;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    var name    = document.getElementById('fname').value;
    var email   = document.getElementById('femail').value;
    var subject = document.getElementById('fsubject').value || 'Portfolio Inquiry';
    var message = document.getElementById('fmessage').value;

    var errors = validate(name, email, message);
    if (errors.length) {
      setStatus('⚠ ' + errors[0], 'error');
      return;
    }

    var body = [
      'Hi Raj,',
      '',
      'My name is ' + name + '.',
      '',
      message,
      '',
      'Reply to: ' + email
    ].join('\n');

    var mailto = 'mailto:rajsingh.dev108@gmail.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body='    + encodeURIComponent(body);

    window.location.href = mailto;
    setStatus('✓ Opening your email client…', 'success');
  });
})();
