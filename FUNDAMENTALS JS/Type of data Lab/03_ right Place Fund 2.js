function rightPlace (string, symbol, text){
    let newStr = string.replace ("_",symbol);

    if (newStr === text){
        console.log ("Mached");
    } else {
        console.log("No Mached");
    }
}

rightPlace ('Str_ng', 'I','Strong');