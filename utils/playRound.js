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
export default playRound
