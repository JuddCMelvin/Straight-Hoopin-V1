// Get the canvas element and its context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define game variables
const basketWidth = 80;
const basketHeight = 20;
let basketX = canvas.width / 2 - basketWidth / 2;
const basketY = canvas.height - basketHeight - 10;
const basketSpeed = 15;
let score = 0;

const ballRadius = 10;
const ballSpeed = 5;
const balls = [];


//Functions to create images

// Function to draw the basket
function drawBasket() {
    ctx.fillStyle = 'brown'; 
    ctx.fillRect(basketX, canvas.height - basketHeight - 10, basketWidth, basketHeight); // Draw the basket at the bottom of the canvas
}

// Generate and draw the basket
drawBasket();

// Function to move the basket
function moveBasket(direction) {
    if (direction === 'left' && basketX > 0) {
        basketX -= basketSpeed;
    } else if (direction === 'right' && basketX < canvas.width - basketWidth) {
        basketX += basketSpeed;
    }
}

moveBasket()

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
    
    // Draw the basket
    drawBasket();
    
    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

