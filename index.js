const computerPlay = () => {
  const options = ['Rock', 'Paper', 'Scissors']

  return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  const playerSel = playerSelection.toLowerCase()
  const computerSel = computerSelection.toLowerCase()
  console.log(`you : ${playerSel}`)
  console.log(`computer : ${computerSel}`)

  switch (playerSel) {
    case computerSel:
      return "It's a tie!"
    case 'rock':
      return computerSel === 'scissors'
        ? 'You win, Rock beats Scissors'
        : 'You lose, Rock are beaten by Paper '
    case 'scissors':
      return computerSel === 'paper'
        ? 'You win, Scissors beat Paper'
        : 'You lose, Scissors are beaten by Rock'
    case 'paper':
      return computerSel === 'rock'
        ? 'You win, Paper beats Rock'
        : 'You lose, Paper is beaten by Scissors'
    default:
      return 'Invalid choice!'
  }
}
const game = () => {
  const times_won = {
    you: 0,
    computer: 0,
  }

  for (let i = 0; i < 5; i++) {
    let player = prompt('Enter your choice:')
    let computer = computerPlay()
    let result = playRound(player, computer)
    if (result.charAt(4) === 'w') {
      times_won.you += 1
    } else if (result.charAt(4) === 'l') {
      times_won.computer += 1
    }
    console.log(result)
  }

  const { you, computer } = times_won
  console.log(you, computer)
  if (you === computer) {
    console.log("it's a tie")
  } else if (you > computer) {
    console.log('Bravo ! , you won the game ')
  } else {
    console.log('Oups ! ,computer won the game')
  }
}

game()

// console.log(playRound('rock', 'rock').charAt(5))

// console.log(computerPlay())
// const userInput = prompt('Enter your name:')
// console.log('Hello, ' + userInput)
// Rock beats Scissors
// Scissors beat Paper
// Paper beats Rock
