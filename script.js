function computerPlay() {
    const weapons = ["rock", "paper", "scissors"]
    let ran = Math.floor(Math.random() * 10);
    for (let i=0; ran>=3;) {
        ran =  Math.floor(Math.random() * 10);
    }
    return weapons[ran];
}

const computerSelection = computerPlay();
const playerSelection = prompt("Enter your choice (Rock, Paper, Scissors)").toLowerCase();

function play(playerSelection, computerSelection) {

    if (playerSelection == "paper" && computerSelection == "rock")
    return "You Win!, Paper beats Rock";
    else if (playerSelection == "paper" && computerSelection == "paper")
    return "It's a draw! Play again";
    else if (playerSelection == "paper" && computerSelection == "scissors")
    return "Sorry you Lose! Scissors beats Paper";

    else if (playerSelection == "rock" && computerSelection == "scissors")
    return "You Win!, Rock beats Scissors";
    else if (playerSelection == "rock" && computerSelection == "rock")
    return "It's a draw! Play again";
    else if (playerSelection == "rock" && computerSelection == "paper")
    return "Sorry you Lose! Paper beats Rock";

    else if (playerSelection == "scissors" && computerSelection == "paper")
    return "You Win!, Scissors beats Paper";
    else if (playerSelection == "scissors" && computerSelection == "scissors")
    return "It's a draw! Play again";
    else if (playerSelection == "scissors" && computerSelection == "rock")
    return "Sorry you Lose! Rock beats Scissors";

    else
    return "Please enter your choice correctly."
}

console.log(console.log(play(playerSelection, computerSelection)));