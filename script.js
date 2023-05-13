"use strict";

const displayMessage = function display(message) {
  document.querySelector(".message").textContent = message;
};

let score = 20;
let highScore = 0;
let correctNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector(".correct-number").textContent = correctNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("🚫 No Number");
  } else if (guess === correctNumber) {
    displayMessage("Correct Number! 🎉");
    document.querySelector(".correct-number").textContent = correctNumber;

    document.querySelector("body").style.backgroundColor = "#60b437";
    document.querySelector(".correct-number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== correctNumber) {
    if (score > 1) {
      displayMessage(guess > correctNumber ? "Too High 📈" : "Too Low 📈");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!! 🤣🤣";
      document.querySelector(".score").textContent = 0;
    }
  }

  /*
  else if (guess > correctNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!! 🤣🤣";
      document.querySelector(".score").textContent = 0;
    }
  } 
  
  else if (guess < correctNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!! 🤣🤣";
      document.querySelector(".score").textContent = 0;
    }
  }
*/
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
