const burgerIcon = document.getElementById('burgerIcon');
const mobileNav = document.getElementById('mobileNav');

burgerIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});