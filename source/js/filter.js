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
