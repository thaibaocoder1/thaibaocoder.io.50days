const text = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let count = 0;
let int = setInterval(blurring, 30);
function blurring() {
  ++count;
  if (count > 99) {
    clearInterval(int);
  }
  text.textContent = `${count}%`;
  text.style.opacity = scale(count, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
}
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
