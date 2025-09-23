document.addEventListener('DOMContentLoaded', function() {
  const buttonbar = document.querySelector('.button-bar');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
    // Alterna a classe 'active' na lista de links
    navLinks.classList.toggle('active');
    
    // Atualiza o atributo aria-expanded para acessibilidade
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
  });
});