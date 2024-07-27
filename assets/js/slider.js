let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: true,
  // },
  spaceBetween: 10,
  navigation: {
    nextEl: ".services_btns .next_btn",
    prevEl: ".services_btns .prev_btn",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

let swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: true,
  // },
  spaceBetween: 10,
  navigation: {
    nextEl: ".our_team_top .next_btn",
    prevEl: ".our_team_top .prev_btn",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
