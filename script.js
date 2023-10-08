const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const roundResultDisplay = document.getElementById('round-result');
const choiceBtns = document.querySelectorAll('.choice-btn');


let playerSelection;
let computerSelection;
let roundResult;


choiceBtns.forEach(button => button.addEventListener('click', () => {

  playerSelection = button.textContent;
  computerTurn();
  playerChoiceDisplay.textContent = `Player: ${playerSelection}`;
  computerChoiceDisplay.textContent = `Computer: ${computerTurn()}`;
  roundResultDisplay.textContent = roundWinner();
}));


function computerTurn() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ].toUpperCase();
};


function roundWinner() {
  if (computerSelection === "rock") {
    return roundResult === "paper" ? 'You win!' : 'You lose!';
  }
  else if (computerSelection === "paper") {
    return roundResult === 'scissors' ? 'You win!' : 'You lose!';
  }
  else if (computerSelection === 'scissors') {
    return roundResult === 'rock' ? 'You win!' : 'You lose!';
  }

};