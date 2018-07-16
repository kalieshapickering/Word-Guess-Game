//game score starts at 0
var wins = 0;
var loses = 0;
var gamesPlayed = 0;

// wordbank, word options

var wordBank = [
"rich the kid",
"travis scott", 
"xxxtentacion",
"young thug", 
"lil pump"
];

//functions of the word guess game render a new question, update score, play music on correct guess, update letters already guess, update reaming guesses, updates score

// render a new question
 function renderQuestion(){
     if (randonArtist <= (wordBank.length -1)){
         document.querySelector("#randomArtist").innerHTML = randomArtist;
        // if there is no more options 
     }else{

     } 
 }

 //pick a random artist 
var getWord = function(wordBank){
    return wordBank[Math.floor(Math.random() * wordBank.length)];
    }
    var randomArtist = getWord();
    var displayArtist = [];
    var lettersSelectedByUser =[];

//update letter choice with "_"
    for(i=0; i < randomArtist.length; i++){
        displayArtist.push(randomArtist[i].replace(randomArtist[i],"_"));
    }
 // update score
    function updateScore() {
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#lose").innerHMTL = loses;
    }
 //change photo in jumobtron
    function artistPhoto(){
        document.querySelector("#image").innerHTML = ("imageLocation?");
    }

//correct characters
var correctCharacter = [];

// letters guessed
var wrongCharacter = [];

//change guesses remaining
var maxCount = 12;
var count = 0;
var guessesLeft = maxCount - count;
document.querySelector("#guessesLeft").innerHTML = guessesLeft;


//remove selected word from rotation



// start of game
renderQuestion();
updateScore();

//playing the game
document.onkeyup = function ( event){
    var userGuess = event.key.toLowerCase();
    var guessLeft = maxCount - count;
document.querySelector("guessesLeft").innerHTML = guessesLeft;
function checkForWinner(){
    if (displayArtist.randomArtist("_") !== -1){
        if (count === maxCount){
            //lose
        }
    }
    if (displayArtist.randomArtist("_") === -1){
        //win
    }
}
   //correct character
   if(userGuess){
       if(count !== maxCount){
        for(i=0; i < randomArtist.length; i++){
            if (userGuess === randomArtist.charAt(i)){
                count++
                guessesLeft--
                document.querySelector("#guessesLeft").innerHTML = guessesLeft;
                document.querySelector("#guessesOutcome").innerHTML = "Correct!";
                displayArtist[i] = userGuess;
                document.querySelector("#displayArtist").innerHTML = displayArtist.join("_");
                checkForWinner();
            }
       }
       //wrong character
       if (randomArtist.indexOf(userGuess) === -1){
           count++;
           guessesLeft --;
           lettersSelectedByUser.push(userGuess);
           document.querySelector("#alreadyGuessed").innerHTML = wrongCharacter.join("_");
           document.querySelector("#guessesLeft").innerHTML = guessesLeft;
           document.querySelector("#guessesOutcome").innerHTML = "Wrong!";
          
           checkForWinner();
       }
   }

    
    // game display next question
    RandomArtist++;
    renderQuestion();
    gamesPlayed++;

}
}






