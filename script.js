const menu = document.querySelector(".menu");
const Menu = document.querySelector(".Menu-navegacion");

const imagenes = document.querySelectorAll(".Fotos-galeria"); // Cambiado de querySelector
const imagenesLigth = document.querySelector(".agregar-imagen");
const contenedorLigth = document.querySelector(".imagen-ligth");

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

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
  });
});

contenedorLigth.addEventListener("click", (e) => {
  if (e.target !== imagenesLigth) {
    contenedorLigth.classList.toggle("show");
    imagenesLigth.classList.toggle("showImage");
    menu.style.opacity = "1";
  }
});

const aparecerImagen = (imagen) => {
  imagenesLigth.src = imagen; // Cambiado de srfc a src
  contenedorLigth.classList.toggle("show");
  imagenesLigth.classList.toggle("showImage");
  menu.style.opacity = "1";
};
