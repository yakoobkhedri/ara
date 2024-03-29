// swiper
var blog = new Swiper(".blog", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var comment = new Swiper(".comment", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
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
    disableOnInteraction: false,
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

// aos
AOS.init();

// accordion

let accordionBtn=Array.from(document.getElementsByClassName('accordion-btn'));
let accordionContent=Array.from(document.getElementsByClassName('accordion-content'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    accordionBtn.forEach((items)=>{items.classList.remove('active')});
    accordionContent.forEach((items)=>{items.classList.remove('active')});
    item.classList.add('active');
    item.nextElementSibling.classList.add('active');
  })
})