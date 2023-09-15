function asciiSumator(input){
    let firstSymbol = input[0];
    let secondSymbol =input[1];
    let text = input[2];

    let firstSymbolAscii = Math.min(firstSymbol.charCodeAt(), secondSymbol.charCodeAt());
    let secondSymbolAscii = Math.max(firstSymbol.charCodeAt(), secondSymbol.charCodeAt());
    let sum = 0;

    for (let char of text) {
        let charASciiCode = char.charCodeAt();
        if (charASciiCode > firstSymbolAscii && charASciiCode < secondSymbolAscii) {
            sum += charASciiCode;
        }
    }
    console.log(sum)

}

asciiSumator(['.','@','dsg12gr5653feee5']);
console.log("----");
asciiSumator(['?','E','@ABCEF']);