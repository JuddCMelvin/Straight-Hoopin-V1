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

// Start of Functions for the Hand
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
        moveHand('left');
        console.log('Moving hand left');
    } else if (event.key === 'ArrowRight') {
        moveHand('right');
        console.log('Moving hand right');
    } 
});


// Function moves the hand
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


//_________________________Shoot_____________________________

// Add event listener to detect spacebar key press
document.addEventListener('keydown', function(event) {
    if (event.key === ' ') { // Check if spacebar is pressed
        // createBall(); // Call the function to create the ball
        console.log('shoot')
    }
});

let ball;
// Function to create the ball
function createBall() {
    // Create a new div element for the ball
    const gameScreen1 = document.getElementById('gameScreen1');
    const ball = document.createElement('div');

    // Set styles for the ball
    ball.className = 'ball';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.backgroundColor = 'red';
    ball.style.position = 'absolute';
    // ball.style.top = handY + 'px'; // I need this to consitently reset 
    ball.style.left = handX + 'px'; // Adjust the position as needed

    setInterval(shoot, 10); 

    // Append the ball to the body or any other container element
    gameScreen1.appendChild(ball);

    requestAnimationFrame(createBall);
}

//Made a counter test to make the ball move

// setInterval(shoot, 10); 

// function test() {
//     console.log('test')
// }
//Need Ball
async function shoot() {
    handY += 1
    ball.style.top = handY + 'px';
}

//Need ball to appear when space bar clicked

//need ball to move up 

//shoot

