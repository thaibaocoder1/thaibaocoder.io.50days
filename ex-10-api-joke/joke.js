const jokeEL = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");
jokeBtn.addEventListener("click", generateJoke);
generateJoke();
async function generateJoke() {
  const init = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", init);
  const data = await res.json();
  jokeEL.innerHTML = data.joke;
}
// function generateJoke() {
//   const init = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", init)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEL.innerHTML = data.joke;
//     });
// }
