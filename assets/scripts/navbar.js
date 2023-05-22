const container = document.querySelector(".container");
const openNavbar = document.querySelector("#open");
const closeNavbar = document.querySelector("#close");
openNavbar.addEventListener("click", () => {
  container.classList.add("show-nav");
});
closeNavbar.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
