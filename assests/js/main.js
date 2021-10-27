let menuOpen = document.querySelector('.menu-toggle');
let menuWrapper = document.querySelector('.menu-wrapper')

menuOpen.addEventListener('click',function(){

	menuOpen.classList.toggle('bx-x');
	menuWrapper.classList.toggle('active')

});

import Swiper from 'swiper/swiper-bundle.esm.js';
    import 'swiper/swiper-bundle.css';
    var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '3',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
});