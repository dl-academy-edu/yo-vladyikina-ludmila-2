
var popup = document.querySelector('.popup');
var popupBtn = document.querySelector('.banner-js');
var popupClose = document.querySelector('.popup__close');
var input = popup.querySelector('input');



popupBtn.addEventListener('click', function() {
    popup.classList.add('popup__open');
    input.focus();
})

popupClose.addEventListener('click', function() {
    popup.classList.remove('popup__open');
    popupBtn.focus();
})

window.addEventListener('keydown', function (event) {
if (event.code === "Escape" && popup.classList.contains('popup__open')){
    popup.classList.remove('popup__open');
    popupBtn.focus();
}
});

// module

var buttonMobileHeader = document.querySelector(".header__button-mobile_js");
var buttonCloseMobileHeader = document.querySelector(".mobile-header__close_js");
var mobileHeader = document.querySelector(".mobile-header");

//open
buttonMobileHeader.addEventListener("click",function(){
  mobileHeader.classList.add("mobile-header__open");
});

//close
buttonCloseMobileHeader.addEventListener("click", function(){
  mobileHeader.classList.remove("mobile-header__open");
});
