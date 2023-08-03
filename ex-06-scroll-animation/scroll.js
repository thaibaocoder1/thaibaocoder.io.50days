const boxList = document.querySelectorAll(".box");
window.addEventListener("scroll", function () {
  const triggerBottom = (window.innerHeight / 5) * 4;
  [...boxList].forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});
