// "use strict";

$(document).ready(function () {

  var isMobile = window.isMobile.any;

  var windowHeight = document.documentElement.clientHeight;
  var startMarker = 150; // Отступ снизу экрана, при котором запускается анимация
  var titleArr = document.querySelectorAll('*[data-animation]'); // Коллекция объектов для анимации

  var fadeInRightSet = function (item, itemCoords) {
    item.style.opacity = '0';
    item.style.transform = 'translate3d(100%, 0, 0)';

    if (windowHeight - itemCoords > startMarker) {
      item.classList.add('animated', 'fadeInRight'); // выполнить что-то
    }
  };

  var fadeInLeftSet = function (item, itemCoords) {
    item.style.opacity = '0';
    item.style.transform = 'translate3d(-100%, 0, 0)';

    if (windowHeight - itemCoords > startMarker) {
      item.classList.add('animated', 'fadeInLeft'); // выполнить что-то
    }
  };

  var zoomIn = function (item, itemCoords) {
    item.style.opacity= '0';
    item.style.transform = 'scale3d(0.3, 0.3, 0.3)';

    if (windowHeight - itemCoords > startMarker) {
      item.classList.add('animated', 'zoomIn'); // выполнить что-то
    }
  };

  var fadeIn = function (item, itemCoords) {
    item.style.opacity= '0';

    if (windowHeight - itemCoords > startMarker) {
      item.classList.add('animated', 'fadeIn'); // выполнить что-то
    }
  };

  var scrollEventHandler = function(e) {

    titleArr.forEach(function (item) {

      var itemCoords = item.getBoundingClientRect().top;

      switch (item.dataset.animation) {

        case 'fadeInRight':
          fadeInRightSet(item, itemCoords);
          break;
        case 'fadeInLeft':
          fadeInLeftSet(item, itemCoords);
          break;
        case 'zoomIn':
          zoomIn(item, itemCoords);
          break;
        case 'fadeIn':
          fadeIn(item, itemCoords);
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
