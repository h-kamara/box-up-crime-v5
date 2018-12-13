
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky && window.innerWidth > 850) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var navToggle = document.querySelector('.navigation-box-toggle');
var navigationBox = document.querySelector('.navigation-box');

navToggle.addEventListener('click', toggleClass);

function toggleClass(){
  navigationBox.classList.toggle('open');
  navigationBox.classList.toggle('closed');
}
