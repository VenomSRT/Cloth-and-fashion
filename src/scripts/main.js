'use strict';

import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation]);

const productsGallery = new Swiper('.products-slider', {
  initialSlide: 2,
  slidesPerView: 1.95,
  spaceBetween: 0,
  centeredSlides: true,

  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4.5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});

const instaGallery = new Swiper('.insta-gallery', {
  initialSlide: 2,
  slidesPerView: 2,
  spaceBetween: 0,
  centeredSlides: true,
  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4.9,
    }
  }
});

const bottomGallery = new Swiper('.bottom-gallery', {
  initialSlide: 1,
  slidesPerView: 1.7,
  spaceBetween: 0,
  centeredSlides: true,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
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
    sliders[i].style.opacity = "0";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" top-slider__dot--active", "");
  }
  sliders[slideIndex-1].style.opacity = "1";
  dots[slideIndex-1].className += " top-slider__dot--active";
}

setInterval(() => {
  showDivs(slideIndex);
  if (slideIndex > sliders.length) {
    slideIndex = 0;
  }
  slideIndex++;
}, 5000);
