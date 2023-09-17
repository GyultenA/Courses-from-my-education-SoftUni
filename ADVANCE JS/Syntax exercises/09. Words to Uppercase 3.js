function wordsUpercase(text){

    let result = text.split(/[^a-zA-Z0-9]+/gm)
    for (let i = 0; i < result.length; i++){
        result[i] = result[i].toUpperCase();
    }
    if(!result[result.length]){
        result.pop()
    }
    console.log(result.join(", "));
}

wordsUpercase('Hi, how are you?');