let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function getHumanChoice() {
  const humanChoice = prompt('Please enter your choice (rock, paper, or scissors)');
  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    return humanChoice;
  } else {
    alert('You entered an invalid choice. Please try again.');
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert('It\'s a tie!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    alert(`You win! The score is now ${humanScore} to ${computerScore}.`);
  } else {
    computerScore++;
    alert(`You lose! The score is now ${humanScore} to ${computerScore}.`);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Mostrar el resultado final
  if (humanScore > computerScore) {
    alert(`¡Ganaste! El puntaje final es ${humanScore} a ${computerScore}.`);
  } else if (humanScore < computerScore) {
    alert(`Perdiste. El puntaje final es ${humanScore} a ${computerScore}.`);
  } else {
    alert(`Empate. El puntaje final es ${humanScore} a ${computerScore}.`);
  }
}

// Iniciar el juego
playGame();

