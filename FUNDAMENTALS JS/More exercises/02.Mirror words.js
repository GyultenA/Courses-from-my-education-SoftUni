function mirrorWords(input) {
    let text = input;
    let wordOne = [];
    let wordTwo = [];

    let regex = /([#@]+?)(?<wordOne>[A-Za-z]{3,})\1{2}(?<wordTwo>[A-Za-z]{3,})\1+?/g;
    ///([@|#]+?)(?<wordOne>[A-Za-z]{2,})([#|@]+?{2})(?<wordTwo>[A-Za-z]{2,})\1+?/gm
                //([#@]+?)(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1+?/g;

    let result = regex.exec(input);
    let count = 0;

    //if (result === null) {
    // console.log("No word pairs found!");
    // } 

    while (result) {
        let item = result.groups.wordOne
        wordOne.push(item);
        let i = result.groups.wordTwo
        wordTwo.push(i)
        count++
        result = regex.exec(input)

    }

    let validPairs = [];

    for (let index = 0; index < wordTwo.length; index++) {
        let curr = wordTwo[index].split("").reverse().join("");

        for (let i = 0; i < wordOne.length; i++) {
            if (curr === wordOne[i]) {
                validPairs.push(`${curr} <=> ${wordTwo[index]}`);
            }
        }
    }

    if (count < 1) {
        console.log("No word pairs found!");
    } else {
        console.log(`${count} word pairs found!`);
    }

    if (validPairs.length < 1) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(validPairs.join(", "))
    }

}

mirrorWords('@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r')

console.log("---------------")
mirrorWords('#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@')