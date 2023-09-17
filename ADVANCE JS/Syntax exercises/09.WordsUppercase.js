function wordsUpercase(text){
    let result = text.match(/\w+/g).join(", ").toUpperCase();
    console.log(result);
}

wordsUpercase('Hi, how are you?');