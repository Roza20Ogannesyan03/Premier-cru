//let paginat = document.querySelector(".swiper-pagination");
const swiper = new Swiper(document.getElementById("rubl"), {
  navigation: {
    nextEl: ".slider__swiper-button-next",
    prevEl: ".slider__swiper-button-prev",
  },
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 60,
  /*on: {
    slideChange: function (swiper) {
      console.log(swiper);
      document.querySelector(".first-slide__news").innerHTML =
        (swiper.realIndex < 10 ? "0" : "") + (+swiper.realIndex + 1);
    },
  },*/

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number, index) {
      return ("0" + number).slice(-2);
    },
    formatFractionTotal: function (number, tot) {
      return ("0" + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      //console.log(paginat.innerHTML);
      console.log(currentClass);
      return (
        '<span class = "' +
        currentClass +
        ' "></span>' +
        "/" +
        '<span class = "' +
        totalClass +
        ' "></span>'
      );
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
