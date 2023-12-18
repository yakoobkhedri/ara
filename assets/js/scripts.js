// swiper
var blog = new Swiper(".blog", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 36,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
});
var comment = new Swiper(".comment", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 36,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});
var costumer = new Swiper(".costumer", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 3,
  spaceBetween: 36,
  breakpoints: {
    576: {
      direction: "vertical",
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// animation

ScrollReveal().reveal('.top', {
  duration: 2000,
  origin: 'top',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});
ScrollReveal().reveal('.bottom', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});