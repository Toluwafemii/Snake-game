
alert ('You\'re about to start the best Game of the year.');

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.font = "30px Arial";

let snake = [  
    {x: 150, y: 150},  
    {x: 140, y: 150},  
    {x: 130, y: 150},  
    {x: 120, y: 150},  
    {x: 110, y: 150},
];

let dx = 10; // Horizontal velocity
let dy = 0;  // Vertical velocity

document.addEventListener("keydown", function (event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10; 
    const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    } else if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    } else if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    } else if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
});

function drawSnakePart(snakePart) {  
    ctx.fillStyle = 'lightgreen';  // fill color
    ctx.strokeStyle = 'darkgreen'; // Outline color

    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {  
    snake.forEach(drawSnakePart);
}

function advanceSnake () {
    const head = {
        x: snake[0].x + dx,  
        y: snake[0].y + dy
    };
    snake.unshift(head); //Add new head
    snake.pop(); // Remove tail
}

function clearCanvas () {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.strokeRect(0, 0, c.width, c.height);
}

// Main game loop
function gameLoop() {
    clearCanvas();  
    advanceSnake();  
    drawSnake();
}

// Start the game loop
setInterval(gameLoop, 1000);

function randomTen (min, max) {
    
}


