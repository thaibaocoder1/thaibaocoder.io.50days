const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const mainCard = document.getElementById("main");
const searchInput = document.getElementById("search");
getUser("bradtraversy");
function getUser(username) {
  try {
    axios.get(APIURL + username).then((res) => {
      console.log(res.data);
      createUserCard(res.data);
      getRespos(username);
    });
  } catch (err) {
    if (err.response.status === 404) {
      throw new Error(err);
      createErrorCard();
    }
  }
}
async function getRespos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos");
    addReposCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
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
function addReposCard(repos) {
  const resposEl = document.getElementById("repos");
  if (!resposEl) return;
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    resposEl.appendChild(repoEl);
  });
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
