function printNElement(array) {
    let nPrint = array.pop();

    let newArray = [];
    

    for (let index in array) {
        if (index % nPrint === 0) {
            newArray.push(array[index]);
        }
    }  

    console.log(newArray.join(" "));

}

printNElement(['5', '20', '31', '4', '20', '2']);