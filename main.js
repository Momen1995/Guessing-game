"use strict";

//element select
const gameChange = document.querySelector(".game-change");
const rangeCalc = document.querySelector(".range-calc");
let attemptScore = document.querySelector(".attempt-score");
const scoreBest = document.querySelector(".score-best");
const inputNum = document.querySelector("#input-number");
const guessBtn = document.querySelector(".guess");
const newGameBtn = document.querySelector(".new-game");
const avgScoreAttempt = document.querySelector(".avg-attempt");
let gamePlays = document.querySelector(".game-plays");
const gameRate = document.querySelector(".game-rate");
const gameRange = document.querySelector(".game-range");
const guessingText = document.querySelector(".guess-text");

let EASY_SECRET_NUMBER = Math.floor(Math.random() * 50 + 1);
console.log(EASY_SECRET_NUMBER);

let MEDIUM_SECRET_NUMBER = Math.floor(Math.random() * 100 + 1);
let HARD_SECRET_NUMBER = Math.floor(Math.random() * 200 + 1);

attemptScore.textContent = Number(0);
scoreBest.textContent = Number(0);

//DISPLAY GUESSING TEXT
function displayGuessingText(text) {
  guessingText.textContent = text;
}

//DISPLAY RANGE (HARD,MEDIUM,EASY)
function displayGameRange(range) {
  gameRange.textContent = range;
}

function incrementValue() {
  rangeCalc.value++;
  attemptScore.textContent++;
}

// Define `myFunction` outside
function myFunction() {
  let gameChangeValue = gameChange.value;

  //easy
  if (gameChangeValue === "easy") {
    displayGameRange("1-50");

    guessBtn.addEventListener("click", () => {
      let inputValue = Number(inputNum.value);

      if (inputValue < 1) {
        displayGuessingText("Enter a valid input!");
        incrementValue();
      } else if (inputValue !== EASY_SECRET_NUMBER) {
        displayGuessingText(inputValue > EASY_SECRET_NUMBER ? "HIGH" : "LOW");
        incrementValue();
      } else if (inputValue === EASY_SECRET_NUMBER) {
        displayGuessingText("You win🎉🎆🎇");
        document.body.style.backgroundColor = "yellow";
      }
    });
  }

  // //medium
  // else if (gameChangeValue === "medium") {
  //   displayGameRange("51-100");

  //   guessBtn.addEventListener("click", () => {
  //     console.log("Medium section");
  //   });
  // }

  // //hard
  // else if (gameChangeValue === "hard") {
  //   displayGameRange("101-200");

  //   guessBtn.addEventListener("click", () => {
  //     console.log("hard section");
  //   });
  // }
}

window.onload = myFunction;

// guessBtn.addEventListener("click", () => {
//   //input validation
//   if (input < 1) displayGuessingText("Enter a valid input");
// });
