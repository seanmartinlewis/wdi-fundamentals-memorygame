console.log("JS file is connected to HTML! Woo!")

var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

//if (cardOne === cardTwo) {
//	alert('You found a match!')
//}
//else if (cardOne !== cardTwo) {
//	alert('Sorry, try again.')
//}
//else if (cardThree === cardFour) {
//	alert('You found a match!')
//}
//else if (cardThree !== cardFour) {
//	alert('Sorry, try again!')
//}


var gameBoard = document.getElementById('game-board');

function createBoard() {
	for (var i = 0; i < x; i = i+1) {

	var cardElement = document.createElement('div');

	cardElement.className = 'card';
	board.appendChild(cardElement);
	}
}
