'use strict';

(function () {
  var jsHead = document.querySelectorAll('.menu-accordion__btn');
  var jsHeadContent = document.querySelectorAll('.menu-accordion__content');

  var hideElements = function () {
    for (var i = 0; i < jsHeadContent.length; i++) {
      jsHeadContent[i].classList.toggle('menu-accordion__content--hide');
      jsHeadContent[i].previousElementSibling.classList.toggle('menu-accordion__btn--indents');
      jsHeadContent[i].previousElementSibling.classList.toggle('menu-accordion__btn--down');
    }
  };

  hideElements();

  var toggleQuestion = function (evt) {
    evt.preventDefault();
    evt.target.classList.toggle('menu-accordion__btn--indents');
    evt.target.classList.toggle('menu-accordion__btn--down');
    evt.target.nextElementSibling.classList.toggle('menu-accordion__content--hide');
  };

  var addListeners = function () {
    for (var i = 0; i < jsHead.length; i++) {
      jsHead[i].classList.add('menu-accordion__btn--state');
      jsHead[i].addEventListener('click', toggleQuestion);
    }
  };

  addListeners();
})();
