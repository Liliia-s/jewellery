'use strict';

(function () {
  var btnCard = document.querySelector('.product-info__button');
  var btnModalClose = document.querySelector('.modal-cart__btn-close');
  var modalCart = document.querySelector('.modal-cart');

  var showModalCart = function () {
    if (btnCard) {
      modalCart.classList.add('modal-cart--show');
      window.util.overlay.classList.add('overlay--show-all');
      document.body.classList.add('overflow-hidden');
    }
  };

  var hideModalCart = function () {
    if (btnCard) {
      modalCart.classList.remove('modal-cart--show');
      window.util.overlay.classList.remove('overlay--show-all');
      document.body.classList.remove('overflow-hidden');
    }
  };

  var onBtnCardClick = function (evt) {
    evt.preventDefault();
    showModalCart();
  };

  var onBtnModalCloseClick = function (evt) {
    evt.preventDefault();
    hideModalCart();
  };

  var onOverlayClick = function (evt) {
    evt.preventDefault();
    hideModalCart();
  };

  var modalEscKeydown = function (evt) {
    if (evt.keyCode === window.util.KEY_CODE_ESC) {
      evt.preventDefault();
      hideModalCart();
    }
  };

  var setListenersOnBtnCard = function () {
    if (btnCard) {
      btnCard.addEventListener('click', onBtnCardClick);
    }
  };

  setListenersOnBtnCard();

  var setListenersOnModalClose = function () {
    if (btnModalClose) {
      btnModalClose.addEventListener('click', onBtnModalCloseClick);
    }
  };

  setListenersOnModalClose();

  window.util.overlay.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', modalEscKeydown);
})();
