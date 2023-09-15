function rightPlace(text, char, newText){
    let result = text.replace("_",char);

    let textChar = result === newText ? "Matched": "Not Matched";
    console.log (textChar);

}
rightPlace('Str_ng', 'I','Strong');