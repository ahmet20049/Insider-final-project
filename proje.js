//Ahmet Bahar'ın tamamen yaptı kısım E-posta ahmetbahar.0987@gmail.com

window.addEventListener('DOMContentLoaded', function() {
    var acikTemaButton = document.getElementById('acik-tema');
    var koyuTemaButton = document.getElementById('koyu-tema');
    var body = document.body;

    acikTemaButton.addEventListener('click', function() {
        body.classList.remove('dark');
    });

    koyuTemaButton.addEventListener('click', function() {
        body.classList.add('dark');
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

(function() {
  function toggleNightMode() {
      var elem = document.getElementById(this.dataset.target);
      var body = document.body;
      
      if (this.dataset.mode === 'off') {
          body.classList.remove('night-mode');
          this.dataset.mode = 'on';
      } else {
          body.classList.add('night-mode');
          this.dataset.mode = 'off';
      }
  }
  
  document.getElementById('togBut').addEventListener('click', toggleNightMode);
})();
