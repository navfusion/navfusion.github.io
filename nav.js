document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.topbar nav');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      if (navLinks.classList.contains('open')) {
        menuToggle.innerHTML = '&times;'; /* Close "X" icon */
      } else {
        menuToggle.innerHTML = '&#9776;'; /* Hamburger icon */
      }
    });
  }
});