// button gallery
// -----------------------Acción y Aventura-----------------------------
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('show-gallery');
    const galeriaContent = document.getElementById('galeria-content');

    if (button && galeriaContent) {
        button.addEventListener('click', function () {
            galeriaContent.classList.toggle('hidden');
        });
    } else {
        console.error('El botón o el contenedor de la galería no se encontraron.');
    }
});
// -----------------------Estrategia y Simulación-----------------------------
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('show-gallery-two');
    const galeriaContent = document.getElementById('galeria-content-two');

    if (button && galeriaContent) {
        button.addEventListener('click', function () {
            galeriaContent.classList.toggle('hidden');
        });
    } else {
        console.error('El botón o el contenedor de la galería no se encontraron.');
    }
});
// -----------------------Deportes y Carreras-----------------------------
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('show-gallery-tree');
    const galeriaContent = document.getElementById('galeria-content-tree');

    if (button && galeriaContent) {
        button.addEventListener('click', function () {
            galeriaContent.classList.toggle('hidden3'); // Alterna la visibilidad
        });
    } else {
        console.error('El botón o el contenedor de la galería no se encontraron.');
    }
});
// -----------------------RPG y Fantasía-----------------------------
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('show-gallery-four');
    const galeriaContent = document.getElementById('galeria-content-tree');

    if (button && galeriaContent) {
        button.addEventListener('click', function () {
            galeriaContent.classList.toggle('hidden');
        });
    } else {
        console.error('El botón o el contenedor de la galería no se encontraron.');
    }
});