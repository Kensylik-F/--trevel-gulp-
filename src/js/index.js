import mobileNav from './modules/mobile-nav.js';
mobileNav();

// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });


import { easepick } from '@easepick/bundle';

import countryList from "./helper/country.js";
import autoComplete from "@tarekraafat/autocomplete.js";


import swiperTesti from './modules/swiper-testi.js';
swiperTesti();
import swiperPopular from './modules/swiper-popular.js';
swiperPopular();

import ScrollReveal from 'scrollreveal';

ScrollReveal({
  distance: '60px',
  duration: 2800,
});
ScrollReveal().reveal('.header',{
  origin: 'top',
}),
ScrollReveal().reveal('.discaver__desc'),
ScrollReveal().reveal('.discaver__picture', {
  origin: 'top',
}),
ScrollReveal().reveal('.hint-discaver', {
  origin: 'right',
  delay: 100,
  distance: '50px',
});
ScrollReveal().reveal('.scroll-down', {
  origin: 'left',
  delay: 100,
  distance: '50px',
});


const autoCompleteJS = new autoComplete({
    selector: "#autoCompleteCountry",
    placeHolder: "e.g Bali, Indonesia",
    data: {
        src: countryList,
        cache: true,
    },
    resultItem: {
        highlight: true,
    },
     events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            }
        }
    }
});

const picker = new easepick.create({
    element: document.getElementById('datepicker'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
    zIndex: 10,
    plugins: [
        "TimePlugin"
    ]
  });