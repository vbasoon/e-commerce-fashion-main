//const { data } = require("jquery");

let searchForm = document.querySelector(".search-form");

let menuBtn = document.querySelector("#menu-btn");
let menuNav = document.querySelector(".header__menu");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  menuNav.classList.toggle("active");
};

window.onscroll = () => {
  menuNav.classList.remove("active");
  searchForm.classList.remove("active");
};

let filterBtn = document.querySelectorAll(".filter-buttons .buttons");

let filterItem = document.querySelectorAll(
  ".products .products-box .products-box__item"
);

filterBtn.forEach((button) => {
  button.onclick = () => {
    filterBtn.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    let dataFilter = button.getAttribute("data-filter");

    filterItem.forEach((item) => {
      item.classList.remove("active");
      item.classList.add("hide");

      if (item.getAttribute("data-item") == dataFilter || dataFilter == "all") {
        item.classList.remove("hide");
        item.classList.add("active");
      }
    });
  };
});

document.querySelectorAll(".home__slider img").forEach((images) => {
  images.onclick = () => {
    let src = images.getAttribute("src");
    document.querySelector(".home__image img").src = src;
  };
});

const swiper = new Swiper(".home-slider", {
  //spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".featured-slider", {
  spaceBetween: 20,
  //centeredSlides: true,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
