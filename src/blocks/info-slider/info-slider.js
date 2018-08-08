$( document ).ready(function() {

  var infoSlider = new Swiper('.info-slider', {
    pagination: {
      el: '.info-slider__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
    },
    grabCursor: true,
  });

});
