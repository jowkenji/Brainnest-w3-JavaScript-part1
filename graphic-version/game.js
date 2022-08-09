function computerPlay() {
    let randomPlay = Math.random()*3;
    if (randomPlay <= 1) {
        computerMove.removeChild(computerMove.lastChild);

        let image1 = document.createElement('img');
        const attr = document.createAttribute('src');
        attr.value = "./images/rock-right.png";
        image1.setAttributeNode(attr);
        computerMove.appendChild(image1);
        
        return 'rock';
    } else if (randomPlay > 1 && randomPlay <= 2) {
        computerMove.removeChild(computerMove.lastChild);

        let image1 = document.createElement('img');
        const attr = document.createAttribute('src');
        attr.value = "./images/paper-right.png";
        image1.setAttributeNode(attr);
        computerMove.appendChild(image1);
        
        return 'paper';
    } else {
        computerMove.removeChild(computerMove.lastChild);

        let image1 = document.createElement('img');
        const attr = document.createAttribute('src');
        attr.value = "./images/scissors-right.png";
        image1.setAttributeNode(attr);
        computerMove.appendChild(image1);
        
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    document.getElementById('play1').style.visibility = "visible";
    document.getElementById('play2').style.visibility = "visible";
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
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Tie! You both selected Scissors'
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'Tie! You both selected Paper'
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Tie! You both selected Rock'
    }
}


function partialResult(result) {
    if (result.slice(0,5) == 'You w') {
        playerPoint++;
        console.log(`Player ${playerPoint} - ${computerPoint} Computer`);
    } else if (result.slice(0,5) == 'You l') {
        computerPoint++;
        console.log(`Player ${playerPoint} - ${computerPoint} Computer`);
    } else if (result.slice(0,5) == 'Tie! ') {
        console.log(`Player ${playerPoint} - ${computerPoint} Computer`);
    }
    roundResult.textContent = `${result}`;
    round.textContent = `Round ${roundNumber}`;
    if (roundNumber >= 5) {
        if (playerPoint > computerPoint) {
            let finalMessage = `You won the game by ${playerPoint} to ${computerPoint}`;
            round.textContent = finalMessage;
        } else if (playerPoint < computerPoint) {
            let finalMessage =`You lost the game by ${computerPoint} to ${playerPoint}`;
            round.textContent = finalMessage;
        } else {
            let finalMessage = `It's a draw! ${playerPoint} - ${computerPoint}`;
            round.textContent = finalMessage;
        }
    }
}

const start = document.querySelector('.start');
const logo = document.querySelector('.logo');
const round = document.querySelector('#round');
const roundContainer = document.querySelector('#roundContainer');
const h1 = document.querySelector('h1');
const initial = document.querySelector('.initial');
const roundResult = document.querySelector('.roundResult');
const optionPaper = document.querySelector('#paper');
const optionRock = document.querySelector('#rock');
const optionScissors = document.querySelector('#scissors');
const command = document.querySelector('.command');
const playerPlay = document.querySelector('.playerPlay');
const computerMove = document.querySelector('.computerPlay');
const main = document.querySelector('main');
let playerSelection;
let result;
let roundNumber;
let playerPoint;
let computerPoint;
let landmark = 0;

start.addEventListener('click', () => {  // apaga a tela inicial e inicia a tela de jogo (placar, round, opções)
    if (landmark == 0) {
        console.log('Inicio!');
        playerPoint = 0;
        computerPoint = 0;
        roundNumber = 1;

        document.getElementById('main').style.visibility = "visible";
        round.textContent = `Round ${roundNumber}`;
        start.textContent = `Reset`;
        roundResult.textContent = ``;
        
        computerMove.removeChild(computerMove.lastChild);
        playerPlay.removeChild(playerPlay.lastChild);
        landmark = 1;
    } else {
        start.textContent = `Start`;
        document.getElementById('play1').style.visibility = "hidden";
        document.getElementById('play2').style.visibility = "hidden";
        document.getElementById('main').style.visibility = "hidden";
        landmark = 0;
    }
})

optionPaper.addEventListener('click', () => { // aciona a jogada com papel
    if (roundNumber < 6) {
        playerSelection = 'paper';
        result = playRound(playerSelection, computerPlay());
        partialResult(result);
        roundNumber++;

        playerPlay.removeChild(playerPlay.lastChild);

        let image = document.createElement('img');
        const attr = document.createAttribute('src');
        attr.value = "./images/paper-left.png";
        image.setAttributeNode(attr);
        playerPlay.appendChild(image);
    }
})

optionRock.addEventListener('click', () => { // aciona a jogada com pedra
    if (roundNumber < 6) {
        playerSelection = 'rock';
        result = playRound(playerSelection, computerPlay());
        partialResult(result);
        roundNumber++;
        
        playerPlay.removeChild(playerPlay.lastChild);

        let image = document.createElement('img');
        const attr = document.createAttribute('src');
        attr.value = "./images/rock-left.png";
        image.setAttributeNode(attr);
        playerPlay.appendChild(image);
    }
})

optionScissors.addEventListener('click', () => { // aciona a jogada com tesoura
    if (roundNumber < 6) {
        playerSelection = 'scissors';
        result = playRound(playerSelection, computerPlay());
        partialResult(result);
        roundNumber++;

        playerPlay.removeChild(playerPlay.lastChild);

        let image = document.createElement('img');
        const attr = document.createAttribute('src');
        attr.value = "./images/scissors-left.png";
        image.setAttributeNode(attr);
        playerPlay.appendChild(image);
    }
})
