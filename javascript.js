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
  var computerChoice = "";

  //create the rock, paper, scissors buttons
  const rockBtn = document.createElement("button");
  rockBtn.textContent = ("Rock");
  document.body.appendChild(rockBtn);
  const paperBtn = document.createElement("button");
  paperBtn.textContent = ("Paper");
  document.body.appendChild(paperBtn);
  const scissorsBtn = document.createElement("button");
  scissorsBtn.textContent = ("Scissors");
  document.body.appendChild(scissorsBtn);




  //add event listeners and call the play round function
    rockBtn.addEventListener("click" , () => {
      let humanChoice = "Rock";
      if (humanScore < 5 && computerScore < 5) {
        playRound(humanChoice, getComputerChoice());
      }
    });

    paperBtn.addEventListener("click", () => {
      let humanChoice = "Paper";
      if (humanScore < 5 && computerScore < 5) {
        playRound(humanChoice, getComputerChoice());
      }
    });

    scissorsBtn.addEventListener("click", () => {
      let humanChoice = "Scissors"
      if (humanScore < 5 && computerScore < 5) {
        playRound(humanChoice, getComputerChoice());
      }
    });
  

  // Create a div for the scores
  const scoreDiv = document.createElement("div");
  const runningScoreDiv = document.createElement("div");
  const resultsDiv = document.createElement("div");
  scoreDiv.appendChild(runningScoreDiv);
  scoreDiv.appendChild(resultsDiv);
  document.body.appendChild(scoreDiv);
 
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      tieScore++;
      resultsDiv.innerText = `You both chose ${humanChoice}`;
    } else {
      if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
          humanScore++;
          resultsDiv.innerText = "You win! Rock smashes Scissors."
        } else {
          computerScore++;
          resultsDiv.innerText = "You lose! Paper covers Rock."
        }
      } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
          humanScore++;
          resultsDiv.innerText = "You win! Paper covers Rock"
        } else {
          computerScore++;
          resultsDiv.innerText = "You lose! Scissors cuts Paper"
        }
      } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
          computerScore++;
          resultsDiv.innerText = "You lose! Rock smashes Scissors"
        } else {
          humanScore++;
          resultsDiv.innerText = "You win! Scissors cuts Paper"
        }
      }
    }
    if (humanScore >= 5 || computerScore >= 5){
      if (humanScore > computerScore) {
        resultsDiv.innerText = "You Win the game!!!"
      } else {
        resultsDiv.innerText = "You did not win the game"
      }
    }
    runningScoreDiv.innerText = `Your Score: ${humanScore}, Computer Score: ${computerScore}`;
  }
}