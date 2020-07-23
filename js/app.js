//Wait until HTML is loaded
document.addEventListener('DOMContentLoaded', ()=> {

    //variables
    let box;
    let divForOneBox;
    const width = 10;
    let nextRandomTetrimino = 0;
    let timerId = 0;
    let score = 0;
    const colors = [
        '#5CD1FF', '#FF478E', '#FF6933', '#FFE900', '#E7FF5C', '#FA003F', '#AAFAC8'
    ];


    //selecting DOM elements
    const body = document.getElementById('body');
    const layout = document.getElementById('layout');
    const miniLayout = document.getElementById('mini-layout');
    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const startBtn = document.getElementById('start-btn');

    //the tetriminos

    const lTetrimino = [
        [width, width+1, width+2,width*2+2],
        [width*2, width*2 +1, width+1,1],
        [width, width*2, width*2+1, width*2+2],
        [1, width+1, width*2+1, 2]
    ];

    const jTetrimino = [
        [width*2, width*2+1, width*2+2, width+2],
        [1, width+1, width*2+1, width*2+2],
        [width, width+1, width+2, width*2],
        [0, 1, width+1, width*2+1]
    ];

    const sTetrimino = [
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1]
    ];

    const zTetrimino = [
        [width, width+1, width*2+1, width*2+2],
        [2, width+2, width+1, width*2+1],
        [width, width+1, width*2+1, width*2+2],
        [2, width+2, width+1, width*2+1]
    ];

    const tTetrimino = [
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1],
        [width+1, width*2, width*2+1, width*2+2],
        [1, width+1, width+2, width*2+1]
    ];

    const oTetrimino = [
        [width, width+1, width*2, width*2+1],
        [width, width+1, width*2, width*2+1],
        [width, width+1, width*2, width*2+1],
        [width, width+1, width*2, width*2+1]
    ];

    const iTetrimino = [
        [width, width+1, width+2, width+3],
        [2, width+2, width*2+2, width*3+2],
        [width, width+1, width+2, width+3],
        [2, width+2, width*2+2, width*3+2]
    ];

    const theTetriminos = [lTetrimino, jTetrimino, sTetrimino, zTetrimino, tTetrimino, oTetrimino, iTetrimino];

    //CREATE BASIC VISUAL GAME STRUCTURE
    //Append 200 game background DIVS
    for(let i = 0; i<200; i++){
        divForOneBox = document.createElement('div');
        layout.appendChild(divForOneBox);
        // console.log('One box');
    }
    //Append 10 divs to create game bottom border
    for(let i = 0; i<10; i++){
        divForOneBox = document.createElement('div');
        divForOneBox.classList.add('taken');
        divForOneBox.classList.add('top-border');
        layout.appendChild(divForOneBox);
        // console.log('One box');
    }
    //Append mini grid
    for(let i = 0; i<16; i++){
        divForOneBox = document.createElement('div');
        miniLayout.appendChild(divForOneBox);
    }

    //create all squares array after they are append to DOM
    let squares = Array.from(document.querySelectorAll('.grid div'));
    console.log(squares);

    //GAME

    //randomly select a tetromino
    let randomTetrimino = Math.floor(Math.random()*theTetriminos.length);
    console.log(randomTetrimino);
    let currentPosition = 3;
    let currentRotation = 0;
    let current = theTetriminos[randomTetrimino][currentRotation];


    //Draw the tetrimino

    function draw(){
        current.forEach( index => {
            squares[currentPosition + index].classList.add('tetrimino');
            squares[currentPosition + index].style.backgroundColor = colors[randomTetrimino];
        });
    }

    //Undrow the tetrimino

    function undraw(){
        current.forEach( index => {
            squares[currentPosition + index].classList.remove('tetrimino');
            squares[currentPosition + index].style.backgroundColor = '';
        });
    }

    //move the tetrimino down every one second, freeze it when it reaches taken spot

    //timerId = setInterval(moveDown, 1000);

    function moveDown(){
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    //Controls functions

    function control(e){
        //ROTATE
        if(e.key === 'ArrowUp'){
            rotate();
        }
        //MOVE LEFT
        if(e.key === 'ArrowLeft'){
            moveLeft();
        }
        //MOVE RIGHT
        if(e.key === 'ArrowRight'){
            moveRight();
        }
        //MOVE DOWN
        if(e.key === 'ArrowDown'){
            moveDown();
        }

    }

    //FREEZE IS A MAIN GAME FUNCTION
    //freeze function, this function stops currently going tetrimino when it meets the bottom or another tetrimino,
    // create new tetrimino and make it go down, shows next tetrimino, count score

    function freeze(){
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){ //checking if the logic is true to some items in an array
            //if there are tetrimino a square under our all currently going tetriminos squares
            current.forEach( index => squares[currentPosition + index].classList.add('taken'));
            //start a new tetrimino
            randomTetrimino = nextRandomTetrimino;
            nextRandomTetrimino = Math.floor(Math.random()* theTetriminos.length);
            current = theTetriminos[randomTetrimino][currentRotation];
            currentPosition = 3;
            //draw a tetrimino
            draw();
            displayNext();
            addScore();
            gameOver();
        }
    }

    //FUNCTIONS FOR MOVING LEFT, RIGHT AND DOWN
    //function that move the tetrimino left until it reaches the left game border

    function moveLeft(){
        undraw();
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
        //when a tetrimino reaches left edge move one box to the right
        if(!isAtLeftEdge) {currentPosition -=1;}

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
            currentPosition +=1;
        }
        //draw a tetrimino
        draw();
    }

    //function that move the tetrimino right until it reaches the right game border

    function moveRight(){
        undraw();
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width-1);
        //when a tetrimino reaches left edge move one box to the right
        if(!isAtRightEdge) {currentPosition +=1;}

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
            currentPosition -=1;
        }
        //draw a tetrimino
        draw();
    }

    //function that rotate tetrimino
    function rotate(){
        undraw();
        currentRotation++;
        if(currentRotation === current.length){ //if we reached the 4th rotation come back to first one
            currentRotation = 0;
        }
        current = theTetriminos[randomTetrimino][currentRotation];
        draw();
    }

    //show coming up tetrimino
    const displaySquares = document.querySelectorAll('.mini-grid div');
    const displayWidth = 4;
    let displayIndex = 0;

    const nextTetriminos = [
        [displayWidth, displayWidth+1, displayWidth+2,displayWidth*2+2], //l
        [displayWidth*2, displayWidth*2+1, displayWidth*2+2, displayWidth+2], //j
        [displayWidth+1, displayWidth+2, displayWidth*2, displayWidth*2+1], //z
        [displayWidth, displayWidth+1, displayWidth*2+1, displayWidth*2+2],//s
        [displayWidth, displayWidth+1, displayWidth+2, displayWidth*2+1],//t
        [displayWidth, displayWidth+1, displayWidth*2, displayWidth*2+1],//o
        [displayWidth, displayWidth+1, displayWidth+2, displayWidth+3]//i
    ];

    //display next tetriminos

    function displayNext() {
        //remove tetrimino class from squares in the grid
        displaySquares.forEach(square => {
            square.classList.remove('tetrimino');
            square.style.backgroundColor = '';
        });
        nextTetriminos[nextRandomTetrimino].forEach(index=> {
            displaySquares[displayIndex + index].classList.add('tetrimino');
            displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandomTetrimino];
        });
    }
    //function add score and remove complete rows

    function addScore(){
        for(let i =0; i<199; i+=width){
            //defining what's row
            const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];
            //checks if all squares in a row are taken
            if(row.every(index=> squares[index].classList.contains('taken'))){
                score +=10;
                scoreDisplay.innerHTML = score;
                row.forEach(index => {
                    squares[index].classList.remove('taken');
                    squares[index].classList.remove('tetrimino');
                    squares[index].style.backgroundColor = '';
                });
            const removedSquares = squares.splice(i, width);
            //console.log(removeSquare);
            squares = removedSquares.concat(squares);
            squares.forEach(cell => grid.appendChild(cell));
            }
        }
    }

    //GAME OVER
    function gameOver(){
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
            scoreDisplay.innerText = 'GAME OVER';
            clearInterval(timerId);
        }
    }

    //EVENT LISTENERS

    //event listener that adds functionality to start/stop button
    startBtn.addEventListener('click', () => {
        if(timerId){
            clearInterval(timerId);
            timerId = null;
            startBtn.textContent = 'START';
        } else {
            draw();
            timerId = setInterval(moveDown, 1000);
            nextRandomTetrimino = Math.floor(Math.random()* theTetriminos.length);
            displayNext();
            startBtn.textContent = 'STOP';
        }
    });

    // EVENT LISTENER FOR PRESSING KEYS
    document.addEventListener('keydown', control);

});
