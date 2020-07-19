//Wait until HTML is loaded
document.addEventListener('DOMContentLoaded', ()=> {
    //variables
    let box;
    let DIV_FOR_ONE_BOX;
    //selecting DOM elements
    const BODY = document.getElementById('body');
    const LAYOUT = document.getElementById('layout');
    //Create basic visual game structure
    //Append 200 DIVS
    for(let i = 0; i<200; i++){
        DIV_FOR_ONE_BOX = document.createElement('div');
        LAYOUT.appendChild(DIV_FOR_ONE_BOX);
        // console.log('One box');
    }

});
