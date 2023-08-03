const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlider = document.querySelector(".right-slide");
const buttonUp = document.querySelector(".up-button");
const buttonDown = document.querySelector(".down-button");
const slideLength = rightSlider.querySelectorAll("div").length;
let currentIndex = 0;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;
buttonUp.addEventListener("click", () => changeSlide("up"));
buttonDown.addEventListener("click", () => changeSlide("down"));
function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    ++currentIndex;
    if (currentIndex > slideLength - 1) {
      currentIndex = 0;
    }
  } else if (direction === "down") {
    --currentIndex;
    if (currentIndex < 0) {
      currentIndex = slideLength - 1;
    }
  }
  rightSlider.style.transform = `translateY(-${currentIndex * sliderHeight}px)`;
  leftSlide.style.transform = `translateY(${currentIndex * sliderHeight}px)`;
}
