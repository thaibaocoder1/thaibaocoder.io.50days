const buttons = document.querySelectorAll(".ripple");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const cX = e.clientX;
    const cY = e.clientY;
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    const xInside = cX - buttonLeft;
    const yInside = cY - buttonTop;
    const circle = document.createElement("span");
    circle.className = "circle";
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
  });
});
