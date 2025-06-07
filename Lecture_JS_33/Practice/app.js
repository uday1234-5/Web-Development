let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50;
let gameOver = false;
let cellMoves = [[0,0]];
let boardWidth = 1000;
let boardHeight = 600;
let score = 0;


let foodcells = generateFood();
let direction = 'right';
document.addEventListener('keydown',(event)=>{
    console.log(event);
    console.log(event.key);
    if(event.key === 'ArrowDown') {
        direction = 'down';
    }else if(event.key === 'ArrowUp') {
        direction = 'up';
    }
    else if(event.key === 'ArrowLeft') {
        direction = 'left';
    } else {
        direction = 'right';
    }
})


function draw() {
 
    ctx.clearRect(0, 0, boardWidth, boardHeight);
    for (let cell of cellMoves) {
        let x = cell[0];
        let y = cell[1];
        ctx.fillStyle='blue';
        ctx.fillRect(x, y, cellSize, cellSize)

       ctx.strokeStyle = 'cyan';
       ctx.lineWidth = 3;
       ctx.strokeRect(x, y ,cellSize, cellSize);
    }

    // draw food
    ctx.fillStyle = 'khaki';
    ctx.fillRect(foodcells[0], foodcells[1], cellSize, cellSize)

     // display score
    ctx.font = '28px mono-space'
    ctx.fillStyle = 'lightgreen'
    ctx.fillText(`Score : ${score}`, 20, 30)
}

function update() {
    if (gameOver == true) {
        ctx.font = '50px san-sarif'
        ctx.fillStyle = 'pink'
        ctx.fillText('GAME OVER', 370, 300);
        clearInterval(intervalId);
        return;
    }
    let headX = cellMoves[cellMoves.length-1][0];
    let headY = cellMoves[cellMoves.length-1][1];
    let newHeadX;
    let newHeadY;
    if (direction === 'right') {
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if(newHeadX == boardWidth-cellSize ||  KhagayaKhudKo(newHeadX, newHeadY)){
            gameOver = true;
        }
    } else if (direction === 'down') {
        newHeadX = headX ;
        newHeadY = headY + cellSize;
        if (newHeadY == boardHeight-cellSize || KhagayaKhudKo(newHeadX, newHeadY)) {
            gameOver = true;
        }
    } else if (direction === 'left') {
        newHeadX = headX - cellSize;
        newHeadY = headY ;
        if (newHeadX == 0 ||  KhagayaKhudKo(newHeadX, newHeadY)) {
            gameOver = true;
        }
    } else if (direction === 'up') {
        newHeadX = headX ;
        newHeadY = headY - cellSize;
        if (newHeadY == 0 ||  KhagayaKhudKo(newHeadX, newHeadY)) {
            gameOver = true;
        }
    }
     cellMoves.push([newHeadX, newHeadY]);
    if (foodcells[0] === newHeadX && foodcells[1] === newHeadY) {
        score += 1;
        foodcells = generateFood()
    } else {
        cellMoves.shift();
    }

}

let intervalId = setInterval(() => {
    update();
    draw();
}, 100);

function generateFood() {
    return [
        Math.round((Math.random()*(boardWidth-cellSize))/cellSize)*50,
        Math.round((Math.random()*(boardHeight-cellSize))/cellSize)*50,
    ]
}

function KhagayaKhudKo(newHeadX, newHeadY) {
    for (let cell of cellMoves) {
        if (cell[0] === newHeadX && cell[1] === newHeadY) {
            return true;
        }
    }
    return false;
}