import computerPlay from './computerPlay.js'
import playRound from './playRound.js'
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
export default game
