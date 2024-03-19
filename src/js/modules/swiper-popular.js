import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


function swiperPopular() {
    const swiper = new Swiper('#swiper-popular', {
        slidesPerView: 1,
        // spaceBetween: 30,
        navigation: {
          nextEl: '#swiper-btn-next',
          prevEl: '#swiper-btn-back',
        },
        breakpoints: {
          425: {
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
          }
        
      }
})}
;

export default swiperPopular;