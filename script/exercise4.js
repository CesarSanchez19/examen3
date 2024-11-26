const options = ["rock", "paper", "scissors"]; // Define las opciones disponibles: piedra, papel y tijeras
const player = prompt("Choose: rock, paper, or scissors").toLowerCase(); // Solicita al jugador una opción, la convierte a minúsculas y la guarda
const AI = options[Math.floor(Math.random() * options.length)]; // Genera aleatoriamente una opción para la IA

switch (true) { // Utiliza un `switch` con una condición siempre verdadera para manejar los casos de resultado
  case player === AI: // Caso en el que el jugador y la IA eligen la misma opción
    alert(`It's a tie. Both chose ${player}`); // Muestra un mensaje indicando que es un empate
    console.log(`It's a tie. Both chose ${player}`); // Registra el empate en la consola
    break; // Finaliza este caso

  case (player === "rock" && AI === "scissors") || // Caso en el que el jugador gana eligiendo piedra y la IA tijeras
    (player === "paper" && AI === "rock") || // Caso en el que el jugador gana eligiendo papel y la IA piedra
    (player === "scissors" && AI === "paper"): // Caso en el que el jugador gana eligiendo tijeras y la IA papel
    alert(`You win! You chose ${player} and the AI chose ${AI}`); // Muestra un mensaje indicando que el jugador ganó
    console.log(`You win! You chose ${player} and the AI chose ${AI}`); // Registra la victoria en la consola
    break; // Finaliza este caso

  case (player === "rock" && AI === "paper") || // Caso en el que el jugador pierde eligiendo piedra y la IA papel
    (player === "paper" && AI === "scissors") || // Caso en el que el jugador pierde eligiendo papel y la IA tijeras
    (player === "scissors" && AI === "rock"): // Caso en el que el jugador pierde eligiendo tijeras y la IA piedra
    alert(`You lose! You chose ${player} and the AI chose ${AI}`); // Muestra un mensaje indicando que el jugador perdió
    console.log(`You lose! You chose ${player} and the AI chose ${AI}`); // Registra la derrota en la consola
    break; // Finaliza este caso

  default: // Caso en el que la entrada del jugador es inválida
    alert("Invalid option. Please choose rock, paper, or scissors."); // Muestra un mensaje indicando que la entrada es inválida
    console.log("Invalid option. Please choose rock, paper, or scissors."); // Registra el error en la consola
}
