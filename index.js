const body = document.getElementsByTagName('body')[0];

const rock = document.createElement('img');
const paper = document.createElement('img');
const scissor = document.createElement('img');
const comRock = document.createElement('img');
const comPaper = document.createElement('img');
const comScissor = document.createElement('img');

//-----buttons-rock-paper-scissors-----//

const btnRock = document.createElement('button');
btnRock.className = "rockBtn";
const btnPaper = document.createElement('button');
btnPaper.className = "paperBtn";
const btnScissor = document.createElement('button');
btnScissor.className = "scissorBtn";

//-----losing/winning-screen-----//
const win = document.createElement('div');
win.className = "win";
const lost = document.createElement('div');
lost.className = "lost";

//-----score-information-----//

let score = 0;
let scoreCom = 0;

const scorePlayer = document.createElement('div');
scorePlayer.className = "Score-Player";

const scoreComputer = document.createElement('div');
scoreComputer.className = "Score-Computer";

const scorePlayerText = document.createElement('div');
scorePlayerText.className = "Score-Info";

scorePlayerText.innerHTML = `Player score: ${score}`;

const scoreComputerText = document.createElement('div');
scoreComputerText.className = "Score-Info-Computer";

scoreComputerText.innerHTML = `Computer score: ${scoreCom}`;

//-----container-box-----//

const player = document.createElement('img');
player.className = "container";

const computerPlay = document.createElement('img');
computerPlay.className = "container-pc";

//-------elements-style-------//

rock.src = "https://png.pngtree.com/png-clipart/20220824/ourmid/pngtree-cartoon-rock-transparent-png-image_6122807.png";
rock.style.width = "100%";
paper.src = "paper.png";
paper.style.width = "100%";
scissor.src = "scissor.png";
scissor.style.width = "100%";

comRock.src = "https://png.pngtree.com/png-clipart/20220824/ourmid/pngtree-cartoon-rock-transparent-png-image_6122807.png";
comRock.style.width = "100%";
comPaper.src = "paper.png";
comPaper.style.width = "100%";
comScissor.src = "scissor.png";
comScissor.style.width = "100%";

//------body-tags------//

body.appendChild(scorePlayer);
body.appendChild(scoreComputer);
body.appendChild(scorePlayerText);
body.appendChild(scoreComputerText);
body.appendChild(computerPlay);
body.appendChild(player);
body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissor);

function buttonRock() {
    player.src = rock.src;

    const randomNum = Math.ceil(Math.random() * 3);

    if(randomNum == 1) {
        console.log('tie');
        computerPlay.src = comRock.src;
    }else if(randomNum == 2) {
        console.log('lose');
        computerPlay.src = comPaper.src;
        scoreCom++;
        scoreComputerText.innerHTML = `Computer score: ${scoreCom}`;
        body.appendChild(lost);
    }else {
        console.log('win');
        computerPlay.src = comScissor.src;
        score++;
        scorePlayerText.innerHTML = `Player score: ${score}`;
        body.appendChild(win);
    }


}

btnRock.onclick = buttonRock;

function buttonPaper() {
    player.src = paper.src;

    const randomNum = Math.ceil(Math.random() * 3);

    if(randomNum == 1) {
        console.log('win');
        computerPlay.src = comRock.src;
        score++;
        scorePlayerText.innerHTML = `Player score: ${score}`;
        if(score == 3) {
            body.innerHTML = "YOU WIN!!!";
        }
    }else if(randomNum == 2) {
        console.log('tie');
        computerPlay.src = comPaper.src;
    }else {
        console.log('lose');
        computerPlay.src = comScissor.src;
        scoreCom++;
        scoreComputerText.innerHTML = `Computer score: ${scoreCom}`;
        if(scoreCom == 3) {
        }
    }
}

btnPaper.onclick = buttonPaper;

function buttonScissor() {
    player.src = scissor.src;

    const randomNum = Math.ceil(Math.random() * 3);

    if(randomNum == 1) {
        console.log('lose');
        computerPlay.src = comRock.src;
        scoreCom++;
        scoreComputerText.innerHTML = `Computer score: ${scoreCom}`;
    }else if(randomNum == 2) {
        console.log('win');
        computerPlay.src = comPaper.src;
        score++;
        scorePlayerText.innerHTML = `Player score: ${score}`;
    }else {
        console.log('tie');
        computerPlay.src = comScissor.src;
    }
}

btnScissor.onclick = buttonScissor;

//--------------------//

// const body = document.getElementsByTagName('body')[0];
// const paper = document.createElement('img');
// const rock = document.createElement('img');
// const scissor = document.createElement('img');


// const box = document.createElement('div');
// box.style.height = "300px";
// box.style.width = "300px";
// box.style.overflow = "hidden";
// body.appendChild(box);

// const button = document.createElement('button');
// button.innerHTML = "START";
// button.style.position = "absolute";
// button.style.top = "350px";
// button.style.left = "350px";
// body.appendChild(button);

// paper.src = 'paper.png';
// paper.style.height = "300px";
// paper.style.width = "300px";
// rock.src = 'rock.png';
// rock.style.height = "300px";
// rock.style.width = "300px";
// scissor.src = 'scissor.png';
// scissor.style.height = "300px";
// scissor.style.width = "300px";

// function RPS() {
//     const randomNum = Math.ceil(Math.random() * 3);

//     if(randomNum === 1) {
//         box.appendChild(paper);
//     }else if(randomNum === 2) {
//         box.appendChild(rock);
//     }else if(randomNum === 3) {
//         box.appendChild(scissor);
//     }
// }

// button.onclick = RPS;