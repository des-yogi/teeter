// "use strict";

/* $( document ).ready(function() {

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

}); */

 $(document).ready(function () {

  var isMobile = window.isMobile.any;

  var windowHeight = document.documentElement.clientHeight;
  var startMarker = 150; // Отступ снизу экрана, при котором запускается анимация
  var titleArr = document.querySelectorAll('*[data-animation]'); // Коллекция объектов для анимации

  var bounceInRightSet = function (item, itemCoords) {
    item.style.transform = 'translateX(3000px)';

    if (windowHeight - itemCoords > startMarker) {
      item.classList.add('animated', 'bounceInRight'); // выполнить что-то
    }
  };

  var bounceInLeftSet = function (item, itemCoords) {
    item.style.transform = 'translateX(-3000px)';

    if (windowHeight - itemCoords > startMarker) {
      item.classList.add('animated', 'bounceInLeft'); // выполнить что-то
    }
  };

  var zoomIn = function (item, itemCoords) {
    item.style.opacity= '0';
    item.style.transform = 'scale3d(0.3, 0.3, 0.3)';

    if (windowHeight - itemCoords > startMarker) {
      item.classList.add('animated', 'zoomIn'); // выполнить что-то
    }
  };

  var rubberBand = function (item, itemCoords) {

    if (windowHeight - itemCoords > startMarker) {
      item.classList.add('animated', 'rubberBand'); // выполнить что-то
    }
  };

  var scrollEventHandler = function(e) {

    titleArr.forEach(function (item) {

      var itemCoords = item.getBoundingClientRect().top;

      switch (item.dataset.animation) {

        case 'bounceInRight':
          bounceInRightSet(item, itemCoords);
          break;
        case 'bounceInLeft':
          bounceInLeftSet(item, itemCoords);
          break;
        case 'zoomIn':
          zoomIn(item, itemCoords);
          break;
        case 'rubberBand':
          rubberBand(item, itemCoords);
          break;

        default:
          window.removeEventListener('scroll', scrollEventHandler);
          console.log("Вот беда! Нечего анимировать?…");
          break;
      }

    });
    //var elemCoords = elem.getBoundingClientRect().top;
  }

  if (!isMobile) {
    window.addEventListener('scroll', scrollEventHandler);
  } else {
      $("*").removeClassWild("revealator-*");
  }

});

// Поиск и удаление объектов с определнными классами по маске
(function($) {
  $.fn.removeClassWild = function(mask) {
    return this.removeClass(function(index, cls) {
      var re = mask.replace(/\*/g, '\\S+');
      return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
    });
  };
})(jQuery);
