'use strict';

(function () {
  var loginLink = document.querySelector('.main-header__user-login');
  var btnFormClose = document.querySelector('.form-login__btn-close');
  var formLogin = document.querySelector('.form-login');
  var login = document.querySelector('#field-email');
  var password = document.querySelector('#field-password');
  var isStorageSupport = true;
  var storageEmail = '';

  var showFormLogin = function () {
    formLogin.classList.add('form-login--show');
    window.util.overlay.classList.add('overlay--show-all');
    document.body.classList.add('overflow-hidden');
  };

  var hideFormLogin = function () {
    formLogin.classList.remove('form-login--show');
    window.util.overlay.classList.remove('overlay--show-all');
    document.body.classList.remove('overflow-hidden');
  };

  try {
    storageEmail = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

  var onLoginClick = function (evt) {
    evt.preventDefault();
    showFormLogin();

    if (storageEmail) {
      login.value = storageEmail;
      password.focus();
    } else {
      login.focus();
    }
  };

  var onFormLoginSubmit = function () {
    if (isStorageSupport) {
      localStorage.setItem('email', login.value);
    }
  };

  var onBtnFormCloseClick = function (evt) {
    evt.preventDefault();
    hideFormLogin();
  };

  var onOverlayClick = function (evt) {
    evt.preventDefault();
    hideFormLogin();
  };

  var modalEscKeydown = function (evt) {
    if (evt.keyCode === window.util.KEY_CODE_ESC) {
      evt.preventDefault();
      hideFormLogin();
    }
  };

  loginLink.addEventListener('click', onLoginClick);
  formLogin.addEventListener('submit', onFormLoginSubmit);
  btnFormClose.addEventListener('click', onBtnFormCloseClick);
  window.util.overlay.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', modalEscKeydown);
})();
