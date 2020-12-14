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
