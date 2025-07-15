// Optional JS for effects or navbar scroll behavior
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#000';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
});