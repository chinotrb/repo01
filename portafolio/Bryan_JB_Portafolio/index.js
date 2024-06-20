const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

var btnMostrarPopup = document.getElementById('mostrarPopup');
var popup = document.getElementById('popup');
var btnCerrarPopup = document.getElementById('cerrarPopup');

function mostrarPopup() {
  popup.style.display = 'block';
  setTimeout(function() {
      popup.style.top = '50px';
  }, 10); // Delay para permitir que el navegador aplique los estilos antes de mostrar el popup
}

// Función para cerrar el popup
function cerrarPopup() {
  popup.style.top = '0';
  setTimeout(function() {
      popup.style.display = 'none';
  }, 350); // Retraso para que el popup se oculte después de la transición
}

// Agregar evento de clic al botón para mostrar el popup
btnMostrarPopup.addEventListener('click', mostrarPopup);

// Agregar evento de clic al botón de cerrar el popup
btnCerrarPopup.addEventListener('click', cerrarPopup);