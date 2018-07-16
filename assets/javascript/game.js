//game score starts at 0
var score = 0;

// wordbank, word options

var wordBank = ["rich the kid", "travis scott", "xxxtentacion", "young thug", "lil pump"];

//functions of the word guess game render a new question, update score, play music on correct guess, update letters already guess, update reaming guesses

// render a new question
 function renderQuestion(){
     if (workBankIndex <= (wordBank.length -1)){
         document.querySelector("#randomArtist").innerHTML = randomArtist;
        // if there is no more options 
     }else{

     } 
 }

 //pick a random artist 
var getWord = function(wordBank){
    return wordBank[Math.floor(Math.random() * wordBank.length)];
    }
    var randomArtist = getWord(wordBank);
 // update score
    function updateScore() {
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#lose").innerHMTL = loses;
    }
 //change photo in jumobtron
    function artistPhoto(){
        document.querySelector("#image").innerHTML = ("imageLocation?");
    }

//correct character update
var correctCharacter = [];
// change letters guessed
var wrongCharacter = [];
//change guesses remaining


//remove selected word from rotation



// start of game
renderQuestion();
updateScore();

//playing the game
document.onkeyup = function ( event){
    var userGuess = event.key.toLowerCase();

    if (userGuess )
    // game display next question
randomArtist++;
renderQuestion();

}






