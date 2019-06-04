// arrays defining cards and cards in play
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

// variable declaration for card being used
cardOne = cards[0];
cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay[0] === cardsInPlay[1]) {
  alert('You found a match');
} else {
  alert('Those cards don\'t match!');
}
console.log(cardsInPlay);
//for (var i=0; i<10; i += 1) {
//  console.log(i);
//}
