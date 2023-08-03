window.addEventListener("load", function () {
  const btnToggle = document.querySelectorAll(".faq-toggle");
  [...btnToggle].forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.parentNode.classList.toggle("active");
    });
  });
});
