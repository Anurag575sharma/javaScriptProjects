let scoreStr = localStorage.getItem("score");
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lose: 0,
        Tie: 0,
      };
  score.displayScore = function () {
    return `Score: Won:${score.win}, Lost:${score.lose}, Tie: ${score.Tie}`;
  };
  showresult();
}
function generateChoice() {
  let computerChoice = Math.random() * 3;
  if (computerChoice >= 0 && computerChoice < 1) {
    return "Bat";
  } else if (computerChoice >= 1 && computerChoice < 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function generateResult(computerChoice, userChoice) {
  if (userChoice === "Bat") {
    if (computerChoice === "Ball") {
      score.win++;
      return "User won";
    } else if (computerChoice === "Bat") {
      score.Tie++;
      return `It's a Tie`;
    } else {
      score.lose++;
      return "Computer Won";
    }
  } else if (userChoice === "Ball") {
    if (computerChoice === "Stump") {
      score.win++;
      return "User won";
    } else if (computerChoice === "Ball") {
      score.Tie++;
      return `It's a Tie`;
    } else {
      score.lose++;
      return "Computer Won";
    }
  } else {
    if (computerChoice === "Bat") {
      score.win++;
      return "User won";
    } else if (computerChoice === "Stump") {
      score.Tie++;
      return `It's a Tie`;
    } else {
      score.lose++;
      return "Computer Won";
    }
  }
}

function showresult(userChoice, computerChoice, msg) {
  localStorage.setItem("Score", JSON.stringify(score));
  document.querySelector("#user-move").innerText = userChoice
    ? `You have choosen ${userChoice}`
    : "";

  document.querySelector("#computer").innerText = computerChoice
    ? `Computer choice is ${computerChoice}`
    : "";

  document.querySelector("#res").innerText = msg || "";
  document.querySelector("#score").innerText = score.displayScore();
}
