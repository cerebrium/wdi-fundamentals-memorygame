// arrays defining cards and cards in play


var cards = [
  {
  rank: 'queen',
  suit: 'hearts',
  cardImage: 'images/queen-of-hearts.png'},
  {
  rank: 'queen',
  suit: 'diamonds',
  cardImage: 'images/queen-of-diamonds.png'},
  {
  rank: 'king',
  suit: 'hearts',
  cardImage: 'images/king-of-hearts.png'},
  {
  rank: 'king',
  suit: 'diamonds',
  cardImage: 'images/king-of-diamonds.png'}
];
var cardsInPlay = [];

// function for checking for matching
function checkForMatch(cardID) {
    document.getElementById('game-board').setAttribute('src', cards.cardImage);
    if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

function createBoard() {
  for (var i=0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard(i));
    document.getElementById('game-board').appendChild(cardElement);
  }
}

// Function for flipping card and logging it
function flipCard(cardID) {
  cardsInPlay.push(cards[cardID].rank);
  checkForMatch(cardID);
  console.log(cards[cardID].rank);
  console.log(cards[cardID].suit);
  console.log(cards[cardID].cardImage);
}

createBoard();

//for (var i=0; i<10; i += 1) {
//  console.log(i);
//}
