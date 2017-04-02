var btnOpenMenu = document.querySelector('.main-menu__open-menu');
var mainMenu = document.querySelector('.main-menu__menu-list');

btnOpenMenu.addEventListener('click', function(event) {
  event.preventDefault();
  mainMenu.classList.toggle('main-menu__menu-list--open');
  if (btnOpenMenu.classList.contains('main-menu__open-menu')) {
      btnOpenMenu.classList.remove('main-menu__open-menu');
      btnOpenMenu.classList.add('main-menu__close-menu');
  } else {
    btnOpenMenu.classList.remove('main-menu__close-menu');
    btnOpenMenu.classList.add('main-menu__open-menu');
  }
})

var btnOpenOrder = document.querySelector('.btn--goods-order');
var modalOrder = document.querySelector('.modal-cart');

btnOpenOrder.addEventListener('click', function(event) {
  event.preventDefault();
  modalOrder.classList.toggle('modal-cart--open');
})

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        if (modalOrder.classList.contains('modal-cart--open')) {
        modalOrder.classList.remove('modal-cart--open');
        }
    }
});
