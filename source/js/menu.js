// module

var buttonMobileHeader = document.querySelector(".header__button-mobile_js");
var buttonCloseMobileHeader = document.querySelector(".mobile-header__close_js");
var mobileHeader = document.querySelector(".mobile-header");

//open
buttonMobileHeader.addEventListener("click",function(){
  mobileHeader.classList.add("mobile-header_open");
});

//close
buttonCloseMobileHeader.addEventListener("click", function(){
  mobileHeader.classList.remove("mobile-header_open");
});
