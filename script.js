(function () {
  'use strict';
  var root = document.documentElement;

  // Theme: a stored choice wins; otherwise follow the OS setting (light by default).
  var themeBtn = document.querySelector('.theme-btn');
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function stored() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }
  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var dark = theme === 'dark';
    themeBtn.setAttribute('aria-pressed', String(dark));
  }

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  if (media) {
    var onChange = function (e) {
      var s = stored();
      if (s !== 'light' && s !== 'dark') apply(e.matches ? 'dark' : 'light');
    };
    if (media.addEventListener) media.addEventListener('change', onChange);
    else if (media.addListener) media.addListener(onChange);
  }

  // Mobile navigation menu
  var menuBtn = document.querySelector('.menu-btn');
  var list = document.getElementById('nav-list');

  function setOpen(open) {
    list.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  }

  menuBtn.addEventListener('click', function () {
    setOpen(menuBtn.getAttribute('aria-expanded') !== 'true');
  });
  list.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      menuBtn.focus();
    }
  });
})();
