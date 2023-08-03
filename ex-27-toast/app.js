const button = document.getElementById("button");
const toastContainer = document.getElementById("toasts");
const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];
const types = ["info", "success", "error"];
button.addEventListener("click", () => createNotification());
function createNotification(message = null, type = null) {
  const notifiEl = document.createElement("div");
  notifiEl.classList.add("toast");
  notifiEl.classList.add(type ? type : randomType());
  notifiEl.innerText = randomMessage();
  toastContainer.appendChild(notifiEl);
  setTimeout(() => {
    notifiEl.remove();
  }, 3000);
}
function randomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function randomType() {
  return types[Math.floor(Math.random() * types.length)];
}
