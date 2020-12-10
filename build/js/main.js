'use strict';

(function () {
  var faqAnswer = document.querySelectorAll('.faq__answer');
  var faqQuestion = document.querySelectorAll('.faq__question');

  var hideElements = function () {
    for (var i = 0; i < faqAnswer.length; i++) {
      faqAnswer[i].classList.toggle('faq__answer--hide');
      faqAnswer[i].previousElementSibling.classList.toggle('faq__question--indents');
      faqAnswer[i].previousElementSibling.classList.toggle('faq__question--arrow');
    }
  };

  hideElements();

  var toggleQuestion = function (evt) {
    evt.preventDefault();
    evt.target.classList.toggle('faq__question--indents');
    evt.target.classList.toggle('faq__question--arrow');
    evt.target.nextElementSibling.classList.toggle('faq__answer--hide');
  };

  var addListeners = function () {
    for (var i = 0; i < faqQuestion.length; i++) {
      faqQuestion[i].classList.add('faq__question--state');
      faqQuestion[i].addEventListener('click', toggleQuestion);
    }
  };

  addListeners();
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
