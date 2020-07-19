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
