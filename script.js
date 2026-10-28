document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navLinks');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  const form = document.querySelector('#tripForm');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const mood = form.querySelector('#mood').value;
    const party = form.querySelector('#travellers').value;
    form.querySelector('.form-message').textContent = `Your demo trip idea: ${mood.toLowerCase()} for ${party.toLowerCase()}. This form is a front-end demo and does not submit data.`;
  });
});
