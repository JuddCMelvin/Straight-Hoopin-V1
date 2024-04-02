const hand = document.getElementById('hand'); 
let handWidth = 50; 
let handheight = 80; 
let screenWidth = 600; 
let screenHeight = 600; 

let handX = screenWidth/2 - handWidth/2; 
let handY = screenHeight - handheight - 10; 


hand.style.left = handX + "px"; 
hand.style.top = handY + "px";
// function moveBasket(direction) {
//     const stepBack = 10; 

//     if (direction === 'left') {
//         basketX -= stepBack;
//     } else if (direction === 'right') {
//         basketX += stepBack;
//     }

//     basket.style.left = basketX + 'px';

// }

// function moveBasket() {
//     handX += direction;
//     hand.style.left = handX + 'px';
    
//     if (basketX + basketWidth + 10 >= screenWidth || basketX <= 0) {
//     direction *= -1;
//     }

//     requestAnimationFrame(moveBasket);
// }

// moveBasket();