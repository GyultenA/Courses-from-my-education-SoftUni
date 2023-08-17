function countString(text, word){
    let str = text.split(" ");

    let counter =0;

    for (let mach of str){
        if (mach === word){
            counter++;
        }
    }

    console.log(counter);


}

countString('This is a word and it also is a sentence','is');