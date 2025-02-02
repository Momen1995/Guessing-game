"use strict";

// Element selection
const gameModeSelect = document.querySelector(".game-change");
const rangeCalculator = document.querySelector(".range-calc");
let bestScoreDisplay = document.querySelector(".score-best");
const numberInput = document.querySelector("#input-number");
const guessButton = document.querySelector(".guess");
const newGameButton = document.querySelector(".new-game");
const averageScoreAttempt = document.querySelector(".avg-attempt");
const gameRating = document.querySelector(".game-rate");
const gameRangeDisplay = document.querySelector(".game-range");
const guessingTextDisplay = document.querySelector(".guess-text");
const numberGuessingContainer = document.querySelector(".number-guessing");
let attemptScoreDisplay = document.querySelector(".attempt-score");
let gamePlaysDisplay = document.querySelector(".game-plays");
let selectedGameMode;

// Secret numbers for different difficulty levels
let easySecretNumber = Math.floor(Math.random() * 50 + 1);
let mediumSecretNumber = Math.floor(Math.random() * 100 + 1);
let hardSecretNumber = Math.floor(Math.random() * 200 + 1);
console.log(easySecretNumber);
console.log(mediumSecretNumber);
console.log(hardSecretNumber);

// Initialize score displays
attemptScoreDisplay.textContent = 0;
bestScoreDisplay.textContent = 0;
gamePlaysDisplay.textContent = 0;

// Array to store wrong guesses
let wrongGuesses = [];
let bestScore = [];
console.log(bestScore)

// Display the guessing text
function updateGuessingText(text) {
  guessingTextDisplay.textContent = text;
}

// Display the game range based on difficulty level
function updateGameRangeDisplay(range) {
  gameRangeDisplay.textContent = range;
}

// Handle invalid input
function handleInvalidInput() {
  if (rangeCalculator.value < 21) {
    updateGuessingText("Enter a valid input!");
    rangeCalculator.value++;
    attemptScoreDisplay.textContent++;
  }
  checkLoseCondition();
}

// Handle incorrect input
function handleIncorrectInput(inputValue, secretNumber) {
  if (rangeCalculator.value < 21) {
    updateGuessingText(inputValue > secretNumber ? "HIGH" : "LOW");
    rangeCalculator.value++;
    wrongGuesses.push(inputValue);
    const showWrongAns = wrongGuesses.join(",");
    numberGuessingContainer.textContent = showWrongAns;
    attemptScoreDisplay.textContent++;
  }
  checkLoseCondition();
}

// Handle correct input
function handleCorrectInput() {
  updateGuessingText(
    `It took you ${wrongGuesses.length} attempts to win! 🎉🎆🎇`
  );
  document.body.style.backgroundColor = "yellow";
  gamePlaysDisplay.textContent++;
  bestScore.push(wrongGuesses.length)
  
  //best score find
  const filterBestScore = bestScore.reduce((acc,value) => acc < value ? acc : value,bestScore[0])
  console.log(filterBestScore)
  
  bestScoreDisplay.textContent = filterBestScore;
}

// Check if the player has lost
function checkLoseCondition() {
  if (rangeCalculator.value >= 21) {
    updateGuessingText("You lose the game!😢");
  }
}

// Main game logic function
function initializeGame() {
   selectedGameMode = gameModeSelect.value;

  // Easy mode logic
  if (selectedGameMode === "easy") {
    updateGameRangeDisplay("1-50");

    guessButton.addEventListener("click", () => {
      let inputValue = Number(numberInput.value);

      if (inputValue < 1) {
        handleInvalidInput();
      } else if (inputValue !== easySecretNumber) {
        handleIncorrectInput(inputValue, easySecretNumber);
      } else {
        handleCorrectInput();
      }
    });
  }

  // Medium mode logic
  else if (selectedGameMode === "medium") {
    updateGameRangeDisplay("1-100");

    guessButton.addEventListener("click", () => {
      let inputValue = Number(numberInput.value);

      if (inputValue < 1) {
        handleInvalidInput();
      } else if (inputValue !== mediumSecretNumber) {
        handleIncorrectInput(inputValue, mediumSecretNumber);
      } else {
        handleCorrectInput();
      }
    });
  }

  // Hard mode logic
  else if (selectedGameMode === "hard") {
    updateGameRangeDisplay("1-200");

    guessButton.addEventListener("click", () => {
      let inputValue = Number(numberInput.value);

      if (inputValue < 1) {
        handleInvalidInput();
      } else if (inputValue !== hardSecretNumber) {
        handleIncorrectInput(inputValue, hardSecretNumber);
      } else {
        handleCorrectInput();
      }
    });
  }
}

newGameButton.addEventListener("click", () => {
  selectedGameMode = gameModeSelect.value;
  wrongGuesses = [];

  easySecretNumber = Math.floor(Math.random() * 50 + 1);
  console.log(easySecretNumber)
  mediumSecretNumber = Math.floor(Math.random() * 100 + 1);
  hardSecretNumber = Math.floor(Math.random() * 200 + 1);

  rangeCalculator.value = 0;
  attemptScoreDisplay.textContent = 0;
  numberGuessingContainer.textContent = "";

  updateGuessingText("Guessing number...");
  document.body.style.backgroundColor = "#a5d6a7";
  numberInput.value = "";
});

// Initialize the game when the window loads
window.onload = initializeGame;
