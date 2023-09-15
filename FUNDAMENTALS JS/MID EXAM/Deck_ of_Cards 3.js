function deckOfCards(input) {

    let myArray = input.shift().split(", ");
    let numberN = input.shift();



    for (let element of input) {
        let commandsArray = element.split(", ");
        let currentCommand = commandsArray[0];


        switch (currentCommand) {

            case "Add":
                let currentCard1 = commandsArray[1];

                if (!myArray.includes(currentCard1)) {
                    myArray.push(currentCard1);
                    console.log("Card successfully added");
                } else {
                    console.log("Card is already in the deck");
                }
                break;

            case "Remove":
                let currentCard2 = commandsArray[1];
                if (!myArray.includes(currentCard2)) {
                    console.log("Card not found");
                } else {
                    myArray.splice(myArray.indexOf(currentCard2), 1);
                    console.log("Card successfully removed");
                }

                break;

            case "Remove At":
                let index1 = Number(commandsArray[1]);
                if (index1 >= -1) {
                    myArray.splice(index1, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Index out of range");
                }
                break;


            case "Insert":
                let index2 = Number(commandsArray[1]);
                let currentCard3 = commandsArray[2];


                if (index2 < 0 || index2 > myArray.length) {
                    console.log("Index out of range");
                } else if (!myArray.includes(currentCard3)) {
                    myArray.splice(index2, 0, currentCard3);
                    console.log("Card successfully added")
                } else if (myArray.includes(currentCard3)) {
                    console.log("Card is already added")
                }


                break;

        }


    }


    console.log(myArray.join(", "))



}

deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"]);
console.log("---------------");
deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts", "2", "Add, Two of Clubs", "Remove, Five of Hearts"]);
console.log("--------");
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"]);