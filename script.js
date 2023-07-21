var swiper = new Swiper(".slider-swiper", {
    simulateTouch: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function (swiper) {
        console.log("bbb");
        document.querySelector(".first-slide__news").innerHTML =
          (swiper.realIndex < 10 ? "0" : "") + (+swiper.realIndex + 1);
      },
    },
  
    Keyboard: {
      enabled: true,
      onlyInViueport: true,
      pageUpDown: true,
    },
    autoHeight: false,
    //slidesPerView: 4,
    slidesPerGroup: 1,
    //spaceBetween: 30,
    //loop: true,
  });