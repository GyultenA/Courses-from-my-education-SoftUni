function printDeckOfCards(arr) {
    function createCard(face, suit) {
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

        let card = {
            face: face,
            suit: suit,
            toString() {
                return this.face + this.suit;

            }
        };

        return card

    }

    let result = [];
    for (let char of arr) {
        let face = ""
        let suit = ""
        if (char.length > 2) {
            face = char.slice(0, 2);
            suit = char.slice(-1);
        } else {

             face = char.slice(0, 1);
             suit = char.slice(-1);
        }

        try {
            let card = createCard(face, suit).toString()
            result.push(card)
        } catch (ex) {
            console.log(`Invalid card: ${char}`);
            return
        }

    }
    console.log(result.join(" "))
}





printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])