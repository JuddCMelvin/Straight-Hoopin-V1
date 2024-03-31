// Get the canvas element and its context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define game variables
const basketWidth = 80;
const basketHeight = 20;
let basketX = canvas.width / 2 - basketWidth / 2;
const basketY = canvas.height - basketHeight - 10;
const basketSpeed = 8;
let score = 0;

const ballRadius = 10;
const ballSpeed = 5;
const balls = [];

// Function to draw the basket
function drawBasket() {
    ctx.fillStyle = 'brown'; 
    ctx.fillRect(basketX, canvas.height - basketHeight - 10, basketWidth, basketHeight); // Draw the basket at the bottom of the canvas
}

// Generate and draw the basket
drawBasket();