# rock-paper-scissors-01project-top
First JS project for web development course The Odin Project

<!-- Game Logic -->

1.Player starts a game by making a choice with a button (Rock, Paper, Scissors)
2.After player makes a choice, computer makes a random choice and then they are evaluated
3.If players choice beats computers choice, players score is increased by 1
4.If players choice does not beat computers choice, computers score is increased by 1
5.If players choice equals to computers choice, both scores are increased by 1
6.After each round number of rounds left to play is decremented by 1 for both players
7.When that number of rounds reaches 0, results are evaluated and winner is announced
8.After Game Over, player can choose to play again or exit


<!-- INPUT -->

<!-- Player Choice  -->

<!-- button for selecting -->

let gameChoice = [rock, paper, scissors];

const rockBtnChoice = gameChoice[0];
const paperBtnChoice = gameChoice[1];
const scissorsBtnChoice = gameChoice[2];




const playerSelection = document.getElementById('btn').textContent;
const computerSelection = 
 