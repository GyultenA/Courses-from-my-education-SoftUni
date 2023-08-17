function mergeArrays (firstArray, secondArray){

    let result = [];
    
     for (let i = 0; i < firstArray.length; i++){

        if (i % 2 === 0){
            result [i] = Number(firstArray[i]) + Number(secondArray[i])
        } else {
            result[i]= firstArray[i] + secondArray[i];
        }

     }

     console.log (result.join(" - "));

}

mergeArrays(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])