function sortingNumbers(input){
    let sortedNumbers = input.sort((a,b) => a-b);
    let resultNumbers = [];

     while(input.length !== 0){
        resultNumbers.push(input.shift());
        resultNumbers.push(input.pop())
     }

    return resultNumbers;

}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
