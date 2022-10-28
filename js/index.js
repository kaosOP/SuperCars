let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let car = document.getElementById('car');
let text = document.getElementById('h2Text');

window.addEventListener("scroll", function () {
  var value = window.scrollY;
  bg.style.top = value * 0.5 + "px";
  moon.style.left = -value * 0.5 + "px";
  mountain.style.top = -value * 0.5 + "px";
  car.style.bottom = value * 0.5 + "px";
  text.style.bottom = -value * 1 + "px";
})
$(document).ready(function(){
    $('.parallax').parallax();
  });
