const menu = document.querySelector(".menu");
const Menu = document.querySelector(".Menu-navegacion");

menu.addEventListener("click", () => {
  Menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    Menu.classList.contains("spread") &&
    e.target != Menu &&
    e.target != menu
  ) {
    Menu.classList.toggle("spread");
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slider-img");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos (ajusta según sea necesario)
}

function changeSlide(n) {
  slideIndex += n;
  const slides = document.getElementsByClassName("slider-img");

  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
