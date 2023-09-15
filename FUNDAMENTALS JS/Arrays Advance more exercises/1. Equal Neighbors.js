function equalNeighbors(array) {
    let counterPair = 0;

    for (let i = 0; i < array.length; i++) {
        let nextArr = array[i];

        for (let j = 0; j < nextArr.length; j++) {
            let checkNum = nextArr[j];

            if (i !== array.length - 1) {

                if (checkNum === nextArr[j + 1]) {
                    counterPair++;
                }

                if (checkNum === array[i + 1][j]) {
                    counterPair++;
                }
                
            } else if (checkNum === nextArr[j + 1] || checkNum === array[i][j + 1]) {
                counterPair++;
            }
        }
    }
    console.log(counterPair);
}




equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])