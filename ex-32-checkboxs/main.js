const toggles = document.querySelectorAll(".toggle");
const goodEl = document.querySelector("#good");
const cheapEl = document.querySelector("#cheap");
const fastEl = document.querySelector("#fast");
toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => doTheTrick(e.target));
});
function doTheTrick(clicked) {
  if (goodEl.checked && cheapEl.checked && fastEl.checked) {
    if (goodEl === clicked) {
      fastEl.checked = false;
    }
    if (cheapEl === clicked) {
      goodEl.checked = false;
    }
    if (fastEl === clicked) {
      cheapEl.checked = false;
    }
  }
}
