//return random choice from ['rock', 'paper', 'scissor']
function getComputerChoice () {
    const computerChoice = ['Rock', 'Paper', 'Scissor']
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}

//function to disable the buttons 
function disable(){
    playerChoice.forEach(e => e.disabled = true)
}

// create a ui components
const massage = document.querySelector('#msg')
const player = document.querySelector('#playerscore')
const computer = document.querySelector('#computerscore')
const result = document.querySelector('#result')
const playAgain = document.querySelector('#playAgain')

// get the playerScore and the computerScore after playing.
let playerScore = 0
let computerScore = 0
function playRound(playerSelection, computerSelection) {
    let winMassage = `You have won ${playerSelection} beats ${computerSelection}`
    let loseMassage = `You have lost ${computerSelection} beats ${playerSelection}`   
    let tiedMassage = `You have tied with the computer you both chose ${computerSelection}`
    if ((playerSelection == 'Rock' && computerSelection == 'Paper') || 
    (playerSelection == 'Paper' && computerSelection == 'Scissor') ||
    (playerSelection == 'Scissor' && computerSelection == 'Rock')) {
        playerScore += 1
        massage.innerText = winMassage
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissor') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissor' && computerSelection == 'Paper')) {
        computerScore += 1
        massage.innerText = loseMassage
    } else if (playerSelection == computerSelection){
        massage.innerText = tiedMassage
    } else{
        console.log(`Erorr computer chose '${computerSelection}' and you chose '${playerSelection}'`)
    }

    player.innerText = `Player Score: ${playerScore}`
    computer.innerText = `Computer Score: ${computerScore}`

    // get the winner after 5 rounds and stop playing. 
    if(playerScore == 5 ){
        result.innerText = `Congratulations.You have won the game ${playerScore} : ${computerScore}`
        disable()
        playAgain.innerText = `To play again reload the page`
    }else if(computerScore == 5){
        result.innerText = `Sorry, you have lost the game ${playerScore} : ${computerScore}`
        disable()
        playAgain.innerText = `To play again reload the page`
    } 
}

// to start the game by clicking a button.
const playerChoice = Array.from(document.querySelectorAll('button'))
playerChoice.forEach((e) => {
    e.addEventListener('click', () => playRound(e.innerText, getComputerChoice()))
})