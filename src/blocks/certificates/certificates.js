$( document ).ready(function() {

  var certificateSwiper = new Swiper('.certificates__slides', {
    pagination: {
      el: '.certificates__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
    },
    effect: 'flip',
    grabCursor: true,
    spaceBetween: 45,
    centeredSlides: true,
    autoHeight: true,
  });

});
