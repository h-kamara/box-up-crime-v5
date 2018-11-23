var navToggle = document.querySelector('.nav-box-toggle');
var navigationBox = document.querySelector('.nav-box');

navToggle.addEventListener('click', toggleClass);

function toggleClass(){
  navigationBox.classList.toggle('nav-box-closed-ns')
}
