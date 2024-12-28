// Smooth scrolling for buttons and links
document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href') || '#';
    if (target.startsWith('#')) {
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }
  });
});