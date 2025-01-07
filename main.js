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
console.log(MEDIUM_SECRET_NUMBER);
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

//input validation 
function validInput() {
  displayGuessingText("Enter a valid input!");
  rangeCalc.value++;
  attemptScore.textContent++;
}

//input value not match
function inputValueNotMatch() {
  displayGuessingText(inputValue > MEDIUM_SECRET_NUMBER ? "HIGH" : "LOW");
  rangeCalc.value++;
  attemptScore.textContent++;
}

//winning function
function inputValueCorrect() {
  displayGuessingText("You win🎉🎆🎇");
  document.body.style.backgroundColor = "yellow";
}

// main function
function myFunction() {
  let gameChangeValue = gameChange.value;

  //easy
  if (gameChangeValue === "easy") {
    displayGameRange("1-50");

    guessBtn.addEventListener("click", () => {
      let inputValue = Number(inputNum.value);

      if (inputValue < 1) {
        validInput();
      } else if (inputValue !== MEDIUM_SECRET_NUMBER) {
        inputValueNotMatch();
      } else if (inputValue === MEDIUM_SECRET_NUMBER) {
        inputValueCorrect();
      }
    });
  }

  //medium
  else if (gameChangeValue === "medium") {
    displayGameRange("1-100");

    guessBtn.addEventListener("click", () => {
      let inputValue = Number(inputNum.value);

      if (inputValue < 1) {
        validInput();
      } else if (inputValue !== MEDIUM_SECRET_NUMBER) {
        inputValueNotMatch();
      } else if (inputValue === MEDIUM_SECRET_NUMBER) {
        inputValueCorrect();
      }
    });
  }

  //hard
  else if (gameChangeValue === "hard") {
    displayGameRange("1-200");

    guessBtn.addEventListener("click", () => {
      let inputValue = Number(inputNum.value);

      if (inputValue < 1) {
        validInput();
      } else if (inputValue !== HARD_SECRET_NUMBER) {
        inputValueNotMatch();
      } else if (inputValue === HARD_SECRET_NUMBER) {
        inputValueCorrect();
      }
    });
  }
}

window.onload = myFunction;

