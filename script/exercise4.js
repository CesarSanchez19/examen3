// Make a script that simulates the game of Rock, Paper, Scissors vs. AI.

const options = ["rock", "paper", "scissors"];
const player = prompt("Choose: rock, paper, or scissors").toLowerCase();
const AI = options[Math.floor(Math.random() * options.length)];

switch (true) {
  case player === AI:
    alert(`It's a tie. Both chose ${player}`);
    console.log(`It's a tie. Both chose ${player}`);
    break;

  case (player === "rock" && AI === "scissors") ||
    (player === "paper" && AI === "rock") ||
    (player === "scissors" && AI === "paper"):
    alert(`You win! You chose ${player} and the AI chose ${AI}`);
    console.log(`You win! You chose ${player} and the AI chose ${AI}`);
    break;

  case (player === "rock" && AI === "paper") ||
    (player === "paper" && AI === "scissors") ||
    (player === "scissors" && AI === "rock"):
    alert(`You lose! You chose ${player} and the AI chose ${AI}`);
    console.log(`You lose! You chose ${player} and the AI chose ${AI}`);
    break;

  default:
    alert("Invalid option. Please choose rock, paper, or scissors.");
    console.log("Invalid option. Please choose rock, paper, or scissors.");
}
