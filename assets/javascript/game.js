var dictionary = ["decker","cyberdyne","replicant"];
var guessed;
var word;
var solution;
var inWord;
var chances;

function newGame(){
	word = dictionary[Math.floor(Math.random()*dictionary.length)];
	guessed = [];
	solution = [];
	for (i = 0; i < word.length; i++)
	{
		solution.push("_");
	}
	chances = 6;
	drawScreen();
};

function checkLetter(letter){
    inWord = false;
    for (i=0; i<word.length; i++){
    	if (letter == word[i]){
    		inWord = true;
    		solution[i]=letter.toUpperCase();
    	}
    }
};

function drawScreen(){
	$("#guessed").text(guessed);
	$("#word").text(solution);
	$("footer").text(chances + " guesses remaining!");
}

$(document).ready(function(){
 newGame();
 document.onkeyup = function(event) {
  	guessed.push(event.key.toUpperCase());
    checkLetter(event.key);
    if (!inWord){
        chances -=1;
    }
    if (chances <= 0){
    	newGame();
    }
    drawScreen();
 };


});