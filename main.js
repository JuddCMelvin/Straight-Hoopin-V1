const basket = document.getElementById('basket');
let screenWidth = 600;
let basketWidth = 50;  
let direction = 2; // 1 for moving right, -1 for moving left
let basketX = screenWidth/2 - basketWidth/2;

function moveBasket() {
    basketX += direction;
    basket.style.left = basketX + 'px';
    
    if (basketX + basketWidth + 10 >= screenWidth || basketX <= 0) {
    direction *= -1;
    }

    requestAnimationFrame(moveBasket);
}

moveBasket();

//Start of Functions for the Hand
const hand = document.getElementById('hand'); 
let handWidth = 50; 
let handheight = 80; 
let screenHeight = 600; 

let handX = screenWidth/2 - handWidth/2 - 15; 
let handY = screenHeight - handheight - 10; 

//Set Starting Position
hand.style.left = handX + "px"; 
hand.style.top = handY + "px";

//Add EventListener to get arrow clicks
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        // moveHand('left');
        moveHand('left')
        console.log('hello')
    } else if (event.key === 'ArrowRight') {
        // moveHand('right');
        moveHand('right')
    } else if (event.key === ' ') {
        // setInterval(moveBall, 10);
        createBall()
        // setInterval(moveBall, 10);  
    }
});

//Function moves the hand
function moveHand(direction) {
    let dribble = 20;

    if (direction === 'left' && handX - dribble >= 0) {
        handX -= dribble;
        hand.style.left = handX + 'px';
    } else if (direction === 'right' && handX + handWidth + dribble <= screenWidth) {
        handX += dribble;
        hand.style.left = handX + 'px';
    }
}

//CreateBall Function 

let ballX = handX + 50;
let ballY = handY - handheight + 30;
let ballSpeed = 5;
let ball; // Define ball variable outside of createBall function

function createBall() {
    ball = document.createElement('div');

    ball.className = 'ball';
    ball.style.borderRadius = '50%';
    ball.style.position = 'absolute';
    ball.style.height = '50px';
    ball.style.width = '50px';
    ball.style.backgroundColor = 'orange';
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    const gameScreen = document.getElementById('gameScreen');
    gameScreen.appendChild(ball);

    moveBall()
}

//Start of Functions to shoot

function moveBall() {
    ballY -= ballSpeed;
    ball.style.top = ballY + 'px';

    requestAnimationFrame(moveBall);
}

//Set Starting Position of ball
ball.style.left = ballX + 'px';
ball.style.top = ballY + 'px';

 // Call createBall function to initialize the ball



