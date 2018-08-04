$( document ).ready(function() {

  var certificateSwiper = new Swiper('.helpful-info__slides', {
    //initialSlide: 1,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 45,
    // centeredSlides: true,
    autoHeight: true,
    //loop: true,
    roundLengths: true,
    navigation: {
      nextEl: '.helpful-info__button-next',
      prevEl: '.helpful-info__button-prev',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 35,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 45,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 45,
        }
      }
  });

});
