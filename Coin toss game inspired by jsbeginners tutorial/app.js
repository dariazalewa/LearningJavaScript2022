const buttons = document.querySelectorAll('button');
let Orzeł = 1;
let Reszka = 0;
let userScore = 0;
let computerScore = 0;

function displaySelections(user, computer){
    const playerSelection = document.querySelector('#player-selection');
    const computerSelection = document.querySelector('#computer-selection');
    if (user === 'Orzeł'){
        playerSelection.style.color = '#ed490c';
    }
    if (user === 'Reszka'){
        playerSelection.style.color = '#afbd4a';
    }
    if (computer === 'Orzeł'){
        computerSelection.style.color = '#ed490c';
    }
    if (computer === 'Reszka'){
        computerSelection.style.color = '#afbd4a';
    }
    playerSelection.innerHTML = `${user}`;
    computerSelection.innerHTML = `${computer}`
}

function displayRandom(random){
    const displayResult = document.querySelector('#image');
    console.log(random);
    
        if (random === 1){
            displayResult.style.backgroundImage =  "url('heads.png')";
            
        } else {
            displayResult.style.backgroundImage =  "url('tails.png')";
        }    
}

function tallyScore(random, userPick, computerPick){
    const playerDisplay = document.querySelector('#player-score');
    const computerDisplay = document.querySelector('#computer-score');
    const winner = document.querySelector('#winner');

    if (userPick === random){
        userScore++;
    }
    if (computerPick === random){
        computerScore++;
    }
    playerDisplay.textContent = `${userScore}`;
    computerDisplay.textContent = `${computerScore}`;
    
    if (userScore === 5 && computerScore === 5){
        winner.innerHTML = `<h2>Remis!!!</h2>`;
    } else if (userScore === 5){
        winner.innerHTML = `<h2>Wygrałeś!!!</h2>`;
    } else if (computerScore === 5){
        winner.innerHTML = `<h2>Wygrywa komputer!!!</h2>`;
    }
}

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        const random = Math.round(Math.random());
        const computerPick = Math.round(Math.random());
        let computerSelection;
        if (computerPick === 1){
            computerSelection = 'Orzeł';
        } else {
            computerSelection = 'Reszka';
        }
        const spin = document.querySelector('#image');
        spin.classList.add('animate');

        const userSelection = e.target.id;
        let userPick;

        if (userSelection === 'Orzeł'){
            userPick = 1;
        } else if (userSelection === 'Reszka'){
            userPick = 0;
        }

        displaySelections(userSelection, computerSelection);
        displayRandom(random);

        setTimeout(function(){
            tallyScore(random, userPick, computerPick);
            document.querySelector('#image').classList.remove('animate');
        }, 2000);
    })
})