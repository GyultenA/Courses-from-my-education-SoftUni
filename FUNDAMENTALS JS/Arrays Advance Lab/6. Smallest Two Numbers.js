function smallestNumber(arr) {

    arr.sort((a, b) => a - b);
    console.log(arr[0] + " " + arr[1]);

    return arr.sort((a, b) => a - b).splice(0, 2).join(" ");




}
smallestNumber([30, 15, 50, 5])
console.log("--------")
console.log(smallestNumber([3, 0, 10, 4, 7, 3]))
