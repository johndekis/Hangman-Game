const wordList = ["Alduin", "Shenron", "Smaug", "Saphira", "Haku", "Mushu", "Puff", "Spyro", "Maleficent", "Toothless", "Godzilla", 
"Drogon", "Rhaegal", "Viserion", "Falkor", "Dragonite", "Gyrados"] 

var word;                //mystery word
var guess;               //user guess
var attempts;             // limited number of tries

var letters = [];        //underscores that change to correctly guessed letters
var wrongGuess = [];     // array for incorrect guesses
var wins = 0;           //wins and losses start at zero
var losses = 0;

//audio
var soundtrack = new Audio("assets/audio/soundtrack.mp3")
var victory = new Audio("assets/audio/victory-roar.mp3");
var incinerate = new Audio("assets/audio/incinerate.mp3");

//takes all words from wordList and makes them uppercase by applying the toUppercase property to the string prototype
var wordBank = String.prototype.toUpperCase.apply(wordList).split(","); 


//function to generate random word from word bank and clear arrays
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


//main game
    function hangman() {
        soundtrack.loop = true;
        soundtrack.play();

    document.onkeyup = function(event){
        if (!(event.which <= 90 && event.which >= 65)) return //restricts game to only letter keys
        guess = event.key.toUpperCase();
        var found = false;
        for (i = 0; i < word.length; i++) {
            if (guess === word[i]) {
                letters[i] = guess;
                document.getElementById("blanks").innerHTML = letters.join(" ");
                found = true; 
                           
        }
    }

//uses found variable to return the function after a correct guess instead of looping over all blanks looking for guess
    if (found && letters.join("") !== word) return; 
    
//if guess is wrong, push the wrong guess to the wrongGuess array and display    
    if (wrongGuess.indexOf(guess) < 0) {
        wrongGuess.push(guess);
        document.getElementById("wrong").innerHTML = wrongGuess.join(" ");
        attempts--;
        document.getElementById("lives").innerHTML = attempts;
    }
//victory conditions
    if(attempts > 0 && letters.join("") === word){
        victory.play();
        confirm("You Have Won! It was " + word.toUpperCase() + " Try Again?");{
        wins++;
        letters = [];
        wrongGuess = [];
        attempts= 10;
        start();   
        }
       
    }
//defeat conditions
    if(attempts === 0){
        incinerate.play();
        alert("You Disrespected " + word.toUpperCase() + " and have been incinerated. Play Again?");
        losses++;
        letters = [];
        wrongGuess = [];
        attempts= 10;
        start();
    }
 
}}

//function to hold start and game functions and initialize them on first key up event
function pushStart(){
    document.onkeyup = function(event){
        document.getElementById("initialize").innerHTML = "The Trial has Begun!";
        start();
        hangman();
    }
}
//calling the beginning function
pushStart();