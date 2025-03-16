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
  const mainContent = document.getElementById('main-content');
  const footer = document.getElementById('footer');

  menuHamburguer.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuHamburguer.setAttribute('aria-expanded', isOpen);

      if (isOpen) {
          mainContent.style.marginTop = `${navLinks.scrollHeight}px`;
      } else {
          mainContent.style.marginTop = '0';
      }
  });

  footer.addEventListener('click', function () {
      window.scrollBy({ top: -100, left: 0, behavior: 'smooth' });
  });
});


// Atualizar o ano no footer
document.addEventListener('DOMContentLoaded', function () {
  const dateElement = document.getElementById('date');
  if (dateElement) {
      dateElement.textContent = new Date().getFullYear();
  }
});
