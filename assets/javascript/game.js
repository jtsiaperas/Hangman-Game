var dictionary = ["decker","cyberdyne","replicant"];
var guesses;
var word;
var solution;
var inWord;
var alreadyGuessed;
var chances;
var isLetter;
var correctGuesses;

function newGame(){
	word = dictionary[Math.floor(Math.random()*dictionary.length)];
	guesses = [];
	solution = [];
	for (i = 0; i < word.length; i++)
	{
		solution.push("_");
	}
	chances = 6;
	correctGuesses = 0;
	drawScreen();
};

function checkLetter(letter){
    inWord = false;
    alreadyGuessed = false;

    for (i=0; i<guesses.length; i++)
    {
         if (letter == guesses[i]){
         	alreadyGuessed = true;
         }
    }
    
    if (!alreadyGuessed){
        
        guesses.push(letter.toUpperCase());
        for (i=0; i<word.length; i++){
    	    if (letter == word[i]){
    		    inWord = true;
    		    solution[i]=letter.toUpperCase();
    		    correctGuesses += 1;
    	        }
        }
    }
};

function drawScreen(){
	$("#guessed").text(guesses);
	$("#word").text(solution);
	$("footer").text(chances + " guesses remaining!");
}

$(document).ready(function(){
 newGame();
 document.onkeyup = function(event) {
  	console.log(event.keyCode);
  	if(64<event.keyCode && event.keyCode<91){
        checkLetter(event.key);
        if (!inWord){
        chances -=1;
        }
    }
    drawScreen();
    if (chances <= 0 || correctGuesses == word.length){
    	newGame();
    }
   
 };


});