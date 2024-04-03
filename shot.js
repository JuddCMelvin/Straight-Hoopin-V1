const hand = document.getElementById('hand'); 
let handWidth = 50; 
let handheight = 80; 
let screenWidth = 600; 
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
        console.log('')
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




// function moveBasket() {
//     handX += direction;
//     hand.style.left = handX + 'px';
    
//     if (basketX + basketWidth + 10 >= screenWidth || basketX <= 0) {
//     direction *= -1;
//     }

//     requestAnimationFrame(moveBasket);
// }

// moveBasket();