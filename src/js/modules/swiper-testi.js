import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiper, swiper2, swiper3;

const breakpoint = window.matchMedia('(max-width:1023px)');

    const breakpointChecker = function() {

      if ( breakpoint.matches === true ) {
        if ( swiper !== undefined ) swiper.destroy( true, true );
        if ( swiper2 !== undefined ) swiper2.destroy( true, true );
        if ( swiper3 !== undefined ) swiper3.destroy( true, true );
        return;

      } else if ( breakpoint.matches === false ) {
  
        swiperTesti();
        return;
  
      }
  
    };


function swiperTesti(){

  const configVerticl = {
      direction: 'vertical',
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 0,
      grabCursor: true,
      ally: false,
      freeMode: true,
      speed: 7000,
      autoplay: {
          delay: 0,
          disableOnInteration: false,
      },
    }
  
    const swiper = new Swiper('#testimonials-col-1', configVerticl);
    const swiper2 = new Swiper('#testimonials-col-2',{
      direction: 'vertical',
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 0,
      grabCursor: true,
      ally: false,
      freeMode: true,
      speed: 9000,
      autoplay: {
          delay: 0,
          disableOnInteration: false,
      },
    });
    const swiper3 = new Swiper('#testimonials-col-3', configVerticl);
      


    
};

breakpoint.addListener( () =>{
  breakpointChecker();
});


export default swiperTesti;