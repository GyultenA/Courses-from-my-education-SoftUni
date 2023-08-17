function listOfProduct(arr) {
    let sortArray = arr.sort();

    for (let i = 0; i < sortArray.length; i++) {
        console.log(`${i + 1}.${sortArray[i]}`);

    }

}

listOfProduct(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);

   ///console.log(sortArray.map((a) => 1 + "." + a).join("\n"));