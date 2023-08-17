function charactersRange (charOne, charTwo){

    let startChar = Math.min(charOne.charCodeAt(),charTwo.charCodeAt());
    let endChar = Math.max(charOne.charCodeAt(), charTwo.charCodeAt());

    let charArray = [];

    for (let current = startChar + 1; current < endChar; current++){
        // console.log (String.fromCharCode(current));
        charArray.push(String.fromCharCode(current));
    }
    return charArray.join(" ");

    //console.log (charArray.join(" "));

}

charactersRange('a','d');