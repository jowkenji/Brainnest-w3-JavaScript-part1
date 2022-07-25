function computerPlay() {
    let randomPlay = Math.random()*3;
    if (randomPlay <= 1) {
        return 'rock';
    } else if (randomPlay > 1 && randomPlay <= 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playerPlay() {
    let playerSelection = prompt('Enter your play (Rock, Paper or Scissors): ');
    playerSelection = playerSelection.toLowerCase();
    while (playerSelection != 'rock' && 
           playerSelection != 'paper' && 
           playerSelection != 'scissors') {
        playerSelection = prompt('You typed incorrectly. Please try again: Rock, Paper or Scissors: ');
    }
    return playerSelection
}

function playRound(playerSelection, computerSelection) {
    console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}`);
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats Rock'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats Paper'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats Rock'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats Scissors'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats Paper'
    } else if (playerSelection == computerSelection) {
        return 'Draw!'
    }
}

function game() {
    let playerPoint = 0;
    let computerPoint = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerPlay(), computerPlay());
        console.log(result);
        if (result.slice(0,5) == 'You w') {
            playerPoint++;
        } else if (result.slice(0,5) == 'You l') {
            computerPoint++;
        }
    }
    if (playerPoint > computerPoint) {
        return `You won the game by ${playerPoint} to ${computerPoint}`
    } else if (playerPoint < computerPoint) {
        return `You lost the game by ${computerPoint} to ${playerPoint}`
    } else {
        return `It's a draw! ${playerPoint} - ${computerPoint}`
    }
}