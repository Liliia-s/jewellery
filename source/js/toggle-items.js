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
