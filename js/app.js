//Wait until HTML is loaded
document.addEventListener('DOMContentLoaded', ()=> {

    //variables
    let box;
    let divForOneBox;
    const width = 10;
    let nextRandomTetrimino = 0;


    //selecting DOM elements
    const body = document.getElementById('body');
    const layout = document.getElementById('layout');
    const grid = document.querySelector('.grid');
    const score = document.getElementById('score');
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

    //Create basic visual game structure
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
        layout.appendChild(divForOneBox);
        // console.log('One box');
    }

    //create all squares array after they are append to DOM
    const squares = Array.from(document.querySelectorAll('.grid div'));
    console.log(squares);

    //Game


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
        });
    }

    //Undrow the tetrimino

    function undraw(){
        current.forEach( index => {
            squares[currentPosition + index].classList.remove('tetrimino');
        });
    }

    //move the tetrimino down every one second, freeze it when it reaches taken spot

    const timerId = setInterval(moveDown, 1000);

    function moveDown(){
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }


    //freeze function, this function stops currently going tetrimino when it meets the bottom or another tetrimino, create new tetrimino and make it go down

    function freeze(){
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){ //checking if the logic is true to some items in an array
            //if there are tetrimino a square under our all currently going tetriminos squares
            current.forEach( index => squares[currentPosition + index].classList.add('taken'));
            //start a new tetrimino
            nextRandomTetrimino = Math.floor(Math.random()* theTetriminos.length);
            current = theTetriminos[nextRandomTetrimino][currentRotation];
            currentPosition = 3;
            //draw a tetrimino
            draw();
        }
    }

    //move the tetrimino left until it reaches the left game border

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



});
