let userScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        return "You win!";
    } else {d
        computerScore++;
        return "You lost :), Try again!";
    }
}

function playGame() {
    console.log("Enter rock, paper, or scissors:");
    
    let userChoice = prompt("Enter...")
    
    if (!choices.includes(userChoice)) {
        alert("Invalid Choice. Please enter rock, paper, or scissors.");
        return;
    }

    let computerChoice = getComputerChoice();
    alert(`Computer choice: ${computerChoice}`);
    alert(determineWinner(userChoice, computerChoice));
    alert(`Score: (You) - ${userScore}, Computer - ${computerScore}`);

    let playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        playGame();
    } else {
        alert("Thanks for playing!");
    }
}

playGame();


