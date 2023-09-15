function arrayManipulations (arr){
   
    let myArr = arr.shift().split(' ').map(Number);


    for (let i = 0; i < arr.length; i++){
        let [command, firstNum, secondNum] = arr[i].split(' ');
        firstNum = Number (firstNum);
        secondNum = Number(secondNum);
      
        
        switch(command){
            case "Add":addNum(firstNum); break;
            case "Remove": remove(firstNum); break;
            case "RemoveAt": removeAt(firstNum); break;
            case "Insert": insert(firstNum, secondNum); break;
        }

    }
    function addNum (elements){
        return myArr.push(elements);
    }

    function remove(num){
        return myArr = myArr.filter(el => el !==num);
    }

    function removeAt(index){
        return myArr.splice(index, 1);
    }

    function insert(num, index){
        return myArr.splice(index,0,num);
    }

    console.log(myArr.join(' '))

}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])

console.log("----")
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'])

