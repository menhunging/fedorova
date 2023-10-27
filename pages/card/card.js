$(document).ready(function () {
  if ($(".card-section").length > 0) {
    const swiperCardSmall = new Swiper(".slider-card-small", {
      slidesPerView: 3,
      spaceBetween: 50,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

    const swiperCardBig = new Swiper(".slider-card-big", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      thumbs: {
        swiper: swiperCardSmall,
      },
    });
  }
});
