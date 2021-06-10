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

// var buttonArray = [
//     {id:'startButtons', text1: 'Click here if you would like to be hired as a product mover.', text2:'Click here if you would like to take the position of cabin boy.'},
//     {id:'cabinBoy', text1:'If you would like to start organizing the documents, click here.',text2:'To clean up the food mess, click here.',text3:'If you would like to pick up the captain’s clothes, click here.'},

// ]


var textArray = [
    {id:'start',text:'High seas and dashing adventure - something you’ve dreamed about since you were young. In a village composed of fishermen and merchants, your chances of freedom were once in a lifetime. And that chance had come today. A foreign merchant ship was looking for recruits, strong workers who could aid in moving goods. A cabin boy position was also open, something that might appeal to you as lighter labor. '},
    {id:'mover',text:'The captain nods and accepts you as a product mover without so much as a word to you. You begin loading some of the products onto the ship. They are in unlabeled boxes, and they feel very heavy. You thought they felt like weapons, or possibly gold, but you weren’t sure. There were some barrels full of dried meat and water, but someone else had already grabbed them.\n\nThe ship takes off as you load the last box. You make your way to a seat on the deck, tilting your head back and closing your eyes. The crew around you is engaging in small talk, stuff you can’t hear very well.\n\nThe ship takes off soon, and you relax a bit as you get to the open sea. There isn’t much for you to do now, except if the captain orders you to. You have no time to ponder your new freedom as a shot is fired in your direction. You turn to see an enemy ship approaching.'},
    {id:'fight',text:'You stand your ground, facing where the crew seems to be looking. A pirate ship seems to be looming in the distance. Your stomach leaps into your throat and the ship fires a warning shot, and you break into a cold sweat when your ship returns fire. A cannonball crashes into the deck a few feet away from you, and you dive to the side. \n\nAs you recover, someone shouts something over the noise and tosses a musket in your direction. You fire blindly at the other ship, stopping only to reload and dive behind barrels and fallen bits of wood.\n\nYou don’t know how long the fight has been going on. It could have been hours, and your hands are burning from the constant movement of gunpowder. Eventually, however, the firing stops. You peek your head out and see that the other ship has waved a flag of surrender. Your crew erupts into cheers, and you find yourself doing the same.\n\nEveryone begins to rush to plunder the other ship, whooping about the large amounts of treasure that must be on board. You realize that you have been on a pirate ship all along, a fate you aren’t too displeased about. You yourself let out a long holler and rush aboard the other ship with your mates. (end)'},
    {id:'over',text:'You leap over the railing, as someone screams “Mutiny!” on board. You don’t have time to concern yourself with that, as you are more focused on swimming to safety, wherever that may be. Cannonballs fall around you, some missing you by mere inches. You’re not sure where you are swimming to, just that you are swimming for dear life.\n\nYou get hit by one of the many cannonballs, perhaps even flung over by a member of your former crew. You slip into unconsciousness, sinking deep into the sea. (end)'},
    {id:'cabin',text:'The merchant captain had looked at you with a frown but approved your position.\n\n \“A waste of a strong hand,\” he had said, \“but we\’ll get to that later.\”\n\nYou were off in a matter of minutes, as the sailors were eager to get out of port. Your first order of business was straightening the captain’s cabin. It was a royal mess, papers, and documents strewn everywhere. Dirty clothes littered the floor, and decaying food bits were stacked in the corner.  The whole room stank, and cleaning it could take a while.'},
    {id:'clothes',text:'You begin to toss the captain’s clothes into a bin. You realize that this was an incredibly easy task when you finish in a matter of minutes.'},
    {id:'food',text:'You wrinkle your nose as you set to cleaning up the food. It’s full of rotting mean and stale bread. Much of the food is covered in a slippery slime, and it takes a long time to pick everything up. You only manage to get through half of the pile before giving up. It’s too gross to continue. \n\nYou pick yourself up and look around the cabin. The papers are still a mess, and the clothes on the floor seem to smell even worse now. You can’t seem to put yourself in the mood to clean anything, so you lean against the cabin wall, regaining your composure.'},
    {id:'food2',text:'With a heavy sigh, you start in on the food mess again. The heavy stench seems to stick to you, and you wonder why you took this job. You long to go outside, and get some fresh air, but you know you’ll never return to the cabin if you were to do so.\n\nYou keep cleaning, for what seems to be an eternity. Perhaps it is so, and you begin to time yourself. You lose track after a few weeks and resign yourself to an eternity of cleaning rotten food off of the floor.  (end)'},
    {id:'deck',text:'You exit the cabin to get a whiff of fresh air. The crew is rushing around and shouting at one another, and no one seems to notice you. You take in a large breath of the salty breeze, calming down. You feel incredibly relieved to be out of that disgusting cabin. You look around the deck and notice that the crew seems to be acting strange. They seem to be practicing sword fighting, and some are guzzling ale. It seems strange for a merchant ship, but you try to ignore it.\n\nAs you ready yourself to go back into the rancid cabin, someone shouts something indiscernible from the lookout mast. The crew leaps to their feet, some going below deck, and others grabbing weapons.'},
    {id:'cabinStay',text:'You dive back into the cabin, avoiding the gunfire that has begun. You decide it would be safer to stay indoors during… Whatever this is. As you try to focus on getting everything clean, you hear an explosion outside, and the ship turns. You try to find something to cling to, but everything is tumbling over. Water crashes through the windows, filling the cabin. The ship is going down. You let out a whimper as water fills the cabin. It doesn’t take long for the entire cabin to fill, and even less time for darkness to overtake you.  (end)'},
    {id:'documents', text: "You set to organizing the captain’s documents. Some of them look important, resembling maps and trade agreements. You read a little, and as you come across some you try to decipher the captain’s handwriting. As you read, you discover that he lied about being a merchant. The crew is really a pirate crew. You can hardly believe your luck! There seems to be some treasure on board somewhere, and it wouldn’t be too hard to find. \nYou decide to search for the treasure. You sneak out of the cabin, creeping down into the hold of the ship. There are a few crew members around, snoring loudly. As you move some stuff around, you see something shiny. You make your way towards it, and discover a chalice filled with jewels. You reach for it, and a gruff voice sounds behind you.\n\“Hey! You there! You weren’t thinkin’ of stealing my treasure, were ya?\”\nYou whirl around to face the captain, heart pounding. Words escape you at the moment, and you can think of nothing you can say to defend yourself. The captain grabs you by the arm, dragging you away from the treasure. He shoves you into a small cell, sneering as he does so. \n\“That’ll teach ya. You’ll be stayin’ there until we find a nice island to drop ya off at.\”\n(end)"},
];


var buttonArray = [
    {id:'mover',text1:'Click here to stay and fight',text2:'Click here to dive overboard'},
    {id:'cabinBoy',text1:'Click here to clean the food',text2:'Click here to pick up the clothes',text3:'Click here to organize the documents'},
    {id:'foodChoices',text1:'Click here to keep cleaning',text2:'Click here to get a breath of fresh air'},
    {id:'deckChoices',text1:'Click here to return to the cabin',text2:'Click here to stay and fight'},
];



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