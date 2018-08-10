"use strict";

$( document ).ready(function() {
  var anyObj = document.querySelector('.operation-principle__title');
  anyObj.style.transform = 'translateX(3000px)';
  var windowHeight = document.documentElement.clientHeight;
  var startPoint = 150; // Отступ снизу экрана, при котором запускается анимация

  var leftTranslateHandler = function(e) {
    var coords = anyObj.getBoundingClientRect().top;

    if (windowHeight - coords > startPoint) {
      anyObj.classList.add('animated', 'bounceInRight'); // выполнить что-то
      window.removeEventListener('scroll', leftTranslateHandler); // убить обработчик
    }
  }

  window.addEventListener('scroll', leftTranslateHandler);

});
