

function getComputerChoice() {
  let computerChoice = ""

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