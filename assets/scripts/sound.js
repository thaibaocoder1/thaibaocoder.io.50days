const songList = ["applause", "holo", "home", "shapeofyou", "spark", "summer"];
[...songList].forEach((song) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = song;
  let playing = true;
  btn.addEventListener("click", () => {
    if (playing) {
      document.getElementById(song).play();
      playing = false;
    } else {
      document.getElementById(song).pause();
      document.getElementById(song).currentTime = 0;
      playing = true;
    }
  });
  document.getElementById("buttons").appendChild(btn);
});
