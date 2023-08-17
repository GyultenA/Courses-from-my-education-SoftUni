function reversePlace (arr){
    let arrLength = arr.length 
    let buff = "";

    for (let i = arrLength-1; i >= 0; i--){
        buff += arr[i] + " ";
    }

    console.log (buff);

}
reversePlace(['a', 'b', 'c', 'd', 'e']);
console.log ("-----");
reversePlace(['abc', 'def', 'hig', 'klm', 'nop']);