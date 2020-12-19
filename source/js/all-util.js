'use strict';

(function () {
  var KEY_CODE_ESC = 27;
  var overlay = document.querySelector('.overlay');

  // var modalEscKeydown = function (evt, callback) {
  //   if (evt.keyCode === KEY_CODE_ESC) {
  //     templateFunction(evt, callback);
  //   }
  // };

  // var onOverlayClick = function (evt, callback) {
  //   templateFunction(evt, callback);
  // };

  // var templateFunction = function (evt, callback) {
  //   evt.preventDefault();
  //   callback();
  // };

  window.util = {
    KEY_CODE_ESC: KEY_CODE_ESC,
    overlay: overlay,
    // modalEscKeydown: modalEscKeydown,
    // onOverlayClick: onOverlayClick
  };
})();
