function magicSum (array, num){
 

    for(let i = 0; i < array.length; i++){
     
        if (i !== 0){
            let prevNumber = Number (array[i -1]);

            for (let j = i; j < array.length; j++){
                let currNumber = Number (array[j]);
                let sum = currNumber + prevNumber;

                if (sum === num){
                   console.log (`${prevNumber} ${currNumber}`);
                 }
            }
        }
    }

}
magicSum([14, 20, 60, 13, 7, 19, 8],27)