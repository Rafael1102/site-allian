window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.bottom = '0'; // Mostra o footer
    } else {
        footer.style.bottom = '-100px'; // Esconde o footer
    }
});
.description {
    font-size: clamp(1rem, 2.5vw, 1.5rem); /* Ajusta o tamanho da fonte de acordo com a largura da tela */
    margin: clamp(2rem, 4vw, 4rem) 0; /* Ajusta a margem superior e inferior */
    line-height: 1.5;
  }
