// Scroll Suave
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.header-menu a[href^="#"]');

  function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      if (section) {
          section.scrollIntoView({
              behavior: "smooth",
              block: "start",
          });
      }
  }

  linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

// Menu Hambúrguer
document.addEventListener('DOMContentLoaded', function () {
  const menuHamburguer = document.getElementById('menu-hamburguer');
  const navLinks = document.getElementById('nav-links');

  menuHamburguer.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuHamburguer.setAttribute('aria-expanded', isOpen);
  });
});

// Atualizar o ano no footer
document.addEventListener('DOMContentLoaded', function () {
  const dateElement = document.getElementById('date');
  if (dateElement) {
      dateElement.textContent = new Date().getFullYear();
  }
});
