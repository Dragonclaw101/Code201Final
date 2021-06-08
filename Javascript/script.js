'use strict';
console.log('Hello world');
// ORGANIZE CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
    {id:'documents', text:"You set to organizing the captain’s documents. Some of them look important, resembling maps and trade agreements. You read a little, and as you come across some you try to decipher the captain’s handwriting. As you read, you discover that he lied about being a merchant. The crew is really a pirate crew. You can hardly believe your luck! There seems to be some treasure on board somewhere, and it wouldn’t be too hard to find. You decide to search for the treasure. You sneak out of the cabin, creeping down into the hold of the ship. There are a few crew members around, snoring loudly. As you move some stuff around, you see something shiny. You make your way towards it, and discover a chalice filled with jewels. You reach for it, and a gruff voice sounds behind you. “Hey! You there! You weren’t thinkin’ of stealing my treasure, were ya?” You whirl around to face the captain, heart pounding. Words escape you at the moment, and you can think of nothing you can say to defend yourself. The captain grabs you by the arm, dragging you away from the treasure. He shoves you into a small cell, sneering as he does so. “That’ll teach ya. You’ll be stayin’ there until we find a nice island to drop ya off at.”"},
    {id:'food', text:"You wrinkle your nose as you set to cleaning up the food. It’s full of rotting mean and stale bread. Much of the food is covered in a slippery slime, and it takes a long time to pick everything up. You only manage to get through half of the pile before giving up. It’s too gross to continue. You pick yourself up, and look around the cabin. The papers are still a mess, and the clothes on the floor seem to smell even worse now. You can’t seem to put yourself in the mood to clean anything, so you lean against the cabin wall, regaining your composure. "},
    {id:'deck', text:"You exit the cabin to get a whiff of fresh air. The crew is rushing around and shouting at one another, and no one seems to notice you. You take in a large breath of the salty breeze, calming down. You feel incredibly relieved to be out of that disgusting cabin. You look around the deck, and notice that the crew seems to be acting strange. They seem to be practicing sword fighting, and some are guzzling ale. It seems strange for a merchant ship, but you try to ignore it. As you ready yourself to go back into the rancid cabin, someone shouts something indiscernable from the lookout mast. The crew leaps to their feet, some going below deck, and others grabbing weapons."},
    {id:'clothes', text:"You begin to toss the captain’s clothes into a bin. You realize that this was an incredibly easy task when you finish in a matter of minutes. "},
    {id:'cabin', text:"You dive back into the cabin, avoiding the gunfire that has begun. You decide it would be safer to stay indoors during… Whatever this is. As you try to focus on getting everything clean, you hear an explosion outside, and the ship turns. You try to find something to cling to, but everything is tumbling over. Water crashes through the widows, filling the cabin. The shijp is going down. You let out a whimper as water fills the cabin. It doesn’t take long for the entire cabin to fill, and even less time for darkness to overtake you."},
]
var buttonArray = [
    {id:'startButtons', text1: 'Click here if you would like to be hired as a product mover.', text2:'Click here if you would like to take the position of cabin boy.'},
    {id:'cabinBoy', text1:'If you would like to start organizing the documents, click here.',text2:'To clean up the food mess, click here.',text3:'If you would like to pick up the captain’s clothes, click here.'},
    {id:'food', text1:'Click here to go out on the deck', text2:'Click here to continue cleaning'},
    {id:'deck', text1:'Click here if you would like to stay on deck', text2:'Click here if you would like to go back into the cabin'},
    {id:'clothes', text1:'Click here if you would like to work on the documents.',text2:'Click here if you would like to work on the food mess. '}
]

let reset = document.getElementById('resetButton');
reset.addEventListener('click', resetFunc);
function resetFunc() {
    resetListeners();
    resetText();
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
    let text = document.getElementById('reactionText');
    text.textContent = textArray[2].text;
}
function food() {
    alert('You have choosen to clean the food mess');
    let reaction = document.getElementById('reactionText');
    reaction.textContent = textArray[3].text;
    resetText();
    let target0 = document.getElementById('option0');
    target0.textContent = buttonArray[2].text1;
    let target1 = document.getElementById('option1');
    target1.textContent = buttonArray[2].text2;
    let target2 = document.getElementById('option2');
    target0.removeEventListener('click', documents);
    target1.removeEventListener('click', food);
    target2.removeEventListener('click', clothes);

    target0.addEventListener('click', deck);
    target1.addEventListener('click', countinueCleaing);
}
function deck() {
    alert('You have choosen to go on the deck');
    resetText();
    let reaction = document.getElementById('reactionText');
    reaction.textContent = textArray[4].text;
    let target0 = document.getElementById('option0');
    target0.textContent = buttonArray[3].text1;
    let target1 = document.getElementById('option1');
    target1.textContent = buttonArray[3].text2;
    target0.removeEventListener('click', deck);
    target1.removeEventListener('click', countinueCleaing);

    target0.addEventListener('click', staydeck);
    target1.addEventListener('click', cabin);
}
function staydeck() {
    alert("I'm sorry but this option is only for premium users, you can go to www.CYOA.com/premium to add a premium subscription");
    let remove = document.getElementById('option0');
    remove.removeEventListener('click', staydeck);
}
function cabin() {
    alert("You have choosen to rub back into the cabin");
    resetListeners();
    resetText();
    let target = document.getElementById('reactionText');
    target.textContent = textArray[6].text;
    let target2 = document.getElementById('option2');
    target2.textContent = 'The End';
}
function countinueCleaing() {
    alert("I'm sorry but this option isn't avaiable at this time");
    let remove = document.getElementById('option1');
    remove.removeEventListener('click', countinueCleaing);6
}
function clothes() {
    alert("You have choosen to clean the clothes");
    let target = document.getElementById('reactionText');
    let target0 = document.getElementById('option0');
    let target1 = document.getElementById('option1');
    let target2 = document.getElementById('option2');
    target0.removeEventListener('click', documents);
    target1.removeEventListener('click', food);
    target2.removeEventListener('click', clothes);
    target.textContent = textArray[5].text;
    target0.textContent = buttonArray[4].text1;
    target1.textContent = buttonArray[4].text2;
    target2.textContent = 'Option 3'
    
    target0.addEventListener('click', documents);
    target1.addEventListener('click', food);
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
function resetText() {
    let target0 = document.getElementById('option0');
    let target1 = document.getElementById('option1');
    let target2 = document.getElementById('option2');
    let target3 = document.getElementById('option3');
    let target4 = document.getElementById('option4');
    target0.textContent = 'Option 1';
    target1.textContent = 'Option 2';
    target2.textContent = 'Option 3';
    target3.textContent = 'Option 4';
    target4.textContent = 'Option 5';
}
function resetListeners() {
    let old_element = document.getElementById('actions');
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
}
(function startUp() {
    let target = document.getElementById('reactionText');
    target.textContent = 'This is where the text goes for what happens when you choose your choice. Click Reset to start.'
})();