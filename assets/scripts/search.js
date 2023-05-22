const inputElement = document.querySelector(".input");
const btnElement = document.querySelector(".btn");
const searchBlock = document.querySelector(".search");
btnElement.addEventListener("click", () => {
  searchBlock.classList.toggle("active");
  inputElement.focus();
});
