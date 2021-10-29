
// Toggle Menu
let menuOpen = document.querySelector('.menu-toggle');
let menuWrapper = document.querySelector('.menu-wrapper')

menuOpen.addEventListener('click', function () {

  menuOpen.classList.toggle('bx-x');
  menuWrapper.classList.toggle('active')

});

$(document).ready(function($) {

/*-- Menu Sticky --*/
var windows = $(window);
var sticky = $('.header-sticky')
windows.on('scroll', function() {
  var scroll = windows.scrollTop();
  if (scroll < 150) {
    sticky.removeClass('stick');
  } else {
    sticky.addClass('stick');
  }
});

$(".toggle-menu-icon").click(function(){
  $(".menu").slideToggle();
})
});