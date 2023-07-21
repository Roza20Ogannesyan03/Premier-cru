var swiper = new Swiper(".about-us__swiper", {
    simulateTouch: true,
    navigation: {
      nextEl: ".about-us__swiper-button-next",
      prevEl: ".about-us__swiper-button-prev",
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