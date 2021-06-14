const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissor');
const mainDiv = document.querySelector('.choices');
const wrapperDiv = document.querySelector('.wrapper');
const resetDiv = document.querySelector(".reset")
const choices = ['rock','paper','scissor'];

const scoreDataBase = {
'rock': {'rock':0.5,'paper':0,'scissor':1},
'paper': {'rock':1,'paper':0.5,'scissor':0},
'scissor': {'rock':0,'paper':1,'scissor':0.5}
}

const imageDataBase = {
'rock':rock.src,
'paper':paper.src,
'scissor':scissors.src
}


function rpsG(choice) {
const yourChoice = choice.id;
const botChoice = botSelection();
const gameScore = score(yourChoice,botChoice);
const finalMessage = gameMessage(gameScore);
const removeImages = removeChoices();
const frontEndFunc = frontEnd(yourChoice,botChoice,finalMessage);
}

function botSelection() {
const random = Math.floor(Math.random()*3);
return choices[random];
}

function score(yourChoice,botChoice){
return scoreDataBase[yourChoice][botChoice];
}

function gameMessage (gameScore) {
let result;
switch(gameScore) {
case 1:
result = {message:"You Won!",color:"green"};
break;
case 0.5:
result = {message:"You Tied",color:'blue'};
break;
case 0:
result = {message:'You Lost!',color:'red'};
break;
default:
result = "GameScore undefined"
}
return result;
}

function removeChoices(){
rock.remove();
paper.remove();
scissor.remove();
}

function frontEnd(yourChoice,botChoice,finalMessage) {
mainDiv.innerHTML = `<img class='results' id="yourChoice" src="${imageDataBase[yourChoice]}" alt="${yourChoice}" width="100px" height="100px"/><h2 class='results' style="color:${finalMessage['color']}">${finalMessage['message']}</h2><img class='results' id="botChoice" src="${imageDataBase[botChoice]}" alt="${botChoice}" width="100px" height="100px"/>`;
resetDiv.innerHTML = `<button onclick="restart()">Restart</button>`;
}

function restart(){
location.reload();
}

