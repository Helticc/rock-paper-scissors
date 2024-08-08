const body = document.getElementsByTagName('body')[0];

const rock = document.createElement('img');
const paper = document.createElement('img');
const scissor = document.createElement('img');
const comRock = document.createElement('img');
const comPaper = document.createElement('img');
const comScissor = document.createElement('img');

const btnRock = document.createElement('button');
btnRock.className = "rockBtn";
const btnPaper = document.createElement('button');
btnPaper.className = "paperBtn";
const btnScissor = document.createElement('button');
btnScissor.className = "scissorBtn";

const player = document.createElement('div');
player.className = "container";

body.appendChild(player);
body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissor);

function buttonRock() {
    player.appendChild(rock);
}
btnRock.onclick = buttonRock;

function buttonPaper() {
    player.appendChild(paper);
}
btnPaper.onclick = buttonPaper;

function buttonScissor() {
    player.appendChild(scissor);
}
btnScissor.onclick = buttonScissor;

rock.src = "https://png.pngtree.com/png-clipart/20220824/ourmid/pngtree-cartoon-rock-transparent-png-image_6122807.png";
rock.style.width = "100%";
paper.src = "paper.png";
paper.style.width = "100%";
scissor.src = "scissor.png";
scissor.style.width = "100%";

comRock.src = "https://png.pngtree.com/png-clipart/20220824/ourmid/pngtree-cartoon-rock-transparent-png-image_6122807.png";
comPaper.src = "paper.png";
comScissor.src = "scissor.png";
