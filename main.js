document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const burger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.closest('.faq-list')?.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Role tabs (fitur page)
  const tabs = document.querySelectorAll('.role-tab');
  const panels = document.querySelectorAll('[data-role-panel]');
  if (tabs.length && panels.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const role = tab.dataset.role;
        panels.forEach(p => {
          p.style.display = (p.dataset.rolePanel === role) ? '' : 'none';
        });
      });
    });
  }

  // Contact form (static demo — no backend)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.querySelector('#form-note');
      if (note) {
        note.textContent = 'Terima kasih! Pesan kamu sudah kami terima, tim SchoolRide akan membalas ke email kamu dalam 1 hari kerja.';
        note.style.display = 'block';
      }
      form.reset();
    });
  }
});
