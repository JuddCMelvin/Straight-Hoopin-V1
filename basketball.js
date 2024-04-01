
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

const basket = document.getElementById('basket');
const screenWidth = 600; 
let basketWidth = 50; 
let basketheight = 80
let basketX = screenWidth/2 - basketWidth/2; 
const basketY = 20; 

basket.style.left = basketX + 'px';
basket.style.top = basketY + 'px';

// function moveBasket(key) {
//     const step = 10; 

//     if (key === "ArrowLeft") {
//         basketX -= ; // Move left
//     } else if (key === "ArrowRight") {
//         basketX += step; // Move right
//     }

//     // Update the position of the basket element
//     basket.style.left = basketX + 'px';
// }

// moveBasket('ArrowLeft')