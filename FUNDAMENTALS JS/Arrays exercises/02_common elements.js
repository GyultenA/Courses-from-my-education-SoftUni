function elements(firstArray, secondArray) {

    let firstArrayLength = firstArray.length;
    let secondArrayLength = secondArray.length;


    for (let i = 0; i < firstArrayLength; i++) {
        let currElement = firstArray[i];

        if (secondArray.includes (currElement)){
                console.log(currElement);
            }

        }

    }

elements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])