function computerPlay() {
    randomPlay = Math.random()*3;
    if (randomPlay <= 1){
        return 'Rock';
    } else if (randomPlay > 1 && randomPlay <= 2){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playerPlay() {
    playerSelection = prompt('Enter your play: ');
    while (playerSelection.toLowerCase() != 'rock' && 
           playerSelection.toLowerCase() != 'paper' && 
           playerSelection.toLowerCase() != 'scissors') {
        playerSelection = prompt('You typed correcty (Rock, Paper or Scissors): ');
    }
    return playerSelection
}

function playRound(playerSelection, computerSelection) {
    console.log(`You selected ${playerSelection}`);
    console.log(`Computer selected ${computerSelection}`);
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
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
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.slice(0,5) == 'You w') {
            playerPoint++;
        } else if (result.slice(0,5) == 'You l') {
            computerPoint++;
        } else if (result.slice(0,5) == 'Draw') {
            playerPoint +0;
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

console.log(game());