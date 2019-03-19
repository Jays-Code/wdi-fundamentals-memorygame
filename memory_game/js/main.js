//console.log("Up and running!");
var cards = [ 
{
	cardOne: "queen"
},
{
	cardTwo: "queen"
},
{
	cardThree: "king"
},
{
	cardFour: "king"
}];
//console.log("User flipped " + cards[0]);
//console.log("User flipped " + cards[1]);

var cardsInPlay = [""];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

}


var flipCard = function () {
	this.getAttribute('data-id', 'cardId');
	console.log("User flipped" + cards[cardId].rank);

console.log(cardImage);
console.log(suit);



cardsInPlay.push(cards[cardId].rank);

//flipCard();

	
checkForMatch();

this.setAttribute('src', [cardId].cardImage)
	/*if (cardsInPlay.length === 2) && (cardsInPlay[0] === cardsInPlay[1] {alert("You found a match!");}
		//else if (cardsInPlay[0] === cardsInPlay[1]) {alert ("You found a match!");}
		{else if (cardsInPlay[0] !== cardsInPlay[1]) {alert ("Sorry, try again.");
		}
	}
	*/
	//if (cardsInPlay.length === 2) 
		//{(cardsInPlay[0] === cardsInPlay[1]) {alert ("You found a match!");}
	//	else if (cardsInPlay[0] !== cardsInPlay[1]) {alert ("Sorry, try again.");

	//}

	if (cardsInPlay.length === 2) {console.log ('two cards selected');}
	else if (cardsInPlay.length !== 2) {console.log ('Pick another card.')}

	if (cardsInPlay[0] === cardsInPlay[1]) {alert ("You found a match!");}
	else if (cardsInPlay[0] !== cardsInPlay[1]) {alert ("Sorry, try again.");
	}
}
var createBoard = function (){
	for (var i = 0; i < createBoard.length; i++){
		var cardElement = document.createElement('img')
		cardElement.setAttribute('src', "images/back.png")
		cardElement.setAttribute('data-id', 'i')
		cardElement.addEventListener('click', 'flipCard')
		cardElement.appendChild('game-board')
	}
}

flipCard();

createBoard();
//console stopped outputting display after I put the { after the flipCard function (page 5 of functions project)