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

    let currentPosition = 1;
    let current = theTetriminos[0][0];

    //randomly select a tetromino
    const randomTetrimino = Math.floor(Math.random()*theTetriminos.length);
    console.log(randomTetrimino);
    //Draw the first rotation in the first tetromino

    const draw = () => {
        current.forEach( index => {
            squares[currentPosition + index].classList.add('tetrimino');
        });
    };

    draw();

});
