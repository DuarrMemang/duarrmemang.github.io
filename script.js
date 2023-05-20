const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  this.classList.toggle('open');
  menu.classList.toggle('open');
});
