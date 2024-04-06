const basket = document.getElementById('basket');
let screenWidth = 600;
let basketWidth = 50;  
let basketHeight = 80; 
let direction = 2; // 1 for moving right, -1 for moving left
let basketX = screenWidth/2 - basketWidth/2 + 30;
let basketY = 80; 
let collisionCounter = 5;
let ball;
let time = 60; 

function moveBasket() {
    basketX += direction;
    basket.style.left = basketX + 'px';
    
    if (basketX + basketWidth + 10 >= screenWidth || basketX <= 0) {
    direction *= -1;
    }

    requestAnimationFrame(moveBasket);
}

// Start of Functions for the Hand
const hand = document.getElementById('hand'); 
let handWidth = 50; 
let handheight = 80; 
let screenHeight = 600; 

let handX = screenWidth/2 - handWidth/2 - 15; 
let handY = screenHeight - handheight - 70; 

//Set Starting Position
hand.style.left = handX + "px"; 
hand.style.top = handY + "px";

//Add EventListener to get arrow clicks
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveHand('left');
        console.log('Moving hand left');
    } else if (event.key === 'ArrowRight') {
        moveHand('right');
        console.log('Moving hand right');
    } 
});


// Function moves the hand
function moveHand(direction) {
    let dribble = 30;

    if (direction === 'left' && handX - dribble >= 0) {
        handX -= dribble;
        hand.style.left = handX + 'px';
    } else if (direction === 'right' && handX + handWidth + dribble <= screenWidth) {
        handX += dribble;
        hand.style.left = handX + 'px';
    }
}


//_________________________Shoot_____________________________

// Add event listener to detect spacebar key press
document.addEventListener('keydown', function(event) {
    if (event.key === ' ') { // Check if spacebar is pressed
        // createBall(); // Call the function to create the ball
        console.log('shoot')
    }
});

// Function to create the ball
// Add event listener to detect spacebar key press
let shootingAllowed = true;
// Add event listener to detect spacebar key press
document.addEventListener('keydown', function(event) {
    if (event.key === ' ' && shootingAllowed) { 
        createBall(handX, handY); // 
        shootingAllowed = false; // 
        setTimeout(() => { shootingAllowed = true; }, 1000);
    }
});

function createBall(handX, handY) {
    const gameScreen1 = document.getElementById('gameScreen1');
    const ball = document.createElement('div');

    // Set styles for the ball
    ball.className = 'ball';
    ball.style.width = '30px';
    ball.style.height = '30px';
    ball.style.backgroundColor = 'red';
    ball.style.borderRadius = '50%'; 
    ball.style.position = 'absolute';
    ball.style.left = handX + 'px'; // Set the initial position using x axis
    ball.style.top = handY + 'px'; // Set the initial position using Y axis

    // Function to update the position of the ball
    function updatePosition() {
        // Update the position of the ball
        if (handY >= 0) {
            handY -= 2; // Move the ball upwards by reducing the Y coordinate
            ball.style.top = handY + 'px'; // Update the top position of the ball
        } 
        if (handY <= 0){
            ball.remove()
        }

        // Check for collision and log the result
        if (checkCollision(ball, basket)) {
            console.log('Collision detected!');
            updateCounter()
            ball.remove();
            clearInterval(intervalId);
        }
    }

    // Call the updatePosition function every 10 milliseconds
    const intervalId = setInterval(updatePosition, 10); 

    // Append the ball to the body or any other container element
    gameScreen1.appendChild(ball);

    // Optionally, return the intervalId if you need to stop the interval later
    return intervalId;
}

function checkCollision(ball, basket) {
    const rect1 = ball.getBoundingClientRect();
    const x1 = rect1.left;
    const y1 = rect1.top;
    const width1 = rect1.width;
    const height1 = rect1.height;

    const rect2 = basket.getBoundingClientRect();
    const x2 = rect2.left;
    const y2 = rect2.top;
    const width2 = rect2.width;
    const height2 = rect2.height;

    const horizontalOverlap = x1 < x2 + width2 && x1 + width1 > x2;
    const verticalOverlap = y1 < y2 + height2 && y1 + height1 > y2;

    return horizontalOverlap && verticalOverlap;
}

// Get references to the div elements

//____________________________ScoreBoard___________________________

// Function to update the collision counter and display it
function updateCounter() {
    collisionCounter += 2;
    // Get the counter display element
    const scoreBoard = document.getElementById('scoreBoard');
    // Update the innerHTML of the counter display element
    scoreBoard.innerHTML = `${collisionCounter}`;
}

//____________________________ShotClock_____________________________

let shotClock = document.getElementById('timer')
let outcome = document.getElementById('result')
let sec = 10;
function timer(){
    const timer = setInterval(function(){
        document.getElementById('timer').innerHTML = sec;
        sec--;
        if (sec <= -1 && collisionCounter <= 5) {
            clearInterval(timer);
            document.getElementById('result').innerHTML = 'You Lose. Come on and sit on Bench. Maybe next time'
            //gameOver()
        } else if( sec <= -1 && collisionCounter >= 5){
            clearInterval(timer);
            document.getElementById('result').innerHTML = 'Your getting there. We might join the starters soon.'
        }
    }, 1000);
}

const startButton = document.getElementById('startGameButton');

// Function to handle button click
function startButtonClickHandler() {
    // Remove the event listener to prevent multiple executions
    startButton.removeEventListener('click', startButtonClickHandler);
    // Reset the timer to 10 seconds
    shotClock.innerHTML = 10;
    // Reset the collision counter
    collisionCounter = 0;
    scoreBoard.innerHTML = collisionCounter;
    // Reset the basket position
    basketX = screenWidth / 2 - basketWidth / 2;
    basket.style.left = basketX + 'px';
    // Reset the hand position
    handX = screenWidth / 2 - handWidth / 2 - 15; 
    hand.style.left = handX + 'px';
    // Code to execute when the button is clicked
    timer();
    moveBasket(); 
    console.log('Button clicked!');
}

// Add event listener to the start button
startButton.addEventListener('click', startButtonClickHandler);

const resetButton = document.getElementById('reset');

function reset() {
    location.reload();
}

resetButton.addEventListener('click', reset)
//_____________________________Game Over Screen_______________________

