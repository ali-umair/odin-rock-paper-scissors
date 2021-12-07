function computerPlay() {
    const weapons = ["rock", "paper", "scissors"]
    let ran = Math.floor(Math.random() * 10);
    for (let i=0; ran>=3;) {
        ran =  Math.floor(Math.random() * 10);
    }
    return weapons[ran];
}

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = button.getAttribute('value')
        const computerSelection = computerPlay();
        const playerSelection = value;
        // console.log(playerSelection);
        //  console.log(play(playerSelection,computerSelection));
        const result = document.createElement('p');
        result.textContent = play(playerSelection,computerSelection);
        body.appendChild(result);
    })
})

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

// console.log(console.log(play(playerSelection, computerSelection)));