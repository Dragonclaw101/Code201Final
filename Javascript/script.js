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
var textArray = [
    {id:'start', text:"High seas and dashing adventure - something you’ve dreamed about since you were young. In a village composed of fishermen and merchants, your chances of freedom were once in a lifetime. And that chance had come today. A foreign merchant ship was looking for recruits, strong workers who could aid in moving goods. A cabin boy position was also open, something that might appeal to you as lighter labor."},
    {id:'cabinBoy', text:"The merchant captain had looked at you with a frown but approved your position. “A waste of a strong hand,” he had said, “but we’ll get to that later.” You were off in a matter of minutes, as the sailors were eager to get out of port. Your first order of business was straightening the captain’s cabin. It was a royal mess, papers, and documents strewn everywhere. Dirty clothes littered the floor, and decaying food bits were stacked in the corner.  The whole room stank, and cleaning it could take a while."},
]
var buttonArray = [
    {id:'startButtons', text1: 'Click here if you would like to be hired as a product mover.', text2:'Click here if you would like to take the position of cabin boy.'},
    {id:'cabinBoy', text1:'If you would like to start organizing the documents, click here.',text2:'To clean up the food mess, click here.',text3:'If you would like to pick up the captain’s clothes, click here.'},

]

let reset = document.getElementById('resetButton');
reset.addEventListener('click', resetFunc);
function resetFunc() {
    let target = document.getElementById('reactionText');
    target.textContent = textArray[0].text;
    let target0 = document.getElementById('option0');
    target0.textContent = buttonArray[0].text1;
    let target1 = document.getElementById('option1');
    target1.textContent = buttonArray[0].text2;
    let target2 = document.getElementById('option2');
    target2.textContent = 'Option 3';
    let target3 = document.getElementById('option3');
    target3.textContent = 'Option 4';
    let target4 = document.getElementById('option4');
    target4.textContent = 'Option 5';

    let button0 = document.getElementById('option0');
    button0.addEventListener('click', productMover);
    let button1 = document.getElementById('option1');
    button1.addEventListener('click', cabinBoy);
}
function cabinBoy() {
    alert("You have choosen to be a Cabin boy");
    let remove = document.getElementById('option1');
    remove.removeEventListener('click', cabinBoy);
    let remove1 = document.getElementById('option0');
    remove1.removeEventListener('click', productMover);
    let reaction = document.getElementById('reactionText');
    reaction.textContent = textArray[1].text;
    let target0 = document.getElementById('option0');
    target0.textContent = buttonArray[1].text1;
    let target1 = document.getElementById('option1');
    target1.textContent = buttonArray[1].text2;
    let target2 = document.getElementById('option2');
    target2.textContent = buttonArray[1].text3;

    target0.addEventListener('click', documents);
    target1.addEventListener('click', food);
    target2.addEventListener('click', clothes);
}
function documents() {
    alert('You have choosen to organize the documents');
    let target0 = document.getElementById('option0');
    target0.textContent = 'Option 1'
    target0.removeEventListener('click', documents);
    let target1 = document.getElementById('option1');
    target1.textContent = 'Option 2';
    target1.removeEventListener('click', food);
    let target2 = document.getElementById('option2');
    target2.textContent = 'The End';
    target2.removeEventListener('click', clothes);
}
function food() {
    alert('You have choosen to clean the food mess');
}
function clothes() {
    alert("I'm sorry but that option isn't avaible right now");
}
function productMover() {
    alert("I'm sorry but that option is not avaible at this time");
    let remove = document.getElementById('option0');
    remove.removeEventListener('click', productMover);
}
let goBack = document.getElementById('backButton');
goBack.addEventListener('click', backFunc);
function backFunc() {
    console.log('Go back console.log Triggered');
}