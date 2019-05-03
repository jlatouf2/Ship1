'use strict';
(function($){

  // data definition
  var pingpong = {
    scoreA : 0,  // score for player A
    scoreB : 0,  // score for player B

    paddleA: {
      speed: 5,

      x: 50,
      y: 100,
      width: 20,
      height: 70,
      directionX: 1,
      directionY: 1

    },
    paddleB: {
      speed: 5,

      x: 120,
      y: 100,
      width: 20,
      height: 70,
      directionX: 1,
      directionY: 1
//CAN CHANGE DIRECTION BY MAKING DIRECTIONX= -1;
    },
    playground: {
      offsetTop: $("#playground").offset().top,
      height: parseInt($("#playground").height()),
      width: parseInt($("#playground").width()),
     },
    ball: {
      speed: 5,
      x: 150,
      y: 100,
      radius: 20,
      directionX: 1,
      directionY: 1
    },


  };




  // ball collision logic
  function ballHitsTopBottom() {
    var y = pingpong.ball.y + pingpong.ball.speed * pingpong.ball.directionY;
    return y < 0 || y > pingpong.playground.height;
  }

  function ballHitsRightWall() {
    return pingpong.ball.x + pingpong.ball.speed * pingpong.ball.directionX > pingpong.playground.width;
  }
  function ballHitsLeftWall() {
    return pingpong.ball.x + pingpong.ball.speed * pingpong.ball.directionX < 0;
  }


  function playerhitsleftwall() {
    return pingpong.ball.x + pingpong.ball.speed * pingpong.ball.directionX < 0;
  }

  // ball movement logic
  function moveBall() {
    // reference useful varaibles
    var ball = pingpong.ball;

    // check playground top/bottom boundary
    if (ballHitsTopBottom()) {
      // reverse direction
      ball.directionY *= -1;
    }

    // check right
    if (ballHitsRightWall()) {
      playerAWin();
    }
    // check left
    if (ballHitsLeftWall()) {
      playerBWin();
    }

    // check paddles here

    // update the ball position data
    ball.x += ball.speed * ball.directionX;
    ball.y += ball.speed * ball.directionY;
  }

  //USED TO MOVE SHIP AND PLAYER IN CORRECT DIRECTIONS
  function moveShip() {
    var paddleA = pingpong.paddleA;
    var paddleB= pingpong.paddleB;


    // update the ball position data
    paddleA.x += paddleA.speed * paddleA.directionX;
  //  paddleA.y += paddleA.speed * paddleA.directionY;
  paddleB.x += paddleB.speed * paddleB.directionX;
   //paddleB.y += paddleB.speed * paddleB.directionY;

  // paddleB.directionY *= -1;

  //USED TO REINSTATIATE PLAYER AFTER GOES TO LEFT OFF SCREEN
    if (playerhitsleftwall()) {
      var paddleB= pingpong.paddleB;
        paddleB.x = 120;
        paddleB.y = 100;


    }

  }



  // winning logic
  function playerAWin() {
    // reset the ball;
    pingpong.ball.x = 250;
    pingpong.ball.y = 100;

    // update the ball location variables;
    pingpong.ball.directionX = -1;

    /*
    // player B lost.
    pingpong.scoreA += 1;
    $("#score-a").text(pingpong.scoreA);
    */
  }

  function playerBWin() {
    // reset the ball;
    pingpong.ball.x = 150;
    pingpong.ball.y = 100;

    pingpong.ball.directionX = 1;

    /*
    // player A lost.
    pingpong.scoreB += 1;
    $("#score-b").text(pingpong.scoreB);
        */
  }

  // view rendering
  function renderPaddles() {
    $("#paddleB").css("top", pingpong.paddleB.y);
    $("#paddleA").css("top", pingpong.paddleA.y);
  }

  function renderBall() {
    var ball = pingpong.ball;
    $("#ball").css({
      "left" : ball.x + ball.speed * ball.directionX,
      "top" : ball.y + ball.speed * ball.directionY
    });
  }

  //USED TO RENDER SHIP AND PLAYER IN CORRECT DIRECTIONS
  function renderShip() {
    var paddleA = pingpong.paddleA;
    $("#paddleA").css({
      "left" : paddleA.x + paddleA.speed * paddleA.directionX,
      "top" : paddleA.y + paddleA.speed * paddleA.directionY
    });

    var paddleB = pingpong.paddleB;
    $("#paddleB").css({
      "right" : paddleB.x + paddleB.speed * paddleB.directionX,
      "top" : paddleB.y + paddleB.speed * paddleB.directionY
    });

  }



  // view inputs
  function handleMouseInputs() {
    // run the game when mouse moves in the playground.
    $('#playground').mouseenter(function(){
      pingpong.isPaused = false;
    });

    // pause the game when mouse moves out the playground.
    $('#playground').mouseleave(function(){
      pingpong.isPaused = true;
    });

    // calculate the paddle position by using the mouse position.
    $('#playground').mousemove(function(e){
      pingpong.paddleA.y = e.pageY - pingpong.playground.offsetTop;
    });
  }

  // browser render loop
  function render() {
    renderBall();
    renderShip();
  //  renderPaddles();
     window.requestAnimationFrame(render);
  }

  function gameloop() {
    moveBall();
    moveShip();
   }


  // starting point of entire game
  function init() {

    // set interval to call gameloop logic in 30 FPS
    ball.timer = setInterval(gameloop, 1000/30);

    paddleA.timer = setInterval(gameloop, 1000/30);

    paddleB.timer = setInterval(gameloop, 1000/30);

  //  button1Check();

    // view rendering
    window.requestAnimationFrame(render);

    hideScreen("gameStartscreen");
    hideScreen("playground");
    hideScreen("scoreScreen");
    hideScreen("Level2");

    // inputs
  //  handleMouseInputs();
  }

  // Execute the starting point
  init();

})(jQuery);


function showScreen(id) {
     var screen = document.getElementById(id);
     screen.style.display = "block";
 }

 function hideScreen(id) {
  var screen = document.getElementById(id);
  screen.style.display = "none";
}

 // view rendering
 function button1Check() {
   console.log('clicked!');
   hideScreen("Level2");
   showScreen("gameStartscreen");
   showScreen("playground");

     //  game.showScreen("levelselectscreen");
     console.log('clicked2222!');

  }

  // view rendering
  function showScoreScreen() {
    hideScreen("playground");
     showScreen("scoreScreen");

   }

   // view rendering
   function level2() {
     hideScreen("playground");
      showScreen("Level2");

    }
