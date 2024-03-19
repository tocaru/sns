$(document).ready(function () {
  var swiperSN = initSwiper(".sn_slide", ".sn_slide_next", ".sn_slide_prev");
  var swiperBR = initSwiper(".br_slide", ".br_slide_next", ".br_slide_prev");
  var swiperNP = initSwiper(".np_slide", ".np_slide_next", ".np_slide_prev");
  var swiperUAC = initSwiper(".uac_slide", ".uac_slide_next", ".uac_slide_prev"); // .uac_slide 추가
  
  function initSwiper(selector, nextButton, prevButton) {
    var initialSlidesPerView = window.innerWidth <= 500 ? 1 : 3;
  
    return new Swiper(selector, {
      slidesPerView: initialSlidesPerView,
      spaceBetween: 20,
      pagination: {
        el: selector + " .swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2300,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
    });
  }
  
  // Update swiper on window resize
  $(window).resize(function () {
    updateSwiper(swiperSN);
    updateSwiper(swiperBR);
    updateSwiper(swiperNP);
    updateSwiper(swiperUAC); // .uac_slide에 대한 swiper 업데이트 추가
  });
  
  function updateSwiper(swiperInstance) {
    var currentSlidesPerView = swiperInstance.params.slidesPerView;
    var newSlidesPerView = window.innerWidth <= 500 ? 1 : 3;
  
    if (currentSlidesPerView !== newSlidesPerView) {
      swiperInstance.params.slidesPerView = newSlidesPerView;
      swiperInstance.update(); // Update swiper with new slidesPerView value
    }
  }
});

$(document).ready(function () {
  var swiper = new Swiper(".km_slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".km_slide_next",
      prevEl: ".km_slide_prev",
    },
  });
});

$(function(){
  var swiper = new Swiper(".px_slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".px_slide_next",
      prevEl: ".px_slide_prev",
    },
  });
});

$(document).ready(function () {
  var swiper = new Swiper(".da_slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".da_slide_next",
      prevEl: ".da_slide_prev",
    },
  });
});