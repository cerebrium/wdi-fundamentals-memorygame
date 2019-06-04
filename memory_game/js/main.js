// arrays defining cards and cards in play
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

// function for checking for matching
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}


// Function for flipping card and logging it
function flipCard(cardID) {
  cardsInPlay.push(cardID);
  checkForMatch();
  console.log(cards[cardID]);
}


flipCard(2);

//for (var i=0; i<10; i += 1) {
//  console.log(i);
//}
