const cards = ["queen", "queen", "king", "king"]
cardsInPlay = [ ]

const cardOne = cards[0]
cardsInPlay.push('cardOne');
console.log("User flipped" + " " + cardOne)
	
const cardTwo = cards[2]
cardsInPlay.push('cardTwo');
console.log("User flipped" + " " + cardTwo)	

//checking if two cards have been played
if (cardsInPlay.length === 2){
		//check it the crads match
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");		
	} else {
	alert("Sorry, try again.");
			}
		}
	