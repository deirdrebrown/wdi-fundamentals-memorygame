const cards = ["queen", "queen", "king", "king"]
cardsInPlay = [ ]



//check if two cards have been played
if (cardsInPlay.length === 2){
		}


//check for a match	
var checkForMatch = function (){
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");		
	} else {
	alert("Sorry, try again.");
			}

}

// user flips card
	function flipCard (cardId){
		console.log("User flipped" + " " + cards[cardId]);
		cardsInPlay.push(cards[cardId]);
		checkForMatch;
	}
//calls the fliped card
	flipCard(0);
	flipCard(2);