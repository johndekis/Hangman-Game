//attempt to organize into object
/*const wordBank = ["Alduin", "Shenron", "Smaug", "Saphira", "Haku", "Mushu", "Puff", "Spyro", "Maleficent", "Toothless", "Godzilla", 
"Drogon", "Rhaegal", "Viserion", "Falkor"]  // word bank
var underScoreArray = [];  //letter blanks
var badGuess = [];    // wrong answers
var count; //attempts
var wins = 0;
var randomWord; // word to buess
var losses;
var guess; //user guess

//var wordList = String.prototype.toUpperCase.apply(wordBank).split(",");


function hangman(){
    
    document.addEventListener("keyup", function(){
        
        
    });
    
    console.log(underScoreArray);
    count = 1;
    
    for(i = 0; i < 5; i++){
        if(count > 0){
              
        document.addEventListener("keyup", function(){
            var keyword = String.fromCharCode(event.which);  //gets the code for key pressed and converts it to a string    
            if(randomWord.indexOf(keyword) > -1){ //if key pressed matches letter from randomWord at any index (CORRECT GUESS) 
                
                //goodGuess.push(keyword);
                underScoreArray[randomWord.indexOf(keyword)] = keyword;//change underscore to the letter pressed
                count++;
                console.log(keyword);
                
            } else if(randomWord.indexOf(keyword) < 0){
                console.log(keyword);
                //badGuess.push(keyword);
                //document.getElementById("wrong").innerHTML(badGuess);
                count++;
            }}); 
        }
    }
}

function start() {
    // generate chosen word
    randomWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    console.log(randomWord); 
    for(var i = 0; i < randomWord.length; i++){
    
        underScoreArray.push("_");
    }
    document.getElementById("blanks").innerHTML = underScoreArray.join(" ");
   console.log(underScoreArray);
    hangman();
    
     }
function pushStart(){
    document.addEventListener("keyup", function(){
        document.getElementById("blanks").innerHTML = "";
        count = 0;
        start();
        //console.log(start());
       // hangman();
    })}


pushStart();
     
//push any key to start
//document.addEventListener("keyup", hangman()); */

var wordList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function start() {
    word = wordList[Math.floor(Math.random() * wordList.length)];

    for (i = 0; i < word.length; i++) {
        letters[i] = "__";
    }

    document.getElementById("answer").innerHTML = letters.join(" ");
    console.log(word);
}

//main game function
function game() {

    document.onkeyup = function (event) {

        guess = event.key;

        var hangmanPicture = document.getElementById("HangmanImg");

        for (i = 0; i < word.length; i++) {
            if (guess === word[i]) {
                letters[i] = guess;
                document.getElementById("answer").innerHTML = letters.join(" ");

            }
        }
    }
}
        start();
        game();