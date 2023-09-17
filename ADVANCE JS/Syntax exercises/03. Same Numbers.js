function sameNumbers(input) {
    let sum = 0;
    let isSame = true;
    let numberString = input.toString();
    let firstChar = numberString[0];
    for (let i = 0; i < numberString.length; i++) {
        if (numberString[i] !== firstChar) {
            isSame = false;
        }
        sum += Number(numberString[i])
    }
    console.log(isSame);
    console.log(sum)
}

sameNumbers(2222222);
sameNumbers(1234);