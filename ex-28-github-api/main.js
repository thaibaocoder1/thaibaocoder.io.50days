const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const mainCard = document.getElementById("main");
const searchInput = document.getElementById("search");
async function getUser(username) {
  try {
    const response = await fetch(APIURL + username);
    const data = await response.json();
    createUserCard(data);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}
function createErrorCard(msg) {
  const cardHTML = `
  <div class="card">
    <h1>${msg}</h1>
  </div>
  `;
  mainCard.innerHTML = cardHTML;
}
function createUserCard(user) {
  const { avatar_url, name, bio, followers, following, public_repos } = user;
  const card = `
    <div class="card">
    <div>
    <img
      src="${avatar_url}"
      alt="${name}"
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2 class="user-name">${name}</h2>
    <p class="user-desc">${bio}</p>
    <ul>
      <li>${followers} <strong>Followers</strong></li>
      <li>${following} <strong>Following</strong></li>
      <li>${public_repos} <strong>Repos</strong></li>
    </ul>
    <div id="repos">
      <a href="#" class="repo">Repo 1</a>
      <a href="#" class="repo">Repo 2</a>
      <a href="#" class="repo">Repo 3</a>
    </div>
  </div></div>
  `;
  mainCard.innerHTML = card;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInputValue = searchInput.value;
  if (searchInputValue) {
    getUser(searchInputValue);
    searchInput.value = "";
  }
});
