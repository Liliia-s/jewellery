'use strict';

(function () {
  var KEY_CODE_ESC = 27;
  var overlay = document.querySelector('.overlay');

  // var modalEscKeydown = function (evt, callback) {
  //   if (evt.keyCode === KEY_CODE_ESC) {
  //     templateFunction(evt, callback);
  //   }
  // };

  // var onOverlayClick = function (evt, callback) {
  //   templateFunction(evt, callback);
  // };

  // var templateFunction = function (evt, callback) {
  //   evt.preventDefault();
  //   callback();
  // };

  window.util = {
    KEY_CODE_ESC: KEY_CODE_ESC,
    overlay: overlay,
    // modalEscKeydown: modalEscKeydown,
    // onOverlayClick: onOverlayClick
  };
})();

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

'use strict';

(function () {
  var catalogFilter = document.querySelector('.catalog__filter-wrapper');
  var catalogFilterButton = document.querySelector('.catalog__filter-button');
  var catalogFilterBox = document.querySelector('.catalog__filter-box');
  var catalogButtonClose = document.querySelector('.catalog__button-close');

  var hideFilter = function () {
    if (catalogFilter) {
      catalogFilter.classList.add('catalog__filter-wrapper--hide');
      catalogFilterButton.classList.add('catalog__filter-button--show');
    }
  };

  hideFilter();

  var addStateElements = function () {
    if (catalogFilter) {
      catalogFilter.classList.remove('catalog__filter-wrapper--hide');
      catalogFilter.classList.add('catalog__filter-wrapper--position');
      catalogButtonClose.classList.add('catalog__button-close--show');
      catalogFilterBox.classList.add('catalog__filter-box--clear');
      window.util.overlay.classList.add('overlay--show');
    }
  };

  var removeStateElements = function () {
    if (catalogFilter) {
      catalogFilter.classList.add('catalog__filter-wrapper--hide');
      catalogFilter.classList.remove('catalog__filter-wrapper--position');
      catalogButtonClose.classList.add('catalog__button-close--show');
      catalogFilterBox.classList.remove('catalog__filter-box--clear');
      window.util.overlay.classList.remove('overlay--show');
    }
  };

  var onCatalogFilterButtonClick = function (evt) {
    evt.preventDefault();
    addStateElements();
  };

  var onCatalogButtonCloseClick = function (evt) {
    evt.preventDefault();
    removeStateElements();
  };

  var onOverlayClick = function (evt) {
    evt.preventDefault();
    removeStateElements();
  };

  var modalEscKeydown = function (evt) {
    if (evt.keyCode === window.util.KEY_CODE_ESC) {
      evt.preventDefault();
      if (catalogFilter) {
        removeStateElements();
      }
    }
  };

  var setListenersOnFilter = function () {
    if (catalogFilter || catalogButtonClose) {
      catalogFilterButton.addEventListener('click', onCatalogFilterButtonClick);
      catalogButtonClose.addEventListener('click', onCatalogButtonCloseClick);
    }
  };

  setListenersOnFilter();

  window.util.overlay.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', modalEscKeydown);
})();

'use strict';

(function () {
  var loginLink = document.querySelector('.main-header__user-login');
  var btnFormClose = document.querySelector('.form-login__btn-close');
  var formLogin = document.querySelector('.form-login');

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

  var onLoginClick = function (evt) {
    evt.preventDefault();
    showFormLogin();
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
  btnFormClose.addEventListener('click', onBtnFormCloseClick);
  window.util.overlay.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', modalEscKeydown);
})();

'use strict';

(function () {
  var mainHeader = document.querySelector('.main-header');
  var search = mainHeader.querySelector('.main-header__search-wrapper');
  var mainNav = mainHeader.querySelector('.main-header__nav');
  var login = mainHeader.querySelector('.main-header__user-item--login');
  var logo = mainHeader.querySelector('.main-header__logo');
  var menuBtn = mainHeader.querySelector('.main-header__button-menu');
  var menuBtnIcon = mainHeader.querySelector('.main-header__button-icon');
  var menuBasketIcon = mainHeader.querySelector('.main-header__basket-svg');

  var changeElements = function () {
    mainHeader.classList.add('main-header--white');
    mainHeader.classList.add('main-header--indents');
    menuBtn.classList.add('main-header__button-menu--show');
    search.classList.add('main-header__search-wrapper--hide');
    mainNav.classList.add('main-header__nav--hide');
    login.classList.add('main-header__user-item--hide');
    logo.classList.add('main-header__logo--gold');
    menuBtnIcon.classList.add('main-header__button-icon--black');
    menuBasketIcon.classList.add('main-header__basket-svg--black');
  };

  changeElements();

  var onMenuBtnClick = function (evt) {
    evt.preventDefault();
    mainHeader.classList.toggle('main-header--white');
    mainHeader.classList.toggle('main-header--indents');
    mainHeader.classList.toggle('main-header--position');
    search.classList.toggle('main-header__search-wrapper--hide');
    mainNav.classList.toggle('main-header__nav--hide');
    login.classList.toggle('main-header__user-item--hide');
    logo.classList.toggle('main-header__logo--gold');
    menuBtnIcon.classList.toggle('main-header__button-icon--black');
    menuBasketIcon.classList.toggle('main-header__basket-svg--black');
  };

  menuBtn.addEventListener('click', onMenuBtnClick);
})();

'use strict';

(function () {
  var jsHead = document.querySelectorAll('.js-head');
  var jsHeadContent = document.querySelectorAll('.js-head__content');

  var hideElements = function () {
    for (var i = 0; i < jsHeadContent.length; i++) {
      jsHeadContent[i].classList.toggle('js-head__content--hide');
      jsHeadContent[i].previousElementSibling.classList.toggle('js-head--indents');
      jsHeadContent[i].previousElementSibling.classList.toggle('js-head--down');
    }
  };

  hideElements();

  var toggleQuestion = function (evt) {
    evt.preventDefault();
    evt.target.classList.toggle('js-head--indents');
    evt.target.classList.toggle('js-head--down');
    evt.target.nextElementSibling.classList.toggle('js-head__content--hide');
  };

  var addListeners = function () {
    for (var i = 0; i < jsHead.length; i++) {
      jsHead[i].classList.add('js-head--state');
      jsHead[i].addEventListener('click', toggleQuestion);
    }
  };

  addListeners();
})();
