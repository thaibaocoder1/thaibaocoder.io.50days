// const listPanels = document.querySelectorAll(".panel");
// listPanels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeAddClasses();
//     panel.classList.add("active");
//   });
// });
// function removeAddClasses() {
//   listPanels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const panels = $$(".panel");
panels.forEach((panel) => {
  panel.onclick = function () {
    $(".panel.active").classList.remove("active");
    this.classList.add("active");
  };
});
