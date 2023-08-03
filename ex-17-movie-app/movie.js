const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=77821db68fb801e8ff7b67e48eae3a21&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=77821db68fb801e8ff7b67e48eae3a21&query='";
const form = document.getElementById("form");
const main = document.getElementById("main");
const videoContainer = document.querySelector(".video-container");
getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}
function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { id, title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <figure class="movie-image">
        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <button class="movie-view" data-id="${id}"><i class="fa fa-home"></i></button>
    </figure>
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
        ${overview}
    </div>
    `;
    main.appendChild(movieEl);
  });
}
function getClassByRate(vote) {
  if (vote >= 8) {
    return "lightgreen";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  searchTerm && searchTerm !== ""
    ? showMovies(SEARCH_API + searchTerm)
    : window.location.reload();
});
