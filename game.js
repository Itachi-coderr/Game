function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'You Win';
    } else {
        return 'You Lose';
    }
}


function playGame() {
    let userScore = 0;
    let computerScore = 0;

    while (true) {
        const userChoice = prompt("Enter rock, paper, or scissors (or 'quit' to stop playing):").toLowerCase();
        if (userChoice === 'quit') {
            alert(`Final scores:\nYour score: ${userScore}\nComputer score: ${computerScore}`);
            break;
        }

        const validChoices = ['rock', 'paper', 'scissors'];
        if (!validChoices.includes(userChoice)) {
            alert("Invalid choice, please try again.");
            continue;
        }

        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);

        if (result === 'You Win') {
            userScore++;
        } else if (result === 'You Lose') {
            computerScore++;
        }

        alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}\nResult: ${result}`);
        alert(`Current scores:\nYour score: ${userScore}\nComputer score: ${computerScore}`);

        const playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
        if (playAgain !== 'yes') {
            alert(`Final scores:\nYour score: ${userScore}\nComputer score: ${computerScore}`);
            break;
        }
    }
}

// Start the game
playGame();