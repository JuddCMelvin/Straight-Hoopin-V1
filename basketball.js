
//for building page transitions
// function bringToTop(id) {
//     const div = document.getElementById(id);
//     div.style.zIndex = id.zIndexz + 1; // Bring the selected div to the top
// }
//For making goal move
// document.addEventListener('keydown', function(event) {
//     if (event.key === "ArrowLeft") {
//         basketX -= step; //move left
//     }
// } )

//Set the Initial Position for the Basket
const basket = document.getElementById('basket');
const screenWidth = 600; 

const basketY = 20; 

let basketWidth = 50; 
let basketheight = 80
let basketX = screenWidth/2 - basketWidth/2 - 5; 

basket.style.left = basketX + 'px';
basket.style.top = basketY + 'px';

const basketPosition = []

//Set the Initial Position for the Ball
const ball = document.getElementById('ball'); 
let ballWidth = 50; 
let ballheight = 80; 
let ballX = screenWidth/2 - ballWidth/2; 
const ballY = 50; 

ball.style.left = ballX + 'px';
ball.style.top = ballY + 'px';

//AddEvent Listner to get arrow clicks

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        // moveBasket('left');
        moveBall('left');
    } else if (event.key === 'ArrowRight') {
        // moveBasket('right');
        moveBall('right');
    }
});

//Now I need to create a way for when the arrow key is
//  pressed to make the div move left. So need to create a function
// to change the x value for the basket


// function moveBasket(direction) {
//     const stepBack = 10; 

//     if (direction === 'left') {
//         basketX -= stepBack;
//     } else if (direction === 'right') {
//         basketX += stepBack;
//     }

//     basket.style.left = basketX + 'px';

// }


//  Basket moves over one. Now how to repeat 
function repeat() {
    setInterval(moveBasketRight, 1000);
}

function moveBasketRight() {
    // for (let i = 0;  i < screenWidth.length; i++) {
    //     basketPosition.push(i); 
    //     console.log(i)
    // }
    basketX += 100
    basket.style.left = basketX + 'px';
}
function moveBasketLeft() {
    // for (let i = 0;  i < screenWidth.length; i++) {
    //     basketPosition.push(i); 
    //     console.log(i)
    // }
    basketX -= 100
    basket.style.left = basketX + 'px';
}
repeat()

//Move Ball

function moveBall(direction) {
    const dribbleBall = 10; 

    if (direction === 'left') {
        ballX -= dribbleBall;
    } else if (direction === 'right') {
        ballX += dribbleBall;
    }
    
    ball.style.left = ballX + 'px';
}