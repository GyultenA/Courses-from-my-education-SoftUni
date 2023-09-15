function reverseArray(num, arr) {
    let newArray = [];

    for (let i = 0; i < num; i++) {
        newArray.push(arr[i]);
    }
    let arrayReverse = [];
    for (let i = newArray.length - 1; i >= 0; i--) {
        arrayReverse.push(newArray[i]);
    }

    console.log(arrayReverse.join(" "));

}

reverseArray(3, [10, 20, 30, 40, 50]);
console.log("--------")
reverseArray(4, [-1, 20, 99, 5]);
console.log("-------------");
reverseArray(2, [66, 43, 75, 89, 47]);