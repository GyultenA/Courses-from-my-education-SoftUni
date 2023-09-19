function smallestNumber(input){
    let result = [];
    let newArray = input.sort((a,b) => a-b);
    result.push(...newArray.slice(0,2));

    console.log(result.join(" "));
}

smallestNumber([30, 15, 50, 5]);
smallestNumber([3, 0, 10, 4, 7, 3]);