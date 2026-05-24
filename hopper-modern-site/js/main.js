// Hopper Modern — shared JS
(function () {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Scroll reveal
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('visible'));
  }

  // Contact form — static-friendly mailto fallback
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = encodeURIComponent(data.get('name') || '');
      const email = encodeURIComponent(data.get('email') || '');
      const company = encodeURIComponent(data.get('company') || '');
      const topic = encodeURIComponent(data.get('topic') || '');
      const message = encodeURIComponent(data.get('message') || '');
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0ATopic: ${topic}%0D%0A%0D%0A${message}`;
      const subject = encodeURIComponent(`[Hopper Modern] New enquiry from ${decodeURIComponent(name)}`);
      window.location.href = `mailto:seemab@hoppermodern.com?subject=${subject}&body=${body}`;
      const note = document.querySelector('#formNote');
      if (note) {
        note.style.display = 'block';
        note.textContent = 'Your email client should open with the message ready. If nothing happens, please email seemab@hoppermodern.com directly.';
      }
    });
  }

  // Footer year
  const y = document.querySelector('#year');
  if (y) y.textContent = new Date().getFullYear();
})();
