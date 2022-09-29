var character = document.getElementById("character");
var obstacles = document.getElementById("obstacles");
var counter = 0;


document.addEventListener("click",jump);
function jump() {
    character.classList.add("movement");
    setTimeout(removeJump,300);
}

function removeJump() {
    character.classList.remove("movement")
}


var lost = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var obstacleLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
})