const rockImg = document.getElementById('rock-img');
const paperImg = document.getElementById('paper-img');
const scissorImg = document.getElementById('scissor-img');

const rockOne = document.createElement('img');
rockOne.src = 'rock.png';

const paperTwo = document.createElement('img');
paperTwo.src = 'paper.png';

const scissorThree = document.createElement('img');
scissorThree.src = 'scissor.png';

const rockO = document.createElement('img');
rockO.src = 'rock.png';

const paperTw = document.createElement('img');
paperTw.src = 'paper.png';

const scissorTh = document.createElement('img');
scissorTh.src = 'scissor.png';


const choiceIconDivOne = document.querySelector('.choice-icon-one');
const choiceIconDivTwo = document.querySelector('.choice-icon-two');

const qMarkImgOne = document.querySelector('.choice-icon-img-one');
const qMarkImgTwo = document.querySelector('.choice-icon-img-two');

const rockImgContainer = document.querySelector('.rock');
const paperImgContainer = document.querySelector('.paper');
const scissorImgContainer = document.querySelector('.scissor');


const resultText = document.querySelector('.two-h2-p');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');




let userWins = 0;
let computerWins = 0;



const rockClick = rockImgContainer.addEventListener('click', function() {
    choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
    choiceIconDivOne.appendChild(rockImg);
    rockImgContainer.appendChild(rockOne);
    let computerChoise = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoise);

    let userChoice = 'rock';

    if(computerChoise === 1){
        choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
        choiceIconDivTwo.appendChild(rockO);
        let computerRealChoice = 'rock'
        if(userChoice === computerRealChoice){
            resultText.firstElementChild.textContent = 'ITS A TIE.';
            resultText.lastElementChild.textContent = `${userChoice} ties with a ${computerRealChoice}`;



        }
    }
    else if(computerChoise === 2){
        choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
        choiceIconDivTwo.appendChild(paperTw);
        let computerRealChoice = 'paper'
        if(computerRealChoice){
            resultText.firstElementChild.textContent = 'COMPUTER WINS!';
            resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;

            computerScore.textContent = `Computer: ${++computerWins}`;

        }
    }
    else {
        choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
            choiceIconDivTwo.appendChild(scissorTh);
            let computerRealChoice = 'scissor'
            if(computerRealChoice){
                resultText.firstElementChild.textContent = 'YOU WIN!';
                resultText.lastElementChild.textContent = `${userChoice} WINS TO a ${computerRealChoice}`;
                

                playerScore.textContent = `Player: ${++userWins}`;
            }
    }
    
});



const paperClick = paperImgContainer.addEventListener('click', function() {
    choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
    choiceIconDivOne.appendChild(paperImg);
    paperImgContainer.appendChild(paperTwo);

    let computerChoise = Math.floor(Math.random() * 3) + 1;;
    console.log(computerChoise);
    let userChoice = 'paper';

    if(computerChoise === 1){
        choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
        choiceIconDivTwo.appendChild(rockO);
        let computerRealChoice = 'rock'

        resultText.firstElementChild.textContent = 'YOU WIN!';
        resultText.lastElementChild.textContent = `${userChoice} WINS TO a ${computerRealChoice}`;
        playerScore.textContent = `Player: ${++userWins}`;
    }
    else if(computerChoise === 2){
        choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
        choiceIconDivTwo.appendChild(paperTw);
        let computerRealChoice = 'paper'

        resultText.firstElementChild.textContent = 'ITS A TIE.';
            resultText.lastElementChild.textContent = `${userChoice} ties with a ${computerRealChoice}`;

    }
    else {
        choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
            choiceIconDivTwo.appendChild(scissorTh);
            let computerRealChoice = 'scissor'

            resultText.firstElementChild.textContent = 'COMPUTER WINS!';
            resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;

            computerScore.textContent = `Computer: ${++computerWins}`;
    }

    
});



const scissorClick = scissorImgContainer.addEventListener('click', function() {
    choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
    choiceIconDivOne.appendChild(scissorImg);
    scissorImgContainer.appendChild(scissorThree);

    let userChoice = 'scissor';

    let computerChoise = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoise);


    if(computerChoise === 1){
        choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
        choiceIconDivTwo.appendChild(rockO);
        let computerRealChoice = 'rock'

        resultText.firstElementChild.textContent = 'COMPUTER WINS!';
            resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;

            computerScore.textContent = `Computer: ${++computerWins}`;
    }
    else if(computerChoise === 2){
        choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
        choiceIconDivTwo.appendChild(paperTw);
        let computerRealChoice = 'paper';
        resultText.firstElementChild.textContent = 'YOU WIN!';
        resultText.lastElementChild.textContent = `${userChoice} WINS TO a ${computerRealChoice}`;
        playerScore.textContent = `Player: ${++userWins}`;


    }
    else {
        choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
            choiceIconDivTwo.appendChild(scissorTh);
            let computerRealChoice = 'scissor';

            resultText.firstElementChild.textContent = 'ITS A TIE.';
            resultText.lastElementChild.textContent = `${userChoice} ties with a ${computerRealChoice}`;
            
    }
    

});


























console.log("rockImg:", rockImg);
console.log(choiceIconDivOne.lastElementChild);
console.log("rockImgContainer:", rockImgContainer);

