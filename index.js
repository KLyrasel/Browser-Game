var character = document.getElementById("character");
var obstacles = document.getElementById("obstacles");
//declares our variables 

document.addEventListener("click",jump);
function jump() {
    character.classList.add("movement");
    setTimeout(removeJump,300);
}
//allows us to jump when clicking but times it out so it isn't constant
function removeJump() {
    character.classList.remove("movement")
}
//remove jump keeps us from jumping when we are just sliding 

var lost = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var obstacleLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
//this will figure out if and where the character is hitting the obstacles by finding the values of the certain sides
//then below we will make an if statement alerting us if the character hits those values that we have died and restarting the game
if(obstacleLeft<20 && obstacleLeft>0 && characterTop>=130){
    document.getElementById("loss").innerHTML = "YOU DIED. SCORE: "
}
else{("movement")}
})

