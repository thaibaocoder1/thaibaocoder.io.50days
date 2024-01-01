const prev = document.getElementById("prev");
const next = document.getElementById("next");
const imgs = document.getElementById("imgs");
const imgList = document.querySelectorAll("#imgs img");
let index = 0;
let interval = setInterval(run, 2000);
function run() {
  index++;
  changeImage();
}
function changeImage() {
  if (index > imgList.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imgList.length - 1;
  }
  imgs.style.transform = `translateX(${-1 * index * 500}px)`;
}
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
prev.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});
next.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});
