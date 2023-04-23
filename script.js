
let randomNum = Math.round(Math.random() * 20);
let score = 20;
let highscore = 0;

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
let displayMsg = document.querySelector(".message");

checkBtn.addEventListener("click", function () {
const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMsg.textContent = "Enter A Number First";
  } else {
    if (guess !== randomNum) {
      if (score > 0) {
        displayMsg.textContent =
          guess > randomNum ? "Too High" : "Too Low";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMsg.textContent =
          "You are a Wimpy Loser";
        document.querySelector("body").style.backgroundColor = "red";
      }
    } else {
        displayMsg.textContent = "correct";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").textContent = randomNum;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
  }
});

againBtn.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  displayMsg.textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  randomNum = Math.round(Math.random() * 20);
  console.log(randomNum);
  score = 20;
});
