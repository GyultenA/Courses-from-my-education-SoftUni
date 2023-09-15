function valueOfString(input) {

    let text = input[0];
    let action = input[1];
    let sum = 0;
    let resultText = text.split("");

    if (action === "UPPERCASE") {

        for (let char of resultText) {
            char = char.charCodeAt();
            if (char >= 65 && char <= 90) {
                sum += char;
            }
        }
    }

    if (action === "LOWERCASE") {

        for (let char of resultText) {
            char = char.charCodeAt();
            if (char >= 97 && char <= 122) {
                sum += char;
            }
        }
    }
    console.log(`The total sum is: ${sum}`)


}
valueOfString(['AC/DC', 'UPPERCASE']);
console.log("-----");

valueOfString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);

