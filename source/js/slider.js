'use strict';

(function () {
  var swiperWrapper = document.querySelector('.swiper__wrapper');

  var hideSwiperScroll = function () {
    swiperWrapper.classList.remove('swiper__wrapper--scroll');
  };

  var activeSwiper = function () {
    var swiper = new Swiper('.swiper__container', {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
      breakpoints: {
        320: {
          pagination: {
            type: 'fraction'
          },
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4
        }
      },
      navigation: {
        nextEl: '.slider__btn--right',
        prevEl: '.slider__btn--left',
      },
    });
  };

  var activeElements = function () {
    if (swiperWrapper) {
      hideSwiperScroll();
      activeSwiper();
    }
  };

  activeElements();
})();
