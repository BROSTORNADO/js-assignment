function computerPlay() {
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
    let player = prompt(`Round ${i + 1} : Rock, paper, or scissors, let the hilarity commence! 🤝🤣`)
    let computerP = computerPlay()
    let result = playRound(player, computerP)
    if (result.charAt(4) === 'w') {
      times_won.you += 1
    } else if (result.charAt(4) === 'l') {
      times_won.computer += 1
    }
    console.log(result)
  }

  const { you, computer } = times_won
  console.log(`Score : `, you, computer)
  if (you === computer) {
    console.log("It's a tie, no winners, just friends in a comedic standoff! 😄🤝")
  } else if (you > computer) {
    console.log('You rock! 🎉🏆 Victory is yours! 👑😄 ')
  } else {
    console.log('Computer wins! 🎮💻 Better luck next time! 😄🤝')
  }
  const replay = prompt(`Do you wanna play again ? (yes or no) `)
  if (replay.toLowerCase() == 'yes'){
  console.clear()
  game()
}
    
}

game()
