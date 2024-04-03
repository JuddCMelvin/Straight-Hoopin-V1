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

function createBall() {
    const ball = document.createElement('div')

    ball.id = 'ball'; 
    ball.style.borderRadius = '50%'; 
    ball.style.postion = 'absolute'; 
    ball.style.height = 50 + "px";
    ball.style.width = 50 + "px";
    ball.style.backgroundColor = 'orange';
    ball.style.left = ballX + "px"; 
    ball.style.top = ballY + "px";

    const gameScreen = document.getElementById('gameScreen'); // Get the ball container
    gameScreen.appendChild(ball);
}

//Start of Functions to shoot

let ballX = handX + 5; 
let ballY = handY - handheight + 30; 
let ballSpeed = 5; 

//Set Starting Position of ball
// ball.style.left = ballX + "px"; 
// ball.style.top = ballY + "px";

function moveBall(){
    ballY -= ballSpeed
    ball.style.top = ballY + "px";


}

