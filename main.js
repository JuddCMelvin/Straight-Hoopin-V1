const basket = document.getElementById('basket');
let screenWidth = 600;
let basketWidth = 50;  
let basketHeight = 80; 
let direction = 2; // 1 for moving right, -1 for moving left
let basketX = screenWidth/2 - basketWidth/2;
let basketY = 80; 

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

// Function to create the ball

// Function to create the ball
function createBall(handX, handY, basketX, basketWidth) {
    // Create a new div element for the ball
    const gameScreen1 = document.getElementById('gameScreen1');
    const ball = document.createElement('div');

    // Set styles for the ball
    ball.className = 'ball';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.backgroundColor = 'red';
    ball.style.position = 'absolute';
    ball.style.left = handX + 'px'; // Set the initial position using handX
    ball.style.top = handY + 'px'; // Set the initial position using handY

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

        if (handY >= 80 && basketX + basketWidth <= handX >= basketX && handX) {
            ball.remove();
        } 

        // if (handY <=){
        //     ball.remove()
        // }

        //     (handY <= 0) {
        //     ball.remove(); // Remove the ball if it's at or above the top of the game screen
        // } else if (handY >= 80 && handX === basketX + basketWidth) {
        //     ball.remove(); 
        // }
    }
 
    function collision() {
        if (handY >= 80) {
            ball.remove()
        }
    }
        // if (handY >=  80 && handX === basketX + basketWidth){
        //     ball.remove()
        // }

        // if (handY = basketHeight ) {
        //     handY += -5;
        //     ball.style.left = handX + 'px';
        //     ball.style.top = handY + 'px';
        // } else if (handY === 0) {
        //     ball.remove(); 
        // }
        // handY += -1; // Example: Increase handY by 1 (adjust as needed)
        // ball.style.left = handX + 'px';
        // ball.style.top = handY + 'px';

    // Call the updatePosition function every 10 milliseconds
    const intervalId = setInterval(updatePosition, 10); 

    // Append the ball to the body or any other container element
    gameScreen1.appendChild(ball);

    // Optionally, return the intervalId if you need to stop the interval later
    return intervalId;

}

//Made a counter test to make the ball move

// setInterval(shoot, 10); 

// function test() {
//     console.log('test')
// }
//Need Ball
// async function shoot() {
//     handY += 1
//     ball.style.top = handY + 'px';
// }

//Need ball to appear when space bar clicked

//need ball to move up 

//shoot

