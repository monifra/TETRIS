//Wait until HTML is loaded
document.addEventListener('DOMContentLoaded', ()=> {

    //variables
    let box;
    let divForOneBox;
    const width = 10;


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
    //Append 200 DIVS
    for(let i = 0; i<200; i++){
        divForOneBox = document.createElement('div');
        layout.appendChild(divForOneBox);
        // console.log('One box');
    }

    //create all squares array after they are append to DOM
    const squares = Array.from(document.querySelectorAll('.grid div'));
    console.log(squares);

    //Game


    //randomly select a tetromino
    const randomTetrimino = Math.floor(Math.random()*theTetriminos.length);
    console.log(randomTetrimino);

    let currentPosition = 3;
    let currentRotation = 0;
    let current = theTetriminos[randomTetrimino][currentRotation];


    //Draw the tetrimino

    const draw = () => {
        current.forEach( index => {
            squares[currentPosition + index].classList.add('tetrimino');
        });
    };

    //Undrow the tetrimino

    const undrow = () => {
        current.forEach( index => {
            squares[currentPosition + index].classList.remove('tetrimino');
        });
    };

    //move the tetrimino down every one second

    const timerId = setInterval(moveDown, 1000);

    const moveDown = () => {
        undrow();
        currentPosition += width;
        draw();
    };

    draw();

});
