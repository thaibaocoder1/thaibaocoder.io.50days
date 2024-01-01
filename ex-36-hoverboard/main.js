const boardEl = document.getElementById("board");
const colorList = ["red", "blue", "green", "yellow", "white", "gray"];
let numSquare = 500;
for (let i = 0; i < numSquare; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => getColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  boardEl.appendChild(square);
}
function getColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
  return colorList[Math.floor(Math.random() * colorList.length)];
}
