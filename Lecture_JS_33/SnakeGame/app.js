let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// 2D array to store starting points of snake ka rectangle
let snakeCells = [[0,0]];
// let snakeCells = [[-50,0]];

// har cell ki height and width
let cellSize = 50;

// Board Dimension
let boardHeight = 600;
let boardWidth = 1000;

let gameOver = false; // wall se touch hone ke baad ho jaye true;


// Generate Food
let foodcells = generateFood();   // because we need 2 values i.e x and y

// score
let score = 1;

// baar baar repeat
let intervalId = setInterval(() => {
    update();
    draw();
}, 100);



// difault direction of moving snake is right in beginning.
let direction = 'right'
document.addEventListener('keydown', function (event) {
    // console.log(event);
    // console.log(event.key);
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


// function to draw snake
function draw() {
    if (gameOver === true) {
        // clearInterval() is used to stop interval and it accepts id.

        ctx.font = '50px san-sarif'
        ctx.fillStyle = 'pink'
        ctx.fillText('GAME OVER', 370, 300);
        clearInterval(intervalId);
        return;
    }  

    ctx.clearRect(0, 0, boardWidth, boardHeight)
    for (let cell of snakeCells) {
        ctx.fillStyle = 'red';
        ctx.fillRect(cell[0], cell[1], cellSize, cellSize);

        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 5;
        ctx.strokeRect(cell[0], cell[1], cellSize, cellSize)
    }

    // draw food
    ctx.fillStyle = 'cyan';
    ctx.fillRect(foodcells[0], foodcells[1], cellSize, cellSize)


    // display score
    ctx.font = '28px mono-space'
    ctx.fillStyle = 'lightgreen'
    ctx.fillText(`Score : ${score}`, 20, 30)

   
     
    
}




// function to update snake
function update() {
    let headX = snakeCells[snakeCells.length-1][0];
    let headY = snakeCells[snakeCells.length-1][1];
        let newHeadX;
        let newHeadY;
    if(direction === 'right') {
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if(newHeadX == boardWidth || KhaGyaKhudKo(newHeadX, newHeadY)) {
            gameOver = true;
        }
    }  else if(direction === 'down') {
        newHeadX = headX ;
        newHeadY = headY+ cellSize;
        if(newHeadY == boardHeight || KhaGyaKhudKo(newHeadX, newHeadY)) {
            gameOver = true;
        }
    } else if(direction === 'left') {
        newHeadX = headX-cellSize ;
        newHeadY = headY;
        if(newHeadX == -50 || KhaGyaKhudKo(newHeadX, newHeadY)) {
            gameOver = true;
        }
    } else if(direction === 'up') {
        newHeadX = headX ;
        newHeadY = headY-cellSize;
        if(newHeadY == -50 || KhaGyaKhudKo(newHeadX, newHeadY)) {
            gameOver = true;
        }
    }
    // agar snake apne aap ko kaate....
    
    snakeCells.push([newHeadX, newHeadY]);
    if(newHeadX == foodcells[0] && newHeadY == foodcells[1]) {
        foodcells = generateFood();
        score += 1;
    } else {
        snakeCells.shift();
    }
       
}



function generateFood() {
    return [
        Math.round((Math.random()*(boardWidth - cellSize)) / cellSize) * cellSize ,
        Math.round((Math.random()*(boardHeight - cellSize)) / cellSize) * cellSize
    ]
}

function KhaGyaKhudKo(newHeadX, newHeadY) {
    for (let cell of snakeCells) {
        if(newHeadX === cell[0] && newHeadY === cell[1]) {
            return true;
        }
    }
    return false;
}