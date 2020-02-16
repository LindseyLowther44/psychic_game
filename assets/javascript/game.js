const choices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let wins = 1;
let loss = 1;
let lettersUsed= [];
let guessRemaining = 10;
let computerGuess;
let letterIndex;


document.onkeyup = function (event){
    var playerGuess = event.key;
    

    if (playerGuess === computerGuess) {
        document.getElementById('wins').innerHTML = "<p>Wins:" + wins++ + "</p>";    
        alert("You win!")
        reset()
    } else {
        guessRemaining--;
        console.log("next guess!");
        console.log(lettersUsed);
        document.getElementById("remainingGuesses").innerHTML = "<p>Guesses Remaining: " +guessRemaining + "</p>";
        lettersUsed.push(playerGuess);
        document.getElementById("lettersUsed").innerHTML = "<p>Letters Guessed:" + lettersUsed.join(', ') + "</p>";
        playerGuess.innerHTML = lettersUsed.join(',');
    }
    if (guessRemaining <= 0){
        document.getElementById("losses").innerHTML ="<p>Loss:" + loss++ + "</p>";
        guessRemaining = 10;
        lettersUsed = [];
        reset()
    }
    
}


function reset () {
    guessRemaining = 10;
    lettersUsed =[]; 
    computerGuess = choices[letterIndex];
    letterIndex = Math.floor(Math.random() * choices.length)
    computerGuess = choices[letterIndex];
}

reset()