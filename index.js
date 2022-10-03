//1.Define variables
//2.Define counter
//3.Add click jump event
//4.Create function so that jump event can repeat instead of stopping after one jump
//Find parameters of the pumpkin and the ghost
//Make an if statement saying if the ghost and pumpkin collide with each other, the game is over and display the number of successful jumps 
//Display loss and score with innerHTML
//Get game to speed up after certain amount of time 
var character = document.getElementById("ghost");
var obstacles = document.getElementById("pumpkin");
var score = document.getElementById("points")

let counter = 0;

document.addEventListener("click", jump);
function jump() {
    character.classList.add("movement");
    setTimeout(removeJump,300);
    counter++;
}


function scorecount(){
    counter = counter + 1;
    score.innerText = "Score: " + counter;
}

var infinite = setInterval(scorecount, 100);

function removeJump() {
    character.classList.remove("movement")
}


var ghostTop = parseIntwindow.getComputedStyle(ghost).getComputedStyle("top");
var ghostLeft = parseIntwindow.getComputedStyle(pumpkin).getComputedStyle("left");

if( ghostTop >= 130 && pumpkinLeft < 20 && pumpkinLeft > -20){
    alert("you lose");
}
