//variables
var wins = 0;
var loses = 0;
var gamesPlayed = 0;
var lettersSelectedByUser =[];
//var richSong = document.createElement("richSong");
//richSong.setAttribute("src", "assets/images/Plug_Walk.mp3")

//var thugSong = document.createElement("thugSong");
//thugSong.setAttribute("src","assets/images/young-thug-with-that.mp3" )

//var travisSong = document.createElement("travisSong");
//travisSong.setAttribute("src","assets/images/travis-scott.mp3" );

//var pumpSong = document.createElement("pumpSong");
//pumpSong.setAttribute("src","assets/images/lilpump-what-u-say.mp3" );

//var xxxSong = document.createElement("xxxSong");
//xxxSong.setAttribute("src", "assets/images/young-thug-with-that.mp3");

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
            if(randomArtist === "richthekid"){
                document.getElementById('richSong').play();
                $("#image").html("assets/images/rich-the-kid.jpg");
            }
            if(randomArtist === "travisscott"){
                document.getElementById('travisSong').play();
                document.querySelector("#image").innerHTML =("assets/images/travis-scott.jpg");
                console.log(randomArtist);
            }
            if(randomArtist === "xxxtentacion"){
                document.getElementById('xxxSong').play();
                document.querySelector("#image").innerHTML= ("assets/images/xxxtentacion.jpg");
                console.log(randomArtist);
            }
            if(randomArtist === "youngthug"){
                document.getElementById('thugSong').play();
                $("#image").html("assets/images/young-thug.jpg");
                console.log(displayArtist);
            }
            if(randomArtist === "lilpump"){
                document.getElementById('pumpSong').play();
                $("#image").html("assets/images/lil-pump.jpg");
                console.log(displayArtist);
            }
            
        
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
