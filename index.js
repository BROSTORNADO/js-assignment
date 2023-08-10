// Generates a random selection for the computer among Rock, Paper, and Scissors
function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

// Determines the winner of a round based on player and computer selections
function playRound(playerSelection, computerSelection) {
    const formattedPlayerSelection = playerSelection.toLowerCase();
    const formattedComputerSelection = computerSelection.toLowerCase();

    console.log(`You : ${formattedPlayerSelection}`);

    switch (formattedPlayerSelection) {
        case formattedComputerSelection:
            return "It's a draw!";
        case 'rock':
            return formattedComputerSelection === 'scissors'
                ? 'You win, Rock beats Scissors'
                : 'You lose, Rock is beaten by Paper';
        case 'scissors':
            return formattedComputerSelection === 'paper'
                ? 'You win, Scissors beat Paper'
                : 'You lose, Scissors are beaten by Rock';
        case 'paper':
            return formattedComputerSelection === 'rock'
                ? 'You win, Paper beats Rock'
                : 'You lose, Paper is beaten by Scissors';
        default:
            return 'Invalid choice!';
    }
}

// Displays a welcome message to the player
function displayWelcomeMessage() {
    alert("WELCOME TO ROCK, PAPER, SCISSORS!\n\nThe best classic game!\n\nPlease first press F12 to open your console");
    alert("Here's how it works:\n\nRock beats Scissors\nScissors beats Paper\nPaper beats Rock\n\nLet's Go!");
}

// Prompts the player to make a valid selection (Rock, Paper, or Scissors) for a round
function getPlayerSelection(round) {
    let validSelection = false;
    let playerSelection;

    while (!validSelection) {
        playerSelection = prompt(`Round ${round}: Choose Rock, Paper, or Scissors`);

        if (playerSelection === null) {
            console.log('Game canceled.');
            return null;  // Handle player canceling the game
        }

        if (["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
            validSelection = true;
        } else {
            console.log("Be careful with your fat fingers! Please choose Rock, Paper, or Scissors.");
        }
    }

    return playerSelection;
}

// Determines the winner of the game based on player and computer scores
function determineWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "You are unstoppable! You won this game!";
    } else if (playerScore < computerScore) {
        return "You are a loser! Try to play something else!";
    } else {
        return "It's a draw. Play it again to prove you're good!";
    }
}

// Prompts the player whether they want to play again based on their score
function promptPlayAgain(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return prompt("Congrats! You are so good, but you think you can win again? (yes or no)");
    } else {
        return prompt("Do you have the courage to play again, chicken? (yes or no)");
    }
}

// Prompts the player to confirm if they are a chicken
function promptChickenConfirmation() {
    return prompt("So you are a chicken? (yes or no)");
}

// Main game function (gameplay)
const game = () => {
    displayWelcomeMessage();
    let playAgain = true;

    while (playAgain) {
        let playerScore = 0;
        let computerScore = 0;

        for (let round = 1; round <= 5; round++) {
            let playerSelection = getPlayerSelection(round);

            if (playerSelection === null) {
                playAgain = false;
                break;
            }

            const computerSelection = computerPlay();

            console.log('Computer plays: ' + computerSelection);
            const result = playRound(playerSelection, computerSelection);
            console.log(result);

            if (result.startsWith('You win')) {
                playerScore++;
            } else if (result.startsWith('You lose')) {
                computerScore++;
            }
        }

        console.log(`Final Scores:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);

        const endMessage = determineWinner(playerScore, computerScore);
        console.log(endMessage);

        const playAgainResponse = promptPlayAgain(playerScore, computerScore);

        if (playAgainResponse === null || playAgainResponse.toLowerCase() !== "yes") {
            const confirmResponse = promptChickenConfirmation();

            if (confirmResponse === null || confirmResponse.toLowerCase() === "yes") {
                console.log("Oh I see, so you are a real chicken then, give this game away to a real gamer!");
                playAgain = false;
            } else {
                playAgain = true;
            }
        }

        console.clear();
    }
};

// Start the game
game();
