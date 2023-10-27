let observer = () => {};

$(document).ready(function () {
  if ($(".burger").length > 0) {
    let menu = $(".menu");
    let burger = $(".burger");
    let buttonClose = $(".btn-close-menu");

    burger.on("click", function () {
      menu.stop().slideDown();
    });

    buttonClose.on("click", function () {
      closeMenu();
    });

    function closeMenu() {
      menu.stop().slideUp();
    }
  }

  if ($(".menu").length > 0) {
    let links = $(".menu-link");
    let menuSub = $(".menu-sub");

    links.map(function () {
      let link = $(this);
      let parents = link.parents(".menu-col");
      let subCurrent = parents.find(".menu-sub");

      if (subCurrent.length > 0) {
        link.on("click", function (event) {
          event.preventDefault();

          if (link.hasClass("active")) {
            close();
          } else {
            close();
            link.addClass("active");
            subCurrent.stop().slideDown();
          }
        });
      } else {
        link.addClass("not-arrow");
      }
    });

    function close() {
      links.removeClass("active");
      menuSub.stop().slideUp();
    }
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($("select").length > 0) {
    $("select").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {},
        onClose: function (element) {},
      });
    });
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        setTimeout(() => {
          $("body").removeClass("modal-open");
        }, 300);
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".word-section").length > 0) {
    let parents = $(".word-section");
    let circle = $(".design-invis__item .circle");
    let itemClose = $(".designer-info__close");

    circle.on("click", function () {
      if ($(this).hasClass("active")) {
        close();
      } else {
        close();
        parents.addClass("opened");
        $(this).addClass("active");
        $(this)
          .parents(".design-invis__item")
          .find(".designer-info")
          .stop()
          .addClass("opened");
      }
    });

    itemClose.on("click", function () {
      close();
    });

    function close() {
      parents.stop().removeClass("opened");
      $(".design-invis__item .circle").stop().removeClass("active");
      // $(".design-invis__item").stop().removeClass("active");
      $(".designer-info").stop().removeClass("opened");
    }
  }

  if ($(".projects-slider").length > 0) {
    const sliders = document.querySelectorAll(".projects-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3.5,
            spaceBetween: 40,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              0: {
                slidesPerView: 2.3,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                spaceBetween: 20,
              },
              1280: {
                spaceBetween: 25,
              },
              1400: {
                spaceBetween: 30,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".slider-catalog").length > 0) {
    const sliders = document.querySelectorAll(".slider-catalog");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 4,
            spaceBetween: 50,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                  rows: 1,
                  fill: "row",
                },
                spaceBetween: 10,
              },
              390: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: {
                  rows: 2,
                  fill: "row",
                },
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid: {
                  rows: 2,
                  fill: "row",
                },
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
                grid: {
                  rows: 1,
                  fill: "row",
                },
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
                grid: {
                  rows: 1,
                  fill: "row",
                },
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 50,
                grid: {
                  rows: 1,
                  fill: "row",
                },
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".slider-picture").length > 0) {
    const sliders = document.querySelectorAll(".slider-picture");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".video-block").length > 0) {
    $(".video-block video").trigger("pause");
    setVideoMain();
  }
});

$(window).resize(function () {});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".header").addClass("header--fixed");
  } else {
    $(".header").removeClass("header--fixed");
  }
});

function openModal(modal) {
  MicroModal.show(modal);
  $(".modal__close").on("click", function () {
    closeModal(modal);
  });
  $("body").addClass("modal-open");
}

function closeModal(modal) {
  MicroModal.close(modal);
  setTimeout(() => {
    $("body").removeClass("modal-open");
  }, 300);
}

function setVideoMain() {
  if ($(window).width() < 768) {
    $(".video-block video").map(function () {
      setVideo($(this), "mobile");
    });
  } else {
    $(".video-block video").map(function () {
      setVideo($(this), "desktop");
    });
  }
}

function setVideo(video, device) {
  video.trigger("pause");
  video.find("source");
  video.attr("src", video.attr(`data-${device}`));
  video.trigger("load");
}
