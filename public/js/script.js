'use strict'
const header_mobile = document.querySelector('#header-mobile');
const btn_mobile = document.querySelector('#btn-mobile');
const btn_mobile_on = document.querySelector('#btn-mobile-on');
const btn_mobile_off = document.querySelector('#btn-mobile-off');

btn_mobile.addEventListener('click', () => {
    
    toggleTwoClasses(header_mobile, "mobile-menu-show", "mobile-menu-hide", 500);
});
function toggleTwoClasses(element, first, second, timeOfAnimation) {    
  if (!element.classList.contains(first)) {
    element.classList.add(first);
    element.classList.remove(second);
    btn_mobile_on.classList.add('hide');
    btn_mobile_off.classList.remove('hide');
  } else {
    element.classList.add(second);
    btn_mobile_on.classList.remove('hide');
    btn_mobile_off.classList.add('hide');      
    window.setTimeout(function() {
      element.classList.remove(first);
    }, timeOfAnimation);
  }
}

var btnToTop = document.querySelector('.back-to-top');
const btnToTopHtml = document.querySelector('body');
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function showBtn() {
  if (window.pageYOffset > 200 || document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
    btnToTop.classList.add("back-to-top-active");    
  } else {
    btnToTop.classList.remove("back-to-top-active");    
  }
}
document.addEventListener("scroll", showBtn);
btnToTop.addEventListener("click", scrollToTop);


