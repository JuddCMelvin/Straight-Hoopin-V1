// Get the canvas element and its context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define game variables
const basketWidth = 80;
const basketHeight = 20;
let basketX = canvas.width / 2 - basketWidth / 2;
const basketY = canvas.height - basketHeight - 10;
const basketSpeed = 30;


const ballRadius = 10;
const ballSpeed = 5;
const balls = [];

let score = 0; 

//Functions to create images

// Function to draw the basket
function drawBasket() {
    ctx.fillStyle = 'brown'; 
    ctx.fillRect(basketX, canvas.height - basketHeight - 10, basketWidth, basketHeight); // Draw the basket at the bottom of the canvas
}
// Function to move the basket
function moveBasket(direction) {
    if (direction === 'left' && basketX > 0) {
        basketX -= basketSpeed;
    } else if (direction === 'right' && basketX < canvas.width - basketWidth) {
        basketX += basketSpeed;
    }
}
// Function to generate a basketball
function generateBall() {
    const ballX = Math.random() * (canvas.width - ballRadius * 2) + ballRadius; // Generate a random x-coordinate for the basketball
    balls.push({ x: ballX, y: 0 }); // Add the basketball object with the generated coordinates to the balls array
}
// Function to move the basketballs
function moveBalls() {
    for (let i = 0; i < balls.length; i++) { // Iterate through each basketball object in the balls array
        balls[i].y += ballSpeed; // Increment the y-coordinate to simulate downward movement
    }
}
generateBall()
// Function to draw the basketballs
function drawBalls() {
    ctx.fillStyle = 'orange'; // Set the fill color to orange
    for (let i = 0; i < balls.length; i++) { // Loop through each basketball in the balls array
        const ball = balls[i]; // Get the current basketball object
        ctx.beginPath(); // Start a new drawing operation
        ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2); // Draw a circle for the basketball
        ctx.fill(); // Fill the circle with the current fill color
    }
}
// Function to check for collisions between basketballs and the basket
function checkCollisions() {
    for (let i = 0; i < balls.length; i++) {
        const ball = balls[i];
        if (ball.y + ballRadius > basketY && ball.y + ballRadius < basketY + basketHeight &&
            ball.x > basketX && ball.x < basketX + basketWidth) {
            // Collision detected
            balls.splice(i, 1); // Remove the ball from the array
            score++; // Increment the score
            updateScore(); // Update the displayed score
            generateBall(); // Generate a new ball
        }
    }
}
// Function to update the score display
function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = 'Score: ' + score; // Update the innerText with the new score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 30);
}
// Event listeners for keyboard input to move the basket
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        moveBasket('left');
    } else if (event.key === 'ArrowRight') {
        moveBasket('right');
    }
});

// Main game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
   // Move the basketballs
    moveBalls();
    
    // Draw the basket
    drawBasket();
    
    // Draw the basketballs
    drawBalls();

    checkCollisions()
    
    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();


