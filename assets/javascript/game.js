const choices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let wins = 0;
let loss = 0;
let lettersUsed= [];
let guessRemaining = 7;
let computerGuess;
let letterIndex;

document.onkeyup = function (event){
    var playerGuess = event.key;
    

    if (playerGuess === computerGuess) {
        wins++;
        document.getElementsByClassName('wins').innerHTML = wins;    
        alert("You win!")
        reset()
    } else {
        guessRemaining--;
        console.log("next guess!");
        document.getElementsByClassName('guessesLeft').innerHTML = loss;
        document.getElementsByClassName('guess-Sofar').innerHTML = lettersUsed;
        console.log(lettersUsed);
    }
    if (guessRemaining <= 0) {
        loss++;
        document.getElementsByClassName()
        guessRemaining = 7;
        lettersUsed = [];
    }
}

function reset () {
    guessRemaining = 7;
    lettersUsed =[]; 
    computerGuess = choices[letterIndex];
    letterIndex = Math.floor(Math.random() * choices.length)
    computerGuess = choices[letterIndex];
    console.log(computerGuess)
}

reset()