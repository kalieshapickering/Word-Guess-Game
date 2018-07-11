//pop-up window letting user know to press any key to start
var startAlert = alert("Press any key to start");

// wordbank

var wordBank = ["rich the kid", "travis scott", "xxxtentacion", "young thug", "lil pump"];
//pictures

//pick a random artist
var word = wordBank[Math.floor(Math.random() * wordBank.length)];

//audio

this.richTheKidAudio = new Audio(),
this.travisScotAudio = new Audio(),
this.xxxtentacionAudio = new Audio(),
this.youngThugAudio = new Audio(),
this.lilPumpAudio = new Audio(),



// word to guess


// # of guesses remaining


//letters already guessed


// win function

function(){

        this.playSound("richTheKidAudio");
}

//lose function

 function(){
    this.msgTitle.html("You have failed the Trap Gods");
    this.msgText.html("Try your luck again!")
}
