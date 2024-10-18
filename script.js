document.addEventListener("DOMContentLoaded", function() {
    // Ocultar la pantalla de carga después de 3 segundos
    setTimeout(function() {
        const loader = document.querySelector('.wheel-and-hamster');
        if (loader) {
            loader.classList.add('fade-out');
            // Espera la duración de la animación antes de quitar completamente el elemento
            setTimeout(function() {
                loader.style.display = 'none';
            }, 500); // Tiempo suficiente para completar la animación CSS
        }
    }, 3000); // 3000 ms = 3 segundos
});
