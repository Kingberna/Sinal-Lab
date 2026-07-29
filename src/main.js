const nav = document.querySelector('.nav');
const progress = document.querySelector('.progress');
const menu = document.querySelector('.menu');

const onScroll = () => {
  nav.classList.toggle('scrolled', scrollY > 20);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max ? scrollY / max : 0})`;
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.section-head, .project, .manifesto > *, .services-intro, .service-list, .process > *, .cta > *').forEach(el => observer.observe(el));

const art = document.querySelector('.signal-art');
if (matchMedia('(pointer: fine)').matches) {
  document.querySelector('.hero').addEventListener('pointermove', event => {
    const x = (event.clientX / innerWidth - .5) * 18;
    const y = (event.clientY / innerHeight - .5) * 18;
    art.style.transform = `translate(${x}px, ${y}px)`;
  });
}
