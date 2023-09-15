function arrayManipulator(numbersArray, commandsArray) {
    let newArray = numbersArray.slice(0);
 
    for (let elements of commandsArray) {
        let currentCommandArray = elements.split(' ');
        let currentCommand = currentCommandArray[0];
        let index = Number(currentCommandArray[1]);
        let element = Number(currentCommandArray[2]);
 
        switch (currentCommand) {
            case 'add':
                newArray.splice(index, 0, element);
                break;
            case 'addMany':
 
                for (let i = 2; i < currentCommandArray.length; i++) {
                    newArray.splice(index, 0, Number(currentCommandArray[i]));
                    index++;
                }
 
                break;
            case 'contains':
                console.log(newArray.indexOf(index)); //Това е елемент в случея, а не индекс. Неподходящо име.
                break;
            case 'remove':
                newArray.splice(index, 1);
                break;
            case 'shift':
                for (let i = 1; i <= index; i++)  {
                    let shiftedNumbers = newArray.shift();
                    newArray.push(shiftedNumbers);
                }
                break;
            case 'sumPairs':
                let temporaryArray = [];
 
                for (let j = 0; j < newArray.length; j += 2) {
                    let crrntNum = newArray[j];
                    let nextNum = newArray[j + 1];
                    if (newArray.length % 2 !== 0 && j === newArray.length - 1) {
                        temporaryArray.push(crrntNum);
                    } else {
                        temporaryArray.push(crrntNum + nextNum);
                    }
                }
 
                newArray = temporaryArray.slice(0);
                break;
            case 'print':
                console.log(`[ ${newArray.join(', ')} ]`);
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
console.log("---------------");
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
console.log("--------------");
arrayManipulator([2, 2, 4, 2, 4]
["add 1 4", "sumPairs", "print"])