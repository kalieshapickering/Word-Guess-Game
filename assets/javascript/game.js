//pop-up window letting user know to press any key to start
var startGame = alert("Press any key to start");

// wordbank, word options

var wordBank = ["rich the kid", "travis scott", "xxxtentacion", "young thug", "lil pump"];


//pick a random artist 
var getWord = function(wordBank){
return wordBank[Math.floor(Math.random() * wordBank.length)];
}
var randomArtist = getWord(wordBank);
console.log(randomArtist)


// correct letter guesses

var correctCharacter = [];


// # of guesses remaining


//letters already guessed
var wrongCharacter = [];

// win function


//pictures


//audio


//lose function

