function replaceChar(input) {

    let firstChar = input[0];
    let result = "";

    for (let i = 1; i < input.length; i++) {

        if (firstChar !== input[i]) {
            result += firstChar;

            firstChar = input[i]
        }

    }
    result += input[input.length - 1];

    console.log(result)

}

replaceChar('aaaaabbbbbcdddeeeedssaa');
console.log("----");
replaceChar('qqqwerqwecccwd')