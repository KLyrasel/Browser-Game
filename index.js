//1.Define variables
//2.Define counter
//3.Add click jump event
//4.Create function so that jump event can repeat instead of stopping after one jump
//Find parameters of the pumpkin and the ghost
//Make an if statement saying if the ghost and pumpkin collide with each other, the game is over


//defines my variables
var ghost = document.getElementById("ghost");
var pump = document.getElementById("pumpkin");
var score = document.getElementById("points")
//creating counter 
let counter = 0;

//adding a click event to get ghost to jump
document.addEventListener("click", jump);
function jump() {
    ghost.classList.add("movement");
    setTimeout(removeJump,300);
    counter++;
}

//making counter go up by 1 each second and displaying it without an alert
function scorecount(){
    counter = counter + 1;
    score.innerText = "Score: " + counter;
}

var infinite = setInterval(scorecount, 100);
//removejump function so that you can jump more than once
function removeJump() {
    ghost.classList.remove("movement")
}
//collision check every 10 ms comparing the side of the pumpkin and the ghost jump to see if they collide, then ending game if they do 
let collison = setInterval(function(){
    let ghostTop = parseInt(window.getComputedStyle(ghost).getPropertyValue("top"));
    console.log(ghostTop);
    let pumpkinLeft = parseInt(window.getComputedStyle(pump).getPropertyValue("left"));
if ( ghostTop >= 150 && pumpkinLeft < 50 && pumpkinLeft > 0 ) {
    alert("GAME OVER");
    counter = 0;
} },10 )