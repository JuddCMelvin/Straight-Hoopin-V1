const basket = document.getElementById('basket');
let direction = 1; // 1 for moving right, -1 for moving left
let currentPosition = 0;

function moveBasket() {
    currentPosition += direction;
    basket.style.left = currentPosition + 'px';

    requestAnimationFrame(moveBasket);
}

moveBasket();

