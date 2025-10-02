/* This program demonstrate rock paper and scissors game */
const choices = ["rock", "paper", "scissors"]; // for computer choices

// player and computer display
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");

// for keeping the score:
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// result display 
const resultDisplay = document.getElementById("resultDisplay");


// for incrementing the score
let playerScore = 0;
let computerScore = 0;

// playGame() function
function playGame(playerChoice) {
   const computerChoice = choices[Math.floor(Math.random() * 3)]; // the random number is using the array index like [0], [1], [2] but randomly
    console.log(computerChoice); 
    let result = "";

    // check if the player choice is same as the computer choice and make other decisions if not
   
    if (playerChoice === computerChoice) {
        result = "It's a tie";
    }

    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;

            
                case "paper":
                    result = (computerChoice === "rock") ? "You win!" : "You lose!";
                    break;

                    case "scissors":
                        result = (computerChoice === "paper") ? "You win!" : "You lose!";
                        break;
        }
    }

    playerDisplay.textContent = `player: ${playerChoice}`;
    computerDisplay.textContent = `computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    result = result.toLowerCase().trim();

    resultDisplay.classList.remove("greenText", "redText");
    // change the text color if win makes it green if lose makes it red
    switch (result) {
        case "you win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        
        case "you lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}