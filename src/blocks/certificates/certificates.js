$( document ).ready(function() {

  var certificateSwiper = new Swiper('.certificates__slides', {
    pagination: {
      el: '.certificates__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
    },
    grabCursor: true,
    spaceBetween: 50,
    /*effect: 'flip',*/
  });

});
