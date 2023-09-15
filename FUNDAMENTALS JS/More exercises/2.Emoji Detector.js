function emojiDetector(input) {
    let resultCool = [];
    let resultItems = [];
    let buff = []
    let sum = 1;

    let regex = /([:]{2}[A-Z][a-z]{2,}[:]{2})|([*]{2}[A-Z][a-z]{2,}[*]{2})/gm
    //[::**]{2}([A-Z][a-z]{2,})[::**]{2}/gm
    //([::**]{2})([A-Z][a-z]{2,})([::**]{2})/gm
    ///([::**]{2})(?<item>[A-Z][a-z]{2,})([::**]{2})/gm
    //(:{2}|\*{2})(?<values>[A-Z][a-z]{2,})(\1)
    let text = regex.exec(input)

    while (text) {
        resultItems.push(text[0])
        text = regex.exec(input);
    }
    let regexDigit = /\d/g
    let matchDigit = regexDigit.exec(input);

    while (matchDigit) {
        resultCool.push(matchDigit[0]);
        matchDigit = regexDigit.exec(input);
    }

    for (let i = 0; i < resultCool.length; i++) {
        let num = Number(resultCool[i]);
        sum = sum * num
    }

    let sumChar = 0;
    for (let i = 0; i < resultItems.length; i++) {
        let current = resultItems[i];

        for (let char of current) {
            if (char !== ":" && char !== "*") {
                sumChar += char.charCodeAt()
            }
        }
        if (sumChar >= sum) {
            buff.push(resultItems[i])
        }

        sumChar = 0;

    }
    console.log(`Cool threshold: ${sum}`)
    console.log(`${resultItems.length} emojis found in the text. The cool ones are:`)
    console.log(buff.join("\n"))

}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log("-----------");
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
console.log("0---------------");
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])