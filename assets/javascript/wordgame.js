//variables
var wins = 0;
var loses = 0;
var gamesPlayed = 0;
var lettersSelectedByUser =[];

 //word choices
var wordBank = [
    "richthekid",
    "travisscott", 
    "xxxtentacion",
    "youngthug", 
    "lilpump"
    ];
 
 //once the page fully loads...
window.onload=(function() {

//update score 
function updateScore(){
    $("#wins").text(wins);
    $("#loses").text(loses);
}

// randmonize questions and render one
    var wordBankIndex = Math.floor(Math.random() * wordBank.length);
    var randomArtist = wordBank[wordBankIndex];
    var chosenArtist = randomArtist.slice();
    var displayArtist = [];
    for(i=0; i < chosenArtist.length; i++){
       displayArtist.push(chosenArtist[i].replace(chosenArtist[i],"_"));
    }
    document.querySelector("#displayArtist").innerHTML = displayArtist.join(" ");
    
     console.log("Guess what, the answer is " + chosenArtist + " ;)");

     //guesses left
var maxCount = 15;
var count = 0;
var guessesLeft = maxCount - count;
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
            //win
            $("#guessOutcome").html("You Win!");
            //update picture
            
        
    }
    if (displayArtist.indexOf("_") !== -1){
        if (count === maxCount){
        //lose
        $("#guessOutcome").html("You Lose!");
    }}
}

//start of game
document.onkeyup = function(event) {
     var userGuess = event.key.toLowerCase();

if (lettersSelectedByUser.indexOf(userGuess)>= 0){
    return 

}
    if(count !== maxCount){
        for (var i=0; i<randomArtist.length; i++){
            //guess is right
            if(userGuess === randomArtist.charAt(i)){
                count++;
                $("#guessesLeft").html(guessesLeft);
                $("#guessesOutcome").text("Correct!");
                displayArtist[i] = userGuess;
                console.log(displayArtist[i]);
                $("#displayArtist").html(displayArtist.join(" "));
                updateScore(); 
                checkForWinner();
                
        }
    }
    //guess is wrong
    if (randomArtist.indexOf(userGuess) === -1){
        count++;
        guessesLeft --;
        lettersSelectedByUser.push(userGuess);
        $("#wrongCharacter").html(lettersSelectedByUser.join());
        $("#guessesLeft").html(guessesLeft);
        $("#guessesOutcome").text("Wrong!");
        updateScore();
        checkForWinner();
        console.log(lettersSelectedByUser);
    }
    }
}
 // game display next question
 chosenArtist++;
 renderQuestion();
 gamesPlayed++;

//closing tag of game
 });

