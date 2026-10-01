const arrows = document.querySelector(".dropdown_size");


arrows.addEventListener("click", arrowsClick);
function arrowsClick() {
  arrows.classList.toggle("active");
}

