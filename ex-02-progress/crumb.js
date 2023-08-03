window.addEventListener("load", function () {
  const progress = document.querySelector("#progress");
  const circles = document.querySelectorAll(".circle");
  const nextBtn = document.querySelector("#next");
  const prevBtn = document.querySelector("#prev");
  let currentActive = 0;
  nextBtn.addEventListener("click", function () {
    ++currentActive;
    if (currentActive > circles.length) {
      currentActive = circles.length;
    }
    handleNextCircle();
  });
  prevBtn.addEventListener("click", function () {
    --currentActive;
    if (currentActive < 1) {
      currentActive = 1;
    }
    handleNextCircle();
  });
  function handleNextCircle() {
    [...circles].forEach((circle, index) => {
      if (index < currentActive) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });
    const actives = document.querySelectorAll(".active");
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    if (currentActive === 1) {
      prevBtn.disabled = true;
    } else if (currentActive === circles.length) {
      nextBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
      nextBtn.disabled = false;
    }
  }
});
