$( document ).ready(function() {

  var tableFeaturesSwiper = new Swiper('.table-features__slides', {
    navigation: {
      nextEl: '.table-features__button-next',
      prevEl: '.table-features__button-prev',
    },
    pagination: {
      el: '.table-features__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    grabCursor: true,
    spaceBetween: 45,
    centeredSlides: true,
    autoHeight: false,
  });

});
