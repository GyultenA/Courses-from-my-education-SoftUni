function ladyBugs(input) {
    let sizeOfField = Number(input[0]);
    let startingIndexes = input[1].split(" ");
    let newArray = [];

    for (let i = 0; i < sizeOfField; i++) {
        newArray.push(0);
    }

    for( let index = 0; index < startingIndexes.length; index++){
        let position = startingIndexes[index];

        if (position >= 0 && position < newArray.length){
            newArray[position] = 1;
        }
    }


    for (let i = 2; i < input.length; i++) {
        let arrayCommand = input[i].split(" ");
        let currentPosition = arrayCommand[0];
        let direction = arrayCommand[1];
        let flyLength = arrayCommand[2];




        if (direction === "left") {

            if (newArray[currentPosition] === 1) {
                newArray[currentPosition] = 0;
                currentPosition -= flyLength;


                while (newArray[currentPosition] === 1) {
                    currentPosition -= flyLength

                    if (currentPosition < 0){
                        break;
                    }
                }


                if (currentPosition >= 0) {
                    newArray[currentPosition] === 1;

                }

            }

        } else {
            if (newArray[currentPosition] === 1) {
                newArray[currentPosition] = 0;
                currentPosition += flyLength;

                while (newArray[currentPosition] === 1) {
                    currentPosition += flyLength;

                    if (currentPosition > (newArray.length - 1)) {
                        break;
                    }
                }
                
                if (currentPosition < newArray.length) {
                    newArray[currentPosition] = 1;
                }
            }
        }


    }

    console.log(newArray.join(' '));


}

ladyBugs([3, '0 1', '0 right 1', '2 right 1'])
console.log("--------------");
ladyBugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'])