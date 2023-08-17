function kNumbersSequence(n, k) {
    
    let result = [1];

    while (n > result.length) {

        let kArr = result.slice(-k);
        let sum = 0;

        for (let i = 0; i < kArr.length; i++) {
            sum += kArr[i];   

        }
        result.push(sum);

    }
    console.log(result.join(" "));
}


kNumbersSequence(6, 3);
console.log("---")
kNumbersSequence(8, 2);