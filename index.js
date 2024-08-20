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

//-----score-information-----//

let score = 0;
let scoreCom = 0;

const scorePlayer = document.createElement('div');
scorePlayer.className = "Score-Player";

const scoreComputer = document.createElement('div');
scoreComputer.className = "Score-Computer";

const scorePlayerText = document.createElement('div');
scorePlayerText.className = "Score-Info";

const scoreComputerText = document.createElement('div');
scoreComputerText.className = "Score-Info-Computer";

const pointsPlayer = document.createElement('div');
pointsPlayer.className = "points";

scorePlayerText.innerHTML = `Player score: ${score}`;

const pointsComputer = document.createElement('div');
pointsComputer.className = "points";

scoreComputerText.innerHTML = `Computer score: ${scoreCom}`;

//-----win-lose-----//

const win = document.createElement('div');
win.className = "winScreen";
const lose = document.createElement('div');
lose.className = "loseScreen";

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

win.style.fontSize = "20px";
lose.style.fontSize = "20px";

//------body-tags------//

body.appendChild(win);
body.appendChild(lose);
body.appendChild(pointsPlayer);
body.appendChild(pointsComputer);
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
        if(scoreCom == 3) {
            lose.innerHTML = "You Lost:(";
        }
    }else {
        console.log('win');
        computerPlay.src = comScissor.src;
        score++;
        scorePlayerText.innerHTML = `Player score: ${score}`;
        if(score == 3) {
            win
        }
    }
}

function buttonPaper() {
    player.src = paper.src;

    const randomNum = Math.ceil(Math.random() * 3);

    if(randomNum == 1) {
        console.log('win');
        computerPlay.src = comRock.src;
        score++;
        scorePlayerText.innerHTML = `Player score: ${score}`;
    }else if(randomNum == 2) {
        console.log('tie');
        computerPlay.src = comPaper.src;
    }else {
        console.log('lose');
        computerPlay.src = comScissor.src;
        scoreCom++;
        scoreComputerText.innerHTML = `Computer score: ${scoreCom}`;
    }
}

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

btnRock.onclick = buttonRock;
btnPaper.onclick = buttonPaper;
btnScissor.onclick = buttonScissor;