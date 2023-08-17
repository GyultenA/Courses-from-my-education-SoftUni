function reverseArray(num, arr){
    let newArray = [];

    for (let i = 0; i < num; i++){
        newArray.push(arr[i]);
    }
      let buff = "";
    for (let i = newArray.length -1; i >= 0; i--){
        buff += newArray[i] + " ";
    }
    
    console.log (buff);

}

reverseArray(3, [10, 20, 30, 40, 50]);
console.log ("--------")
reverseArray(4, [-1, 20, 99, 5]);
console.log ("-------------");
reverseArray(2, [66, 43, 75, 89, 47]);