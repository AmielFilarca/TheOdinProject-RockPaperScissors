function computerPlay() {
  let selection = Math.floor(Math.random() * 3 + 1);
  switch (selection) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      break;
  }
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    switch (computerSelection) {
      case "rock":
        result = "Rock = Rock. It's a draw!";
        break;
      case "paper":
        result = "Rock < Paper. You lose!";
        break;
      case "scissors":
        result = "Rock > Scissors. You win!";
        break;
      default:
        break;
    }
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "rock":
        result = "Paper > Rock. You win!";
        break;
      case "paper":
        result = "Paper = Paper. It's a draw!";
        break;
      case "scissors":
        result = "Paper < Scissors. You lose!";
        break;
      default:
        break;
    }
  } else if (playerSelection == "scissors") {
    switch (computerSelection) {
      case "rock":
        result = "Scissors < Rock. You lose!";
        break;
      case "paper":
        result = "Scissors > Paper. You win!";
        break;
      case "scissors":
        result = "Scissors = Scissors. It's a draw!";
        break;
      default:
        break;
    }
  }
  return result;
}

const buttons = document.querySelectorAll("button");
const resultContainer = document.querySelector(".result-container");
const scoreboard = document.querySelector(".scoreboard");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", e => {
    //Resets result and score if there is already a winner
    if (playerScore == 5 || computerScore == 5) {
      while (resultContainer.hasChildNodes()) {
        resultContainer.removeChild(resultContainer.firstChild);
      }
      playerScore = 0;
      computerScore = 0;
    }
    //Displays result
    const result = document.createElement("div");
    result.className = "result";
    result.textContent = playRound(
      button.textContent.toLowerCase(),
      computerPlay()
    );
    resultContainer.appendChild(result);
    //Adds score to winner
    if (result.textContent.includes("win")) {
      playerScore++;
    } else if (result.textContent.includes("lose")) {
      computerScore++;
    }
    //Updates score
    scoreboard.textContent = playerScore + " - " + computerScore;
    //Checks for winner
    if (playerScore == 5 || computerScore == 5) {
      if (playerScore > computerScore) {
        scoreboard.textContent = scoreboard.textContent + "\nYOU WIN!";
      } else if (playerScore < computerScore) {
        scoreboard.textContent = scoreboard.textContent + "\nYOU LOSE!";
      }
    }
  });
});
