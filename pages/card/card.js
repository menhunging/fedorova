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

  if ($("[data-modal-check]").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal-check",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $(".card-modal__btn").on("click", function () {
      closeModal("modal-card");
    });

    $("[data-modal-check]").map(function () {
      $(this).click((e) => {
        e.preventDefault();

        let check = $(this).attr("for");
        let material = $(this).attr("data-material");
        let color = $(this).attr("data-color");
        let url = $(this).find("img").attr("src");

        $(".card-modal__btn").attr("for", check);
        $(".card-modal__material").text(material);
        $(".card-modal__color").text(color);
        $(".card-modal .picture img").attr("src", url);
      });
    });
  }
});
