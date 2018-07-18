//variables
var wins = 0;
var loses = 0;
var gamesPlayed = 0;
var lettersSelectedByUser =[];

 //word choices
var wordBank = [
    "rich the kid",
    "travis scott", 
    "xxxtentacion",
    "young thug", 
    "lil pump"
    ];
 
 //once the page fully loads...
window.onload=(function() {

//update score 
function updateScore(){
    $("#wins").text(wins);
    $("#loses").text(loses);
}


    var wordBankIndex = Math.floor(Math.random() * wordBank.length);
    var randomArtist = wordBank[wordBankIndex];
    var chosenArtist = randomArtist.slice("");
    var displayArtist = [];
    for(i=0; i < chosenArtist.length; i++){
       displayArtist.push(chosenArtist[i].replace(chosenArtist[i],"_"));
    }
    document.querySelector("#displayArtist").outerHTML = displayArtist.join(" ");
    
     console.log("Guess what, the answer is " + chosenArtist + " ;)");

     //guesses left
var maxCount = 12;
var count = 0;
var guessesleft = maxCount - count;
$("#guessesLeft").html(guessesLeft);
console.log(guessesLeft);

// next question
function renderQuestion(){
  if( wordBank <=(wordBank.length -1)){
      $("#displayArtrist").hmtl(chosenArtist);
  }else{
    checkForWinner();
  }

}

// check to see if you win or lose
function checkForWinner(){
    if (displayArtist.indexOf("_") === -1){
        if (count === maxCount){
            //win
            $("#guessOutcome").html("You Win!");
        }
    }
    if (displayArtist.indexOf("_") !== -1){
        //lose
        $("#guessOutcome").html("You Lose!");
    }
}

//start of game
document.onkeyup = function(event) {
     var userGuess = event.key.toLowerCase();
    if(count !== maxCount){
        for (var i=0; i<randomArtist.length; i++){
            //guess is right
            if(userGuess === randomArtist.charAt(i)){
                count++;
                guessesLeft--;
                $("#guessesLeft").html(guessesLeft);
                $("#guessesOutcome").html("Correct!");
                displayArtist[i] = userGuess;
                $("#displayArtist").html(displayArtist.join(""));
                updateScore(); 
                checkForWinner();
        }
    }
    //guess is wrong
    if (randomArtist.indexOf(userGuess) === -1){
        count++;
        guessesLeft --;
        lettersSelectedByUser.push(userGuess);
        $("#alreadyGuessed").html(lettersSelectedByUser.join());
        $("#guessesLeft").html(guessesLeft);
        $("#guessesOutcome").html("Wrong!");
        updateScore();
        checkForWinner();
    }
    }
}
 // game display next question
 chosenArtist++;
 renderQuestion();
 gamesPlayed++;

//closing tag of game
 });

