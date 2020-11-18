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
      initialSlide: 3,
      slidesPerView: 4.5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },

    1080: {
      initialSlide: 3,
      slidesPerView: 5.5,
    },

    1300: {
      initialSlide: 3,
      slidesPerView: 6.5,
    },

    1600: {
      initialSlide: 3,
      slidesPerView: 8,
    },
  },
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
    },

    1260: {
      slidesPerView: 5,
    },
  },
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
    },

    1260: {
      initialSlide: 2,
      slidesPerView: 4,
    },
  },
});

function Slider(slideSelector, dotSelector, interval) {
  const sliders = document.querySelectorAll(`.${slideSelector}`);
  const dots = document.querySelectorAll(`.${dotSelector}`);

  dots.forEach(dot => {
    dot.addEventListener('click', currentDiv);
  });

  let slideIndex = 1;

  showDivs(slideIndex);

  function currentDiv(e) {
    showDivs(slideIndex = e.target.className[e.target.className.length - 1]);
  }

  function showDivs(n) {
    let i;

    if (n > sliders.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = sliders.length;
    }

    for (i = 0; i < sliders.length; i++) {
      sliders[i].style.opacity = '0';
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className
        .replace(` ${dotSelector}--active`, '');
    }
    sliders[slideIndex - 1].style.opacity = '1';
    dots[slideIndex - 1].className += ` ${dotSelector}--active`;
  }

  setInterval(() => {
    showDivs(slideIndex);

    if (slideIndex > sliders.length) {
      slideIndex = 0;
    }
    slideIndex++;
  }, interval);
}

const topMessages = new Slider('top__message', 'top__dot', 5000);
const topSlider = new Slider('top-slider__slide', 'top-slider__dot', 4000);

// Menu button handling
const menuButton = document.querySelector('.header__menu-burger');
const menu = document.querySelector('.menu');
const closeMenuButton = document.querySelector('.menu__cross');

menuButton.addEventListener('click', () => {
  menu.style.left = '0px';
});

closeMenuButton.addEventListener('click', () => {
  menu.style.left = '-100%';
});

// Menu sizes handling
const body = document.querySelector('body');
const menuContainers = document.querySelectorAll('.menu__container');
let wrapperLeftMargin = window
  .getComputedStyle(document.querySelector('.wrapper')).marginLeft;

if (parseInt(window.getComputedStyle(body).width) >= 442) {
  menuContainers.forEach(elem => {
    elem.style.width = `${parseInt(wrapperLeftMargin) + 442}px`;
  });
}

window.addEventListener('resize', () => {
  if (parseInt(window.getComputedStyle(body).width) >= 442) {
    wrapperLeftMargin = window
      .getComputedStyle(document.querySelector('.wrapper')).marginLeft;

    menuContainers.forEach(elem => {
      elem.style.width = `${parseInt(wrapperLeftMargin) + 442}px`;
    });
  } else {
    menuContainers.forEach(elem => {
      elem.style.width = '100%';
    });
  }
});

// Submenu handling
const submenuOpenButtons = document.querySelectorAll('.menu__label');

submenuOpenButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const submenuList = event.target.nextElementSibling;
    const submenuItems = submenuList.children;

    if (submenuList.style.display !== 'flex') {
      submenuList.style.display = 'flex';
    } else {
      submenuList.style.display = 'none';
    }

    if (submenuList.style.display !== 'none') {
      for (let i = 0; i < submenuItems.length; i++) {
        setTimeout(() => {
          submenuItems[i].style.left = '0';
        }, 250 * (i + 1));
      };
    } else {
      for (let i = 0; i < submenuItems.length; i++) {
        submenuItems[i].style.left = '-100%';
      }
    }
  });
});
