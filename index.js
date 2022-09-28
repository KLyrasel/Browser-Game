// 1. make a word bank that players can't see (DONE)
// 2. have the game choose a random word
// 3. have the players input compared to the word the game has chosen 
// 4. show amount of "lives" left if incorrect guess or have correct letters shown 
// 5. show win or lose 
// 6. give option to reset the game and try again 


//wordbank 
 var wordBank = [
    "cat",
    "dog",
    "mouse",
    "cheese",
    "food",
    "hungry",
    "scurries",
    "sneaky",
    "kazoo",
    "discovered",
    "kitchen",
    "games",
    "winner",
    "difficult",
    "easy"
    ]
 
var randomWord = wordBank[Math.floor(Math.random()*wordBank.length)]

for (var i = 0; i < wordBank.length; i++) {
    answerArray[i] = "_";
}

    
    






