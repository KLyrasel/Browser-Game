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

let counter = 0;

document.addEventListener("click", jump);
function jump() {
    character.classList.add("movement");
    setTimeout(removeJump,300);
    counter++;
}
function removeJump() {
    character.classList.remove("movement")
}


var ghostTop = parseIntwindow.getComputedStyle(ghost).getComputedStyle("top");
var ghostLeft = parseIntwindow.getComputedStyle(pumpkin).getComputedStyle("left");

if( ghostTop >= 325 && pumpkinLeft < 50 && pumpkinLeft > 0){
    alert("you lose");
}
