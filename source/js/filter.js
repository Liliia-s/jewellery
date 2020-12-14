'use strict';

(function () {
  var KEY_CODE_ESC = 27;
  var catalogFilter = document.querySelector('.catalog__filter-wrapper');
  var catalogFilterButton = document.querySelector('.catalog__filter-button');
  var catalogButtonClose = document.querySelector('.catalog__button-close');
  var overlay = document.querySelector('.overlay');

  var hideFilter = function () {
    catalogFilter.classList.toggle('catalog__filter-wrapper--hide');
    catalogFilterButton.classList.toggle('catalog__filter-button--show');
  };

  hideFilter();

  var onCatalogFilterButtonClick = function (evt) {
    evt.preventDefault();
    catalogFilter.classList.toggle('catalog__filter-wrapper--hide');
    catalogFilter.classList.toggle('catalog__filter-wrapper--position');
    catalogButtonClose.classList.add('catalog__button-close--show');
    overlay.classList.toggle('overlay--show');
    document.body.classList.toggle('overflow-hidden');
  };

  var onCatalogButtonCloseClick = function (evt) {
    evt.preventDefault();
    catalogFilter.classList.toggle('catalog__filter-wrapper--hide');
    catalogFilter.classList.toggle('catalog__filter-wrapper--position');
    overlay.classList.toggle('overlay--show');
    document.body.classList.toggle('overflow-hidden');
  };

  var onOverlayClick = function (evt) {
    evt.preventDefault();
    onCatalogButtonCloseClick();
  };

  var modalEscKeydown = function (evt) {
    if (evt.keyCode === KEY_CODE_ESC) {
      evt.preventDefault();
      if (catalogFilter.classList.contains(!'catalog__filter-wrapper--hide')) {
        onCatalogButtonCloseClick();
      }
    }
  };

  catalogFilterButton.addEventListener('click', onCatalogFilterButtonClick);
  catalogButtonClose.addEventListener('click', onCatalogButtonCloseClick);
  overlay.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', modalEscKeydown);
})();
