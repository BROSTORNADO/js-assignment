export default function computerPlay() {
  const options = ['Rock', 'Paper', 'Scissors']

  return options[Math.floor(Math.random() * 3)]
}
