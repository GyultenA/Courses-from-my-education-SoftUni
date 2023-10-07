function playingCards(face, suit) {
    const validFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const validSuit = ['S', 'H', 'D', 'C'];

    if (validFace.indexOf(face) === -1) {
       // return "Error"
        throw new Error("Error");
    }

    switch (suit) {
        case 'S': suit = '\u2660'; break;
        case 'H': suit = '\u2665'; break;
        case 'D': suit = '\u2666'; break;
        case 'C': suit = '\u2663'; break;
    }

    let card =  {
        face: face,
        suit: suit,
        toString() {
            return this.face + this.suit;

        }
    };

return card
}

console.log(playingCards('A', 'S').toString())
console.log(playingCards('10', 'H').toString())
console.log(playingCards('1', 'C').toString())