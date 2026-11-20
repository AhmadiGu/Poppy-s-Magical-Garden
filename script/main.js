
// Select HTML elements
const closeButton = document.querySelectorAll(".close-button");
const gameSections = document.getElementById("game-sections")

const howToPlayButton = document.getElementById("how-to-play-btn");
const gameRules = document.getElementById("game-rules")
const gameCredits = document.getElementById("game-credits")
const gameCreditsButton = document.getElementById("credits")


const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time-left");

const startButton = document.querySelector("#start-game");
const stopButton = document.querySelector("#stop-game");


// open How to Play section script
howToPlayButton.addEventListener("click", () => {
  gameSections.style.display = "flex";
  gameRules.style.display = "block";
  gameCredits.style.display = "none"
});

// open Credits section script
gameCreditsButton.addEventListener("click", () => {
  gameSections.style.display = "flex";
  gameRules.style.display = "none";
  gameCredits.style.display = "block"
});


// close sections back to main menu script
closeButton.forEach( button => {
  button.addEventListener("click", () => {
  button.closest(".game-sections").style.display = "none";
});
})




let gameRunning = false;
let timerInterval;
let timeLeft = 60;
let score = 0;

const startGame = () => {
  if (gameRunning) return;

  gameRunning = true;

  showPoppy();
  
  timerInterval = setTimeout(() => {
  gameRunning = false;
}, 60000);

score = 0;
scoreDisplay.textContent = "000";
};


const showPoppy = () => {
if (!gameRunning) return

const randomIndex = Math.floor(Math.random() * holes.length);

let currentImage = holes[randomIndex];
let PoppyPopUpImage = `./images/Poppy.png`
const holeImage = currentImage.src

currentImage.src = PoppyPopUpImage

let clicked = false;

currentImage.onclick = () => {
  if (!clicked && currentImage.src.includes("Poppy.png")) {
    clicked = true;
    score += 10;
    scoreDisplay.textContent = String(score).padStart(3, "0");
  }
};

setTimeout(() => {
    currentImage.src = holeImage;

    // Repeat the function
    showPoppy();
  }, 1000);
}
// startButton.addEventListener("click", startGame);