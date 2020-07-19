//Wait until HTML is loaded
document.addEventListener('DOMContentLoaded', ()=> {

    //variables
    let box;
    let divForOneBox;
    const WIDTH = 10;


    //selecting DOM elements
    const BODY = document.getElementById('body');
    const LAYOUT = document.getElementById('layout');
    const GRID = document.querySelector('.grid');
    const SCORE = document.getElementById('score');
    const START_BUTTON = document.getElementById('start-btn');

    //the tetriminos

    const lTetrimino = [
        [WIDTH, WIDTH+1, WIDTH+2,WIDTH*2+2],
        [WIDTH*2, WIDTH*2 +1, WIDTH+1,1],
        [WIDTH, WIDTH*2, WIDTH*2+1, WIDTH*2+2],
        [1, WIDTH+1, WIDTH*2+1, 2]
    ];

    const jTetrimino = [
        [WIDTH*2, WIDTH*2+1, WIDTH*2+2, WIDTH+2],
        [1, WIDTH+1, WIDTH*2+1, WIDTH*2+2],
        [WIDTH, WIDTH+1, WIDTH+2, WIDTH*2],
        [0, 1, WIDTH+1, WIDTH*2+1]
    ];

    const sTetrimino = [
        [WIDTH+1, WIDTH+2, WIDTH*2, WIDTH*2+1],
        [0, WIDTH, WIDTH+1, WIDTH*2+1],
        [WIDTH+1, WIDTH+2, WIDTH*2, WIDTH*2+1],
        [0, WIDTH, WIDTH+1, WIDTH*2+1]
    ];

    const zTetrimino = [
        [WIDTH, WIDTH+1, WIDTH*2+1, WIDTH*2+2],
        [2, WIDTH+2, WIDTH+1, WIDTH*2+1],
        [WIDTH, WIDTH+1, WIDTH*2+1, WIDTH*2+2],
        [2, WIDTH+2, WIDTH+1, WIDTH*2+1]
    ];

    const tTetrimino = [
        [WIDTH, WIDTH+1, WIDTH+2, WIDTH*2+1],
        [1, WIDTH, WIDTH+1, WIDTH*2+1],
        [WIDTH+1, WIDTH*2, WIDTH*2+1, WIDTH*2+2],
        [1, WIDTH+1, WIDTH+2, WIDTH*2+1]
    ];

    const oTetrimino = [
        [0, 1, WIDTH, WIDTH+1],
        [0, 1, WIDTH, WIDTH+1],
        [0, 1, WIDTH, WIDTH+1],
        [0, 1, WIDTH, WIDTH+1]
    ];

    const iTetrimino = [
        [WIDTH, WIDTH+1, WIDTH+2, WIDTH+3],
        [2, WIDTH+2, WIDTH*2+2, WIDTH*3+2],
        [WIDTH, WIDTH+1, WIDTH+2, WIDTH+3],
        [2, WIDTH+2, WIDTH*2+2, WIDTH*3+2]
    ];

    //Create basic visual game structure
    //Append 200 DIVS
    for(let i = 0; i<200; i++){
        divForOneBox = document.createElement('div');
        LAYOUT.appendChild(divForOneBox);
        // console.log('One box');
    }

    //create all squares array after they are append to DOM
    const ALL_SQUARES = Array.from(document.querySelectorAll('.grid div'));
    console.log(ALL_SQUARES);



});
