const hand = document.getElementById('hand'); 
let handWidth = 50; 
let handheight = 80; 
let screenWidth = 600; 
let screenHeight = 600; 

let handX = screenWidth/2 - handWidth/2; 
let handY = screenHeight - handheight - 10; 

//Set Starting Position
hand.style.left = handX + "px"; 
hand.style.top = handY + "px";

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        // moveHand('left');
        moveHand('left')
        console.log('hello')
    } else if (event.key === 'ArrowRight') {
        // moveHand('right');
        moveHand('right')
        console.log('')
    }
});

function moveHand(direction) {
    let dribble = 10; 

    if (direction === 'left') {
        handX -= dribble;
        hand.style.left = handX + 'px';
    } else if (direction === 'right') {
        handX += dribble;
        hand.style.left = handX + 'px';
    }
}

// function moveBasket() {
//     handX += direction;
//     hand.style.left = handX + 'px';
    
//     if (basketX + basketWidth + 10 >= screenWidth || basketX <= 0) {
//     direction *= -1;
//     }

//     requestAnimationFrame(moveBasket);
// }

// moveBasket();