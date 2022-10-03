//1.Define variables
//2.Define counter
//3.Add click jump event
//4.Create function so that jump event can repeat instead of stopping after one jump
//Find parameters of the pumpkin and the cat
//Make an if statement saying if the cat and pumpkin collide with each other, the game is over and display the number of successful jumps 
//Display loss and score with innerHTML
var character = document.getElementById("cat");
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


var catTop = parseIntwindow.getComputedStyle(cat).getComputedStyle("top");
var pumpkinLeft = parseIntwindow.getComputedStyle(pumpkin).getComputedStyle("left");

if( catTop >= 150 && pumpkinLeft < 50 && pumpkinLeft > -50){
    document.getElementById("loss").innerHTML = " YOU LOSE "
}
