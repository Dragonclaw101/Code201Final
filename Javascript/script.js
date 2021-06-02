'use strict';
console.log('Hello world');

/*- We want text to be displayed, and a event listener to be able to choose the reaction
- User creates character name
- after event listener triggered new text appears
- go back a step and have the back button poof once used but come back next time it moves foward
- once you get to the end you should be able to reset
- Semi-good CSS
- Set of images of the characters
- Extra: Sound
- Extra: Multiple starting settings
1. Event Listener - Button for click
2a. Database for choice
2b. function that creates text
3. Reset button function
4. Go back button function
5. Database for Character Images
6. If time sound
7. If have tons of time extra starting settings*/
let reset = document.getElementById('resetButton');
reset.addEventListener('click', resetFunc);
function resetFunc() {
    console.log('Reset console.log Triggered');
}
let goBack = document.getElementById('backButton');
goBack.addEventListener('click', backFunc);
function backFunc() {
    console.log('Go back console.log Triggered');
}