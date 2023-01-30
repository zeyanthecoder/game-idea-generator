const generateButton = document.querySelector("#generate-button");
const clearButton = document.querySelector("#clear-button");
const gameTheme = document.querySelector("#game-theme");
const gameGenre = document.querySelector("#game-genre");
const specialThing = document.querySelector("#special-thing");

const gameThemes = [
  "Fantasy",
  "Sci-Fi",
  "Historical",
  "Survival",
  "Mystery"
];

const gameGenres = [
  "Action",
  "Adventure",
  "Strategy",
  "Simulation",
  "Role-Playing"
];

const specialThings = [
    "Time Travel",
    "Superpowers",
    "Multiplayer Co-op",
    "Virtual Reality",
    "Procedural Generation"
  ];
  
  generateButton.addEventListener("click", function() {
    const themeIndex = Math.floor(Math.random() * gameThemes.length);
    const genreIndex = Math.floor(Math.random() * gameGenres.length);
    const specialIndex = Math.floor(Math.random() * specialThings.length);
  
    gameTheme.textContent = `Theme: ${gameThemes[themeIndex]}`;
    gameGenre.textContent = `Genre: ${gameGenres[genreIndex]}`;
    specialThing.textContent = `Special: ${specialThings[specialIndex]}`;
  });
  
  clearButton.addEventListener("click", function() {
    gameTheme.textContent = "";
    gameGenre.textContent = "";
    specialThing.textContent = "";
  });
  
