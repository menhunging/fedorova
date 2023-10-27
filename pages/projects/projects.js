$(document).ready(function () {
  if ($(".projects-inner__slider").length > 0) {
    const swiper = new Swiper(".projects-inner__slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".projects-inner .swiper-button-next",
        prevEl: ".projects-inner .swiper-button-prev",
      },
      pagination: {
        el: ".projects-inner .swiper-pagination",
        clickable: true,
      },
    });
  }
});
