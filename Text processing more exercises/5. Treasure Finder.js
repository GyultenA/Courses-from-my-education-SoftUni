function treasureFinder(input) {
    let keyNumbers = input.shift().split(" ").map(Number);
    let line = input.shift();

    while (line !== "find") {
        let resultArr = [];
        let resultNum = keyNumbers;
        let lineLength = line.length;

        while (resultNum.length < lineLength) {
            resultNum = resultNum.concat(resultNum);
        }
        resultNum = resultNum.slice(0, lineLength);

        for (let i = 0; i < lineLength; i++) {
            let currentChar = String.fromCharCode(line[i].charCodeAt() - resultNum[i]);
            resultArr.push(currentChar);
        }
        let result = resultArr.join("");
        let tokens = result.split("&");
        let nameTreasure = tokens[1];
        let cordination = tokens[2].split("<")[1].slice(0, -1);
        console.log(`Found ${nameTreasure} at ${cordination}`)
        line = input.shift();

    }


}

treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"])