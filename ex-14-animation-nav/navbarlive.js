const toggleButton = document.getElementById("toggle");
const navbar = document.getElementById("id");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}
