var dictionary = ["decker","cyberdyne","replicant"];
var guesses;
var word;
var solution;
var inWord;
var alreadyGuessed;
var chances;
var isLetter;
var correctGuesses;
var hangmanArt=["......<span class='text-art'>OOO</span>......<br>.....<span class='text-art'>OOOOO</span>.....<br>......<span class='text-art'>OOO</span>......<br>....<span class='text-art'>==I.I==</span>....<br>...<span class='text-art'>//|***|\\\\</span>...<br>.<span class='text-art'>mm/.|***|.\\\\mm</span><br>.....<span class='text-art'>/===\\</span>.....<br>....<span class='text-art'>/ / \\ \\</span>....<br>....<span class='text-art'>| | | |</span>....<br>...<span class='text-art'><__| |__></span>...<br>",
"......<span class='text-art'>OOO</span>......<br>.....<span class='text-art'>OOOOO</span>.....<br>......<span class='text-art'>OOO</span>......<br>....<span class='text-art'>==I.I==</span>....<br>...<span class='text-art'>//|***|\\\\</span>...<br>.<span class='text-art'>mm/.|***|.\\\\mm</span><br>.....<span class='text-art'>/===\\</span>.....<br>....<span class='text-art'>/ /</span>........<br>....<span class='text-art'>| |</span>........<br>...<span class='text-art'><__|</span>........<br>",
"......<span class='text-art'>OOO</span>......<br>.....<span class='text-art'>OOOOO</span>.....<br>......<span class='text-art'>OOO</span>......<br>....<span class='text-art'>==I.I==</span>....<br>...<span class='text-art'>//|***|\\\\</span>...<br>.<span class='text-art'>mm/.|***|.\\\\mm</span><br>..........<span class='text-art'></span>.....<br>........<span class='text-art'></span>.......<br>.......<span class='text-art'></span>........<br>.......<span class='text-art'></span>........<br>",
"......<span class='text-art'>OOO</span>......<br>.....<span class='text-art'>OOOOO</span>.....<br>......<span class='text-art'>OOO</span>......<br>....<span class='text-art'>==I.I==</span>....<br>...<span class='text-art'>//|***|</span>.....<br>.<span class='text-art'>mm/.|***|</span>.....<br>..........<span class='text-art'></span>.....<br>.......<span class='text-art'></span>........<br>.......<span class='text-art'></span>........<br>.......<span class='text-art'></span>........<br>",
"......<span class='text-art'>OOO</span>......<br>.....<span class='text-art'>OOOOO</span>.....<br>......<span class='text-art'>OOO</span>......<br>....<span class='text-art'>==I.I==</span>....<br>..........<span class='text-art'></span>.....<br>..........<span class='text-art'></span>.....<br>..........<span class='text-art'></span>.....<br>.......<span class='text-art'></span>........<br>.......<span class='text-art'></span>........<br>.......<span class='text-art'></span>........<br>",
"......<span class='text-art'></span>.........<br>..........<span class='text-art'></span>.....<br>.........<span class='text-art'></span>......<br>...........<span class='text-art'></span>....<br>..........<span class='text-art'></span>.....<br>..........<span class='text-art'></span>.....<br>..........<span class='text-art'></span>.....<br>.......<span class='text-art'></span>........<br>.......<span class='text-art'></span>........<br>.......<span class='text-art'></span>........<br>"
];

function newGame(){
	word = dictionary[Math.floor(Math.random()*dictionary.length)];
	guesses = [];
	solution = [];
	for (i = 0; i < word.length; i++)
	{
		solution.push("_");
	}
	chances = 5;
	correctGuesses = 0;
	drawScreen();
};

function checkLetter(letter){
    inWord = false;
    alreadyGuessed = false;

    for (i=0; i<guesses.length; i++)
    {
         if (letter.toUpperCase() == guesses[i]){
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

        if (!inWord){
        chances -=1;
        }
    }

  
};

function drawScreen(){
	$("#guessed").html(guesses);
	$("#word").html(solution);
	$("footer").html("chances remaining: ".toUpperCase()+chances);
	$("#hangman-pic").html(hangmanArt[chances]);
}

$(document).ready(function(){
 newGame();
 document.onkeyup = function(event) {
  	console.log(event.keyCode);
  	if(64<event.keyCode && event.keyCode<91){
        checkLetter(event.key);
    }
    drawScreen();
    
    if (chances < 1){
    	$("#hangman-pic").html(hangmanArt[0]);
    	alert("Game over!\nThe word was "+word.toUpperCase());
       	newGame();
    }
    else if (correctGuesses == word.length){
    	$("#word").html(solution);
    	alert("You win!\nThe word was "+word.toUpperCase());
       	newGame();
    }
   
 };


});