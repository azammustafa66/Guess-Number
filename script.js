"use strict";

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

let correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector(".correct-number").textContent = correctNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(correctNumber);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number";
  } else if (guess === correctNumber) {
    document.querySelector(".message").textContent = "Correct Number! 🎉";
    document.querySelector(".correct-number").textContent = correctNumber;

    document.querySelector("body").style.backgroundColor = "#60b437";
    document.querySelector(".correct-number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > correctNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!! 🤣🤣";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < correctNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!! 🤣🤣";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  correctNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".correct-number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".correct-number").style.width = "15rem";
});
