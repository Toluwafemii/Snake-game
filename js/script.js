
alert ('js is linked');

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
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.strokeStyle(0, 0, gameCanvas.width, gameCanvas.height);
}

// Move on step to the 
advanceSnake()

// Draw the snake on the canvas
drawSnake();

// Change direction to move up
dx = 0;
dy = -10;

// Move one step 
advanceSnake();
drawSnake();

