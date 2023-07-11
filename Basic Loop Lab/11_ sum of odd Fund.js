function sumOfOdd(printCount) {
    let result = 0;
    let counter = 0;


    while (counter <= printCount) {

        for (let i = 1; i <= 100; i++) {

            if (i % 2 !== 0) {
                console.log(i);
                result += i;
                counter++;
            }

            if (counter === printCount) {
                break;
            }
        }

        if (counter === printCount) {
            break;
        }
        
    }
    console.log(`Sum: ${result}`);
}

sumOfOdd(5);