/* Menú móvil universal (Ventanales HN) */
(function () {
  var header = document.querySelector('header');
  if (!header || header.querySelector('.mobile-menu-toggle')) return;
  var nav = header.querySelector('nav');
  if (!nav) return;
  var btn = document.createElement('button');
  btn.className = 'vm-burger';
  btn.setAttribute('aria-label', 'Abrir menú');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span></span><span></span>';
  btn.addEventListener('click', function () {
    var open = header.classList.toggle('vm-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { header.classList.remove('vm-open'); });
  });
  (header.querySelector('.header-inner') || header).appendChild(btn);
})();
