
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
    const firstPair = [playerSelection, computerSelection]
    const secondPair = [computerSelection, playerSelection]
    
    const combos = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]]

    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
        return 0
    }  else {
        for (const i of combos) {
            if (firstPair[0] === i[0] && firstPair[1] ===  i[1]) {
                console.log(`You win! ${i[0]} beats ${i[1]}`)
                return "p"
            } else if (secondPair[0] === i[0] && secondPair[1] ===  i[1]) {
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
    console.log(`Play again next tim! Player = ${playerScore} | Computer = ${computerScore}`)
}

game()