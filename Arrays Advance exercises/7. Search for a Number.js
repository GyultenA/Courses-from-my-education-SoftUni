function searchNumber (numberArr, command){
    let elementsNumber = command[0];
    let deleteNum = command[1];
    let searchNum = command[2];

    let result = numberArr.slice(0, elementsNumber);
    result.splice(0, deleteNum);

    let numberCounter = result.filter(e => e === searchNum).length;

    console.log(`Number ${searchNum} occurs ${numberCounter} times.`)

}

searchNumber([5, 2, 3, 4, 1, 6],[5, 2, 3])
