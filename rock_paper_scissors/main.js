
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor((Math.random() * 3))
    return choices[randomNumber]
}


function getPlayerChoice() {
    const playerChoice = prompt("Rock, paper, scissors! Choose one: ").toLowerCase();
    return playerChoice
}

function playRound(playerSelection, computerSelection) {
    const combos = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]]

    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
    }  else {
        for (const i of combos) {
            if (playerSelection === i[0] && computerSelection ===  i[1]) {
                console.log(`You win! ${i[0]} beats ${i[1]}`)
                return "p"
            } else if (computerSelection === i[0] && playerSelection ===  i[1]) {
                console.log(`You lose! ${i[0]} beats ${i[1]}`)
                return "c"
            }
        }
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let round = 0; round < 5; round++) {
        console.log(`Current score: Player = ${playerScore} | Computer = ${computerScore}`)
        console.log(`Round ${round+1}!`)

        let currentRound = playRound(getPlayerChoice(), getComputerChoice())

        if (currentRound === "p") {
            playerScore++;
        } else if (currentRound === "c") {
            computerScore++;
        }
    }
    console.log(`Play again next time! Player = ${playerScore} | Computer = ${computerScore}`)
}


game()