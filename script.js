var swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".slider__swiper-button-next",
    prevEl: ".slider__swiper-button-prev",
  },
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 60,
  on: {
    slideChange: function (swiper) {
      console.log(swiper);
      document.querySelector(".first-slide__news").innerHTML =
        (swiper.realIndex < 10 ? "0" : "") + (+swiper.realIndex + 1);
    },
  },

  // Keyboard: {
  //   enabled: true,
  //   onlyInViueport: true,
  //   pageUpDown: true,
  // },
  // autoHeight: false,
  // //slidesPerView: 4,
  // slidesPerGroup: 1,
  // //
  // //loop: true,
});
