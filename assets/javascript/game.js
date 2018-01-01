const wordList = ["Alduin", "Shenron", "Smaug", "Saphira", "Haku", "Mushu", "Puff", "Spyro", "Maleficent", "Toothless", "Godzilla", 
"Drogon", "Rhaegal", "Viserion", "Falkor", "Dragonite", "Gyrados"] 

var word;                //mystery word
var guess;               //user guess
var attempts;

var letters = [];        //underscores that change to correctly guessed letters
var wrongGuess = [];     // array for incorrect guesses
var wins = 0;
var losses = 0;


var wordBank = String.prototype.toUpperCase.apply(wordList).split(",");

function start() {
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    for (i = 0; i < word.length; i++) {
        letters[i] = "__";
    }
    attempts = 10;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("blanks").innerHTML = letters.join(" ");
    console.log(word);
    
    
}

function hangman() {
    document.onkeyup = function(event){
        if (!(event.which <= 90 && event.which >= 65)) return
        guess = event.key.toUpperCase();
        var found = false;
        for (i = 0; i < word.length; i++) {
            if (guess === word[i]) {
                letters[i] = guess;
                document.getElementById("blanks").innerHTML = letters.join(" ");
                found = true;
                           
        }
    }

    if (found && letters.join("") !== word) return;
    if (wrongGuess.indexOf(guess) < 0) {
        wrongGuess.push(guess);
        document.getElementById("wrong").innerHTML = wrongGuess.join(" ");
        attempts--;
        document.getElementById("lives").innerHTML = attempts;
    }

    if(attempts > 0 && letters.join("") === word){
        confirm("You Have Won! It was " + word.toUpperCase() + " Try Again?");{
        wins++;
        letters = [];
        wrongGuess = [];
        attempts= 10;
        start();   
        }
       
    }
    if(attempts === 0){
        alert("You Have Lost. It was " + word.toUpperCase() + " One More Go?");
        losses++;
        letters = [];
        wrongGuess = [];
        attempts= 10;
        start();
    }
 
}}


function pushStart(){

}

start();
hangman();
