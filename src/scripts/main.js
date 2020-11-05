'use strict';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const instaGallery = new Swiper('.insta-gallery', {
  initialSlide: 2,
  slidesPerView: 2,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    }
  }
});

const productsGallery = new Swiper('.products-slider', {
  initialSlide: 2,
  slidesPerView: 2,
  spaceBetween: 12,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

const bottomGallery = new Swiper('.bottom-gallery', {
  initialSlide: 1,
  slidesPerView: 2,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});


const sliders = document.querySelectorAll('.top-slider__slide');
const dots = document.querySelectorAll('.top-slider__dot');

dots.forEach(dot => {
  dot.addEventListener('click', currentDiv);
})

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(e) {
  showDivs(slideIndex = e.target.className[e.target.className.length - 1]);
}

function showDivs(n) {
  let i;

  if (n > sliders.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = sliders.length
  }

  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" top-slider__dot--active", "");
  }
  sliders[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " top-slider__dot--active";
}
