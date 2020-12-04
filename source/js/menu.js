'use strict';

(function () {
  var mainHeader = document.querySelector('.main-header');
  var search = mainHeader.querySelector('.main-header__search-wrapper');
  var mainNav = mainHeader.querySelector('.main-header__nav');
  var login = mainHeader.querySelector('.main-header__user-item--login');
  var logo = mainHeader.querySelector('.main-header__logo');
  var menuBtnIcon = mainHeader.querySelector('.main-header__button-icon');
  var menuBasketIcon = mainHeader.querySelector('.main-header__basket-svg');
  var menuBtn = mainHeader.querySelector('.main-header__button-menu');

  var changeElements = function () {
    mainHeader.classList.add('main-header--white');
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
