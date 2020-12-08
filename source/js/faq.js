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
