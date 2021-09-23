let menuHamburger = document.getElementsByClassName("menu");
let hamburger = document.getElementsByClassName("hamburger");
let navBar = document.getElementsByClassName("nav-bar");

menuHamburger[0].addEventListener("click", function () {
  navBar[0].classList.toggle("nav-toggle");
});
