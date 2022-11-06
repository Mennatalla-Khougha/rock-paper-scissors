//return random choice from ['rock', 'paper', 'scissor']
function getComputerChoice (arr) {
    return (arr[Math.floor(Math.random()*arr.length)])
}
let arr = ['Rock', 'Paper', 'Scissor']
getComputerChoice(arr)

// return the playerScore and the computerScore after playing a round.
let playerScore = 0
let computerScore = 0
function playRound(playerSelection, computerSelection) {
    ((playerSelection == 'rock' && computerSelection == 'Paper') || (playerSelection == 'paper' && computerSelection == 'Scissor')|| (playerSelection == 'scissor' && computerSelection == 'Rock'))? (playerScore++ && 'Round winner is the player'):
    ((playerSelection == 'rock' && computerSelection == 'Scissor') || (playerSelection == 'paper' && computerSelection == 'Rock') || (playerSelection == 'scissor' && computerSelection == 'Paper'))? (computerScore++ && 'Round winner is the computer'):
    'Tie round';
}

// return the result of the game after 5 rounds.
let playerSelection 
let round
function game(playRound){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt('Please enter your choice').toLowerCase()
        playRound(playerSelection, getComputerChoice(arr))
    }
    (playerScore == computerScore)? console.log('You are tied with the computer'):
    (playerScore > computerScore)? console.log('You have won the game'): console.log('You have lost the game')
}
game(playRound)












