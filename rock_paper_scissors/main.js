// initialize global variables
let player = 0
let computer = 0

const roundResult = document.querySelector('.roundResult')

const btns = document.querySelectorAll('button')


// listens for button click representing the player's selection
// calls the playGame function when a click has triggered]
btns.forEach(btn => btn.addEventListener('click', () => playGame(btn.className)))



function playGame(playerChoice) {
    // takes in the player's selection based on button clicked and checks for winner
    if (player < 5 && computer < 5) {
        const combos = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]]
        let computerChoice = getComputerChoice()

        if (playerChoice === computerChoice) {
            roundResult.textContent = "Bruh. It's a tie!"

        } else {
            for (const i of combos) {
                if (playerChoice === i[0] && computerChoice ===  i[1]) {
                    ++player
                    roundResult.textContent = `You win! ${capitalizeWord(i[0])} beats ${capitalizeWord(i[1])}. Yehey! `
                    updateScore("p")

                } else if (computerChoice === i[0] && playerChoice ===  i[1]) {
                    ++computer
                    roundResult.textContent = `You lose! ${capitalizeWord(i[0])} beats ${capitalizeWord(i[1])}. Nyam nyam.`
                    updateScore("c")
                }
            }
        }
        
    } else if (player === 5) {
        roundResult.textContent = 'Oh my. You won, congrats!!!'
    } else if (computer === 5) {
        roundResult.textContent = "You lost but that's okay!!"
    }
}


function updateScore(roundWinner) {
    // expects "p" or "c" that represents the current round's winner and updates the scores in the html page
    const playerScore = document.querySelector('.player')
    const compScore = document.querySelector('.comp')

    if (roundWinner === "p") {
        playerScore.textContent = player
    } else if (roundWinner === "c") {
        compScore.textContent = computer
    }
}


function getComputerChoice() {
    // returns a randomly-generated choice between rock, paper, or scissors
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor((Math.random() * 3))
    return choices[randomNumber]
}


function capitalizeWord(string) {
    // expects a string and returns a string with the first letter capitalized
    return string.charAt(0).toUpperCase() + string.slice(1);
}