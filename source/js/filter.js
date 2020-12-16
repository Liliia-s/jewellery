'use strict';

(function () {
  var KEY_CODE_ESC = 27;
  var catalogFilter = document.querySelector('.catalog__filter-wrapper');
  var catalogFilterButton = document.querySelector('.catalog__filter-button');
  var catalogFilterBox = document.querySelector('.catalog__filter-box');
  var catalogButtonClose = document.querySelector('.catalog__button-close');
  var overlay = document.querySelector('.overlay');

  var hideFilter = function () {
    if (catalogFilter) {
      catalogFilter.classList.toggle('catalog__filter-wrapper--hide');
      catalogFilterButton.classList.toggle('catalog__filter-button--show');
    }
  };

  hideFilter();

  var toggleStateElements = function () {
    catalogFilter.classList.toggle('catalog__filter-wrapper--hide');
    catalogFilter.classList.toggle('catalog__filter-wrapper--position');
    catalogButtonClose.classList.toggle('catalog__button-close--show');
    catalogFilterBox.classList.toggle('catalog__filter-box--clear');
    overlay.classList.toggle('overlay--show');
  };

  var onCatalogFilterButtonClick = function (evt) {
    evt.preventDefault();
    toggleStateElements();
  };

  var onCatalogButtonCloseClick = function (evt) {
    evt.preventDefault();
    toggleStateElements();
  };

  var onOverlayClick = function (evt) {
    evt.preventDefault();
    toggleStateElements();
  };

  var modalEscKeydown = function (evt) {
    if (evt.keyCode === KEY_CODE_ESC) {
      evt.preventDefault();
      if (catalogFilter) {
        toggleStateElements();
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

  overlay.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', modalEscKeydown);
})();
