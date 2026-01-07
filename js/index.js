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


// --- Controle do Modal de Vídeo ---

// Variável com o ID do seu vídeo (Coloque o ID real aqui)
const YOUTUBE_VIDEO_ID = "cIpSleu-WxA"; 

window.abrirModal = function() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('youtubeFrame');
    
    if(modal && iframe) {
        // Monta a URL com autoplay e mudo (para evitar bloqueio de alguns navegadores) ou som ligado
        // rel=0 garante que não mostre vídeos de outros canais no final
        iframe.src = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`;
        
        modal.style.display = "flex";
        // Previne rolagem da página atrás do modal
        document.body.style.overflow = "hidden";
    }
}

window.fecharModal = function() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('youtubeFrame');
    
    if(modal && iframe) {
        iframe.src = ""; // Para o vídeo imediatamente
        modal.style.display = "none";
        // Devolve a rolagem para a página
        document.body.style.overflow = "auto";
    }
}

// Fecha o modal se apertar ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        window.fecharModal();
    }
});