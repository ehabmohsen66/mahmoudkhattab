/**
 * contact-form.js
 * Progressive enhancement for the enquiry form.
 *
 * Without JS the form still works: it does a normal POST to contact.php and
 * the visitor lands on a styled confirmation page. With JS it posts in the
 * background and shows the result inline, so nobody loses their place on the
 * page. Nothing here is required for the rest of the site to run.
 */
(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var status  = document.getElementById('form-status');
  var started = document.getElementById('form-started');
  var langEl  = document.getElementById('form-lang');
  var button  = form.querySelector('button[type="submit"]');

  // timestamp the render — contact.php rejects sub-3-second submissions
  if (started) started.value = String(Math.floor(Date.now() / 1000));

  // carry the visitor's chosen language through to the email
  function syncLang() {
    if (!langEl) return;
    var active = document.querySelector('.lang-btn.active');
    langEl.value = (active && active.getAttribute('data-lang'))
      || document.documentElement.lang
      || 'ru';
  }
  syncLang();
  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest && e.target.closest('.lang-btn')) {
      setTimeout(syncLang, 50);
    }
  });

  function show(message, ok) {
    if (!status) { window.alert(message); return; }
    status.textContent = message;
    status.hidden = false;
    status.className = 'form-status ' + (ok ? 'is-ok' : 'is-error');
  }

  function busy(on) {
    if (!button) return;
    button.disabled = on;
    button.style.opacity = on ? '0.65' : '';
    button.style.pointerEvents = on ? 'none' : '';
  }

  form.addEventListener('submit', function (e) {
    // no fetch (very old browser) -> let the native POST happen
    if (typeof window.fetch !== 'function' || typeof window.FormData !== 'function') return;

    e.preventDefault();
    syncLang();

    var data = new FormData(form);
    var missing = ['name', 'contact', 'message'].filter(function (k) {
      return String(data.get(k) || '').trim().length < 2;
    });
    if (missing.length) {
      show('Пожалуйста, заполните все поля.', false);
      var first = form.querySelector('[name="' + missing[0] + '"]');
      if (first) first.focus();
      return;
    }

    busy(true);
    show('Отправляем…', true);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'X-Requested-With': 'fetch', 'Accept': 'application/json' }
    })
      .then(function (r) { return r.json().catch(function () { return { ok: r.ok, message: '' }; }); })
      .then(function (res) {
        busy(false);
        if (res.ok) {
          show(res.message || 'Спасибо! Ваш запрос отправлен.', true);
          form.reset();
          if (started) started.value = String(Math.floor(Date.now() / 1000));
        } else {
          show(res.message || 'Не удалось отправить. Напишите, пожалуйста, в WhatsApp.', false);
        }
      })
      .catch(function () {
        busy(false);
        show('Сеть недоступна. Напишите, пожалуйста, в WhatsApp — так быстрее всего.', false);
      });
  });
})();

/**
 * Decorative video loader.
 * The two transparent .webm overlays are 3.2 MB — 62% of the page weight —
 * and are purely ornamental. Loading them eagerly delayed the load event by
 * several seconds. They now fetch only when they scroll into view, and pause
 * when they scroll out. Respects prefers-reduced-motion.
 */
(function () {
  'use strict';

  var videos = document.querySelectorAll('video[data-src]');
  if (!videos.length) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;   // leave them unloaded entirely

  function load(v) {
    if (v.dataset.loaded) return;
    v.dataset.loaded = '1';
    v.src = v.dataset.src;
    v.load();
    var play = v.play();
    if (play && play.catch) play.catch(function () { /* autoplay blocked; harmless */ });
  }

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(videos, load);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var v = entry.target;
      if (entry.isIntersecting) {
        load(v);
        if (v.paused && v.dataset.loaded) {
          var p = v.play();
          if (p && p.catch) p.catch(function () {});
        }
      } else if (v.dataset.loaded && !v.paused) {
        v.pause();          // don't burn battery off-screen
      }
    });
  }, { rootMargin: '250px 0px' });

  Array.prototype.forEach.call(videos, function (v) { io.observe(v); });
})();
