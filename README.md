'use strict';

//The input and output fields
var input = document.querySelector("#input");
var output = document.querySelector("#output");

 var inputValue;
var outputValue;
//Game variables
var mysteryNumber = 50;
var playersGuess = 0;

var guessesRemaining = 10;
var guessesMade = 0;
var gameState = "";

function change()
{
    document.getElementById("myButton1").value="Close Curtain";
    console.log('blue');
}

function changeColor() {
  document.getElementById("demo").style.color = "red";
}

function changeText() {
  document.getElementById("id2").innerHTML = "Blueman";
}

function guess() {
  document.getElementById("myText").value = "Johnny Bravo";
}


function guess2() {

inputValue = document.getElementById("field2");
outputValue = document.getElementById('noText');

playersGuess = parseInt(inputValue.value);

guessesRemaining--;
guessesMade ++;
gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;


  //Try 10 times
  if (inputValue.value == "") {
    console.log("please enter text!");
    outputValue.innerHTML = "Please enter text!" +gameState;
    //displays warning if no text
    setTimeout(function () {
    outputValue.innerHTML= "";
  }, 3000);
} else if (playersGuess > mysteryNumber){
    outputValue.innerHTML= "Number too high, try again!" +gameState;
} else if (playersGuess < mysteryNumber) {
      outputValue.innerHTML= "Number too low, try again!" +gameState;
} else if (playersGuess == mysteryNumber){
    outputValue.innerHTML= "Well Done!";

} else {
    outputValue.innerHTML= "Invalid Output!";
}

  console.log(document.getElementById("field2").value);

/*
  //document.getElementById("field2").value;
  if (inputValue.value == "") {
    console.log("please enter text!");
    outputValue.innerHTML = "Please enter text!";
    //displays warning if no text
    setTimeout(function () {
    outputValue.innerHTML= "";
  }, 3000);
} else if (playersGuess > mysteryNumber){
    outputValue.innerHTML= "Number too high, try again!";
} else if (playersGuess < mysteryNumber) {
      outputValue.innerHTML= "Number too low, try again!";
} else {
    outputValue.innerHTML= "Well Done!";

}

  console.log(document.getElementById("field2").value);
  */
}





<!doctype html>
<html>
<head>
<title>Pacmania</title>
<!--<link rel="stylesheet" href="styles.css">  -->

</head>
<body>
<h1>Pac-man</h1>
  <script src="b.js"></script>
  <!--<link rel="stylesheet" href="styles.css">

  <input onclick="change()" type="button" value="Open Curtain" id="myButton1"></input>
  <p id="demo" onclick="changeColor()">Click me to change my color.</p>
  <p id="id2" >Click button to change text!.</p>
  <input onclick="changeText()" type="button" value="Change Text" id="myButton2"></input>
 -->
  <!-- You will not be able to see this text. -->
  <button onclick="guess()" id="myButton3">Try it!</button>

  <input type="text" id="myText"  >


  <p>Guess The Number 10 Times!.</p>

  <!-- You will not be able to see this text. -->
  <button onclick="guess2()" id="myButton4">Guess Number!</button> <br>

  <input type="text" id="field2" autofocus>

  <p>Guess The Number!.</p>

  <p id="noText"></p>

</body>
</html>
