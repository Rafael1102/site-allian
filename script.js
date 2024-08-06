window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.bottom = '0'; // Mostra o footer
    } else {
        footer.style.bottom = '-100px'; // Esconde o footer
    }
});