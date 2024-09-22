const choices = ['piedra', 'papel', 'tijeras']; // Opciones de juego
const computerChoice = document.getElementById('computer'); // Elección de la computadora
const combatResult = document.getElementById('result'); // Resultado del combate
const combatWins = document.getElementById('wins'); // Cantidad de veces ganadas
const combatLosses = document.getElementById('losses'); // Cantidad de veces perdidas
const resetButton = document.getElementById('reset'); // Botón de reinicio

// Variables de conteo
let wins = 0;
let losses = 0;
// variables de texto
let result;
let computer;

// Define elementos a las variables al hacer click en cada uno.
document.getElementById('rock').addEventListener('click', () => play('piedra')); 
document.getElementById('paper').addEventListener('click', () => play('papel'));
document.getElementById('scissors').addEventListener('click', () => play('tijeras'));
resetButton.addEventListener('click', resetGame);

// Función de juego
function play(playerChoice) {
    const computerChoices = choices[Math.floor(Math.random() * choices.length)]; // Retorna una opción aleatoria y la asigna a la opción elegida por el computador
    computer = `La computadora eligió ${computerChoices}.`;
    //Condiciones para decidir el resultado
    if (playerChoice === computerChoices) {
        result = '¡Es un empate! 😤';
    } else if (
        (playerChoice === 'piedra' && computerChoices === 'tijeras') ||
        (playerChoice === 'papel' && computerChoices === 'piedra') ||
        (playerChoice === 'tijeras' && computerChoices === 'papel')
    ) {
        result = `¡Ganaste! 😍`;
        wins++;
    } else {
        result = `¡Perdiste! 😭`;
        losses++;
    }
    updateScores();
    computerChoice.textContent = computer; // Asignación de la elección de la computadora como texto.
    combatResult.textContent = result; // Asignación del resultado como texto.
}

function updateScores() {
    combatWins.textContent = wins; 
    combatLosses.textContent = losses;
}

function resetGame() {
   // Reinicia el juego y actualiza los contadores, inicializa los valores en 0 y vacios.
    wins = 0;
    losses = 0;
    updateScores();
    computerChoice.textContent = '';
    combatResult.textContent = '';
}

