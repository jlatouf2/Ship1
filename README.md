1) create level
2) add more enemies
3) add pause screen
4) Fix start screen
5)Learn state change for animation


1) Add movement controls
2) Add shoot
3) Add enaemy
4) Add Colision for  top of level and bottom of level

5) Get movement for 2dbox objects.

//in the Step() function
  //cancel gravity for body 1 only
  //bodies[1]->ApplyForce( bodies[1]->GetMass() * -m_world->GetGravity(), bodies[1]->GetWorldCenter() );

switch(e.keyCode) {
  case 38: // UP
  var force = new b2Vec2(0, -10);
    carGame.car.ApplyForce(force, carGame.car.GetWorldCenter());
  //	carGame.car.SetLinearVelocity(new b2Vec2(0,-100));
    //carGame.car.ApplyForce(carGame.car.GetMass() * -carGame.world.GetGravity(), carGame.car.GetWorldCenter() );
    //		var gravity = new b2Vec2(0, 10);

  //	carGame.car.ApplyForce(carGame.car.GetMass() * -carGame.car.GetGravity(), carGame.car.GetWorldCenter() );
    //		carGame.car = createCarAt(50, 210);
    //THIS IS USED TO CREATE CAR IN MAIN GAME function

//	carGame.paddleC.directionY = -1;
//	carGame.paddleC.y += 25 * carGame.paddleC.directionY;


    console.log('UP');
    return false;
    break;

    case 40: //  DOWN
      var force = new b2Vec2(-150, 0);
      carGame.car.ApplyForce(force, carGame.car.GetWorldCenter());


    //	carGame.paddleC.directionY = 1;
    //	carGame.paddleC.y += 25 * carGame.paddleC.directionY;
      console.log('DOWN');
      return false;
      break;
    case 39: // RIGHT
  //	carGame.paddleC.directionX = 1;

  var force = new b2Vec2(0, 150);
    carGame.car.ApplyForce(force, carGame.car.GetWorldCenter());

/*
    //apply gradual force upwards
    bodies[0]->ApplyForce( b2Vec2(0,50), bodies[0]->GetWorldCenter() );
    break;
  case 'w':
    //apply immediate force upwards
    bodies[1]->ApplyLinearImpulse( b2Vec2(0,50), bodies[1]->GetWorldCenter() );

    //Box2D v2.2.1 onwards
    body->SetGravityScale(0);//cancel gravity (use -1 to reverse gravity, etc)
    carGame.car.GetWorldCenter(0);
    //in the Step() function
      //cancel gravity for body 1 only
      bodies[1]->ApplyForce( bodies[1]->GetMass() * -m_world->GetGravity(), bodies[1]->GetWorldCenter() );
*/


//	carGame.paddleC.directionX = 1;
//		carGame.paddleC.x += carGame.paddleC.speed * carGame.paddleC.directionX;
    console.log('RIGHT');
      return false;
      break;
    case 37: // LEFT
    carGame.paddleC.directionX = -1;
    carGame.paddleC.x += carGame.paddleC.speed * carGame.paddleC.directionX;
    console.log('LEFT');
      return false;
      break;

    case 32: // SPACEBAR
    fireMissile();
    console.log('SPACE');
    return false;
      break;


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
