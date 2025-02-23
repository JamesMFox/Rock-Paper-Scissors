

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}

function getHumanChoice() {
  var valid_ans = false
  while (!valid_ans) {
    let choice = parseInt(prompt("Type 1 for Rock, 2 for Paper, or 3 for Scissors"));
    switch (choice) {
      case 1:
        return "Rock";
        valid_ans = true;
        break;
      case 2:
        return "Paper";
        valid_ans = true;
        break;
      case 3:
        return "Scissors";
        valid_ans = true;
        break;
      }
  }
}



function playGame() {
  var humanScore = 0;
  var computerScore = 0;
  var tieScore = 0;

  for (i = 0; i < 5; i++) {
    let humanselection = getHumanChoice();
    let computerselection = getComputerChoice();
    playRound(humanselection, computerselection);
  }
  if (humanScore > computerScore) {
    console.log("You Win the game!!!");
  } else {
    console.log("You did not win the game");
  }
  console.log(`You scored: ${humanScore}`);
  console.log(`Computer scored: ${computerScore}`);
  console.log(`${tieScore} tied rounds`)
  
  
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      tieScore++;
      console.log(`You both chose ${humanChoice}`)
    } else {
      if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
          humanScore++;
          console.log("You win! Rock smashes Scissors.");
        } else {
          computerScore++;
          console.log("You lose! Paper covers Rock.");
        }
      } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
          humanScore++;
          console.log("You win! Paper covers Rock");
        } else {
          computerScore++;
          console.log("You lose! Scissors cuts Paper");
        }
      } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
          computerScore++;
          console.log("You lose! Rock smashes Scissors");
        } else {
          humanScore++;
          console.log("You win! Scissors cuts Paper");
        }
      }
    }
  }
}