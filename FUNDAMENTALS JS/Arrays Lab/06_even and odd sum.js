function evenOdd(arr){
    let evenSum = 0;
    let oddSum = 0;
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++){
        arr[i] = Number (arr[i]);
    }

    for (let num of arr){
        if (num % 2=== 0){
            evenSum += num;
        } else {
            oddSum += num
        }
    }

    let difference = evenSum - oddSum;
    console.log (difference)

}

evenOdd([1,2,3,4,5,6])