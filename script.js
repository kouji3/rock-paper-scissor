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



const box = document.querySelector('.play-again');

const playAgainButton = document.getElementById('play-again-button');


const overLay = document.querySelector('.over-lay');
const btn = document.querySelector('#pop-up-btn');
const popUp = document.querySelector('.pop-up');

const winer = document.querySelector('.pop-up > h2');


const listOfHiddenElements = [overLay, popUp];


btn.addEventListener('click', () => {
        location.reload();
    });



let userWins = 0;
let computerWins = 0;



const rockClick = rockImgContainer.addEventListener('click', function() {
    
    let computerChoise = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoise);

    let userChoice = 'rock';

    if(computerChoise === 1){

        if(computerWins > 2 || userWins > 2){
           
            listOfHiddenElements.forEach(element => {
                element.style.visibility = 'visible';
            });

            overLay.addEventListener('click', () => {
                listOfHiddenElements.forEach(element => {
                    element.style.visibility = 'hidden';
                });
            });
            
            
        
        } else {
            choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
            choiceIconDivOne.appendChild(rockImg);
            rockImgContainer.appendChild(rockOne);

            choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
            choiceIconDivTwo.appendChild(rockO);
            let computerRealChoice = 'rock'
            if(userChoice === computerRealChoice){
                resultText.firstElementChild.textContent = 'ITS A TIE.';
                resultText.lastElementChild.textContent = `${userChoice} ties with a ${computerRealChoice}`;
                console.log("u: ", userWins, "  computer: ", computerWins);



        }
        }
        
    }
    else if(computerChoise === 2){
        ++computerWins;

        if(computerWins > 2 || userWins > 2){

            listOfHiddenElements.forEach(element => {
                element.style.visibility = 'visible';
             });

            overLay.addEventListener('click', () => {
                    listOfHiddenElements.forEach(element => {
                        element.style.visibility = 'hidden';
                    });
                });

            let computerRealChoice = 'paper'
            
            

                
           if(userWins > computerWins && userWins == 3) {
                winer.textContent = 'You won...';
                resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
    
                playerScore.textContent = `Player: ${userWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
    

           } 

           if(computerWins > userWins && computerWins == 3){
                winer.textContent = 'You lost...';
                resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
    
                computerScore.textContent = `Computer: ${computerWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
    

           }
        
        } else {
            choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
            choiceIconDivOne.appendChild(rockImg);
            rockImgContainer.appendChild(rockOne);

            choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
            choiceIconDivTwo.appendChild(paperTw);
            let computerRealChoice = 'paper'
            
            resultText.firstElementChild.textContent = 'COMPUTER WINS!';
            resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;

            computerScore.textContent = `Computer: ${computerWins}`;
            console.log("u: ", userWins, "  computer: ", computerWins);

            

        
        }
        
    }

    else {
        ++userWins;

        if(computerWins > 2 || userWins > 2){
            
                listOfHiddenElements.forEach(element => {
                    element.style.visibility = 'visible';
                });

                overLay.addEventListener('click', () => {
                    listOfHiddenElements.forEach(element => {
                        element.style.visibility = 'hidden';
                    });
                });

                let computerRealChoice = 'scissor'
            
                if(userWins > computerWins && userWins == 3) {
                    winer.textContent = 'You won...';
                    resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                    resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
        
                    playerScore.textContent = `Player: ${userWins}`;
                    console.log("u: ", userWins, "  computer: ", computerWins);
        
    
               } 
    
               if(computerWins > userWins && computerWins == 3){
                    winer.textContent = 'You lost...';
                    resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                    resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
        
                    computerScore.textContent = `Computer: ${computerWins}`;
                    console.log("u: ", userWins, "  computer: ", computerWins);
        
    
               }
            
           
            
        
        } else {
            choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
            choiceIconDivOne.appendChild(rockImg);
            rockImgContainer.appendChild(rockOne);

            choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
            choiceIconDivTwo.appendChild(scissorTh);
            let computerRealChoice = 'scissor'
            
            resultText.firstElementChild.textContent = 'YOU WIN!';
            resultText.lastElementChild.textContent = `${userChoice} WINS TO a ${computerRealChoice}`;
            

            playerScore.textContent = `Player: ${userWins}`;
            console.log("u: ", userWins, "  computer: ", computerWins);

                
            

        }
        
    }
    
});



const paperClick = paperImgContainer.addEventListener('click', function() {
   

    let computerChoise = Math.floor(Math.random() * 3) + 1;;
    console.log(computerChoise);
    let userChoice = 'paper';

    if(computerChoise === 1){
        ++userWins;

        if(computerWins > 2 || userWins > 2){
            
            listOfHiddenElements.forEach(element => {
                element.style.visibility = 'visible';
            });

            overLay.addEventListener('click', () => {
                listOfHiddenElements.forEach(element => {
                    element.style.visibility = 'hidden';
                });
            });

            
            let computerRealChoice = 'rock'

            if(userWins > computerWins && userWins == 3) {
                winer.textContent = 'You won...';
                resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
    
                playerScore.textContent = `Player: ${userWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
    

           } 

           if(computerWins > userWins && computerWins == 3){
                winer.textContent = 'You lost...';
                resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
    
                computerScore.textContent = `Computer: ${computerWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
    

           }
        
    
    } else {
            choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
            choiceIconDivOne.appendChild(paperImg);
            paperImgContainer.appendChild(paperTwo);

            choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
            choiceIconDivTwo.appendChild(rockO);
            let computerRealChoice = 'rock'

            resultText.firstElementChild.textContent = 'YOU WIN!';
            resultText.lastElementChild.textContent = `${userChoice} WINS TO a ${computerRealChoice}`;
            playerScore.textContent = `Player: ${userWins}`;
            console.log("u: ", userWins, "  computer: ", computerWins);
        }
        


        
    }
    
    else if(computerChoise === 2){
        if(computerWins > 2 || userWins > 2){
            
            listOfHiddenElements.forEach(element => {
                element.style.visibility = 'visible';
            });

            overLay.addEventListener('click', () => {
                listOfHiddenElements.forEach(element => {
                    element.style.visibility = 'hidden';
                });
            });

    } else {
            choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
            choiceIconDivOne.appendChild(paperImg);
            paperImgContainer.appendChild(paperTwo);

            choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
            choiceIconDivTwo.appendChild(paperTw);
            let computerRealChoice = 'paper'
    
            resultText.firstElementChild.textContent = 'ITS A TIE.';
                resultText.lastElementChild.textContent = `${userChoice} ties with a ${computerRealChoice}`;
                console.log("u: ", userWins, "  computer: ", computerWins);

        }
       

    }
    else {
        ++computerWins;

        if(computerWins > 2 || userWins > 2){
            
            listOfHiddenElements.forEach(element => {
                element.style.visibility = 'visible';
            });

            overLay.addEventListener('click', () => {
                listOfHiddenElements.forEach(element => {
                    element.style.visibility = 'hidden';
                });
            });

            let computerRealChoice = 'scissor'

            if(userWins > computerWins && userWins == 3) {
                winer.textContent = 'You won...';
                resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
    
                playerScore.textContent = `Player: ${userWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
    

           } 

           if(computerWins > userWins && computerWins == 3){
                winer.textContent = 'You lost...';
                resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
    
                computerScore.textContent = `Computer: ${computerWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
    

           }
       
        
    
    } else {
            choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
            choiceIconDivOne.appendChild(paperImg);
            paperImgContainer.appendChild(paperTwo);

            choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
            choiceIconDivTwo.appendChild(scissorTh);
            let computerRealChoice = 'scissor'

            resultText.firstElementChild.textContent = 'COMPUTER WINS!';
            resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;

            computerScore.textContent = `Computer: ${computerWins}`;
            console.log("u: ", userWins, "  computer: ", computerWins);
        }
            
            
    }

    
});



const scissorClick = scissorImgContainer.addEventListener('click', function() {
   

    let userChoice = 'scissor';

    let computerChoise = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoise);


    if(computerChoise === 1){
        ++computerWins;

        if(computerWins > 2 || userWins > 2){
            
            listOfHiddenElements.forEach(element => {
                element.style.visibility = 'visible';
            });

            overLay.addEventListener('click', () => {
                listOfHiddenElements.forEach(element => {
                    element.style.visibility = 'hidden';
                });
            });

            
            let computerRealChoice = 'rock'

            if(userWins > computerWins && userWins == 3) {
                winer.textContent = 'You won...';
                resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
    
                playerScore.textContent = `Player: ${userWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
    

           } 

           if(computerWins > userWins && computerWins == 3){
                winer.textContent = 'You lost...';
                resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
    
                computerScore.textContent = `Computer: ${computerWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
    

           }
        
    
    } else {
            choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
            choiceIconDivOne.appendChild(scissorImg);
            scissorImgContainer.appendChild(scissorThree);

            choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
            choiceIconDivTwo.appendChild(rockO);
            let computerRealChoice = 'rock'

            resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;

                computerScore.textContent = `Computer: ${computerWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
        }
       

            
    }
    else if(computerChoise === 2){
        
        ++userWins;
        if(computerWins > 2 || userWins > 2){
            
            listOfHiddenElements.forEach(element => {
                element.style.visibility = 'visible';
            });

            overLay.addEventListener('click', () => {
                listOfHiddenElements.forEach(element => {
                    element.style.visibility = 'hidden';
                });
            });

            let computerRealChoice = 'paper';
            if(userWins > computerWins && userWins == 3) {
                winer.textContent = 'You won...';
                resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
    
                playerScore.textContent = `Player: ${userWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
    

           } 

           if(computerWins > userWins && computerWins == 3){
                winer.textContent = 'You lost...';
                resultText.firstElementChild.textContent = 'COMPUTER WINS!';
                resultText.lastElementChild.textContent = `${userChoice} LOSES TO a ${computerRealChoice}`;
    
                computerScore.textContent = `Computer: ${computerWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
    

           }
       
        
    
    } else {
                choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
                choiceIconDivOne.appendChild(scissorImg);
                scissorImgContainer.appendChild(scissorThree);

                choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
                choiceIconDivTwo.appendChild(paperTw);
                let computerRealChoice = 'paper';
                resultText.firstElementChild.textContent = 'YOU WIN!';
                resultText.lastElementChild.textContent = `${userChoice} WINS TO a ${computerRealChoice}`;
                playerScore.textContent = `Player: ${userWins}`;
                console.log("u: ", userWins, "  computer: ", computerWins);
            }


    }
    else {

        if(computerWins > 2 || userWins > 2){
            
            listOfHiddenElements.forEach(element => {
                element.style.visibility = 'visible';
            });

            overLay.addEventListener('click', () => {
                listOfHiddenElements.forEach(element => {
                    element.style.visibility = 'hidden';
                });
            });

            

        
       
        
    
    } else {
            choiceIconDivOne.removeChild(choiceIconDivOne.firstElementChild);
            choiceIconDivOne.appendChild(scissorImg);
            scissorImgContainer.appendChild(scissorThree);


            choiceIconDivTwo.removeChild(choiceIconDivTwo.firstElementChild);
            choiceIconDivTwo.appendChild(scissorTh);
            let computerRealChoice = 'scissor';

            resultText.firstElementChild.textContent = 'ITS A TIE.';
            resultText.lastElementChild.textContent = `${userChoice} ties with a ${computerRealChoice}`;

            console.log("u: ", userWins, "  computer: ", computerWins);

        }
        
            
    }
    

});

