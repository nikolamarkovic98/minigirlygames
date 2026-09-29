// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // Scroll-spy — highlight the nav link for the section in view (home page only)
  var navLinks = document.querySelector('.nav-links');
  if (navLinks && document.getElementById('home')) {
    var spy = [
      { el: document.getElementById('home'),     link: navLinks.querySelector('a[href="/"]') },
      { el: document.getElementById('games'),    link: navLinks.querySelector('a[href="/#games"]') },
      { el: document.getElementById('download'), link: navLinks.querySelector('a[href="/#games"]') }
    ].filter(function (s) { return s.el && s.link; });

    var setActive = function () {
      var pos = window.scrollY + 100; // account for sticky header
      var atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      var current = spy[0];
      for (var i = 0; i < spy.length; i++) {
        if (spy[i].el.offsetTop <= pos) current = spy[i];
      }
      if (atBottom) current = spy[spy.length - 1]; // last section wins at page end
      navLinks.querySelectorAll('a').forEach(function (a) { a.classList.remove('active'); });
      if (current && current.link) current.link.classList.add('active');
    };

    window.addEventListener('scroll', setActive, { passive: true });
    window.addEventListener('resize', setActive);
    setActive();
  }

  // Contact form — no backend yet, open mail client
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = encodeURIComponent(form.name.value || '');
      var msg = encodeURIComponent(form.message.value || '');
      var from = form.email.value || '';
      var body = msg + '%0D%0A%0D%0A—%20' + name + '%20(' + encodeURIComponent(from) + ')';
      window.location.href = 'mailto:contact@stand-digital.com'
        + '?subject=' + encodeURIComponent('Mini Girly Games — message from ' + (form.name.value || 'a player'))
        + '&body=' + body;
    });
  }
})();
