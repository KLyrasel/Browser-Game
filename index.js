//1.Define variables
//2.Define counter
//3.Add click jump event
//4.Create function so that jump event can repeat instead of stopping after one jump
//Find parameters of the pumpkin and the ghost
//Make an if statement saying if the ghost and pumpkin collide with each other, the game is over

var ghost = document.getElementById("ghost");
var pump = document.getElementById("pumpkin");
var score = document.getElementById("points")

let counter = 0;

document.addEventListener("click", jump);
function jump() {
    ghost.classList.add("movement");
    setTimeout(removeJump,300);
    counter++;
}


function scorecount(){
    counter = counter + 1;
    score.innerText = "Score: " + counter;
}

var infinite = setInterval(scorecount, 100);

function removeJump() {
    ghost.classList.remove("movement")
}

let collison = setInterval(function(){
    let ghostTop = parseInt(window.getComputedStyle(ghost).getPropertyValue("top"));
    console.log(ghostTop);
    let pumpkinLeft = parseInt(window.getComputedStyle(pump).getPropertyValue("left"));
if ( ghostTop >= 150 && pumpkinLeft < 50 && pumpkinLeft > 0 ) {
    alert("Game over");
} },10 )