function modernTimes(input) {
    let result = [];

    let sentence = input.split(" ");

    for (let words of sentence) {

        if (words.includes("#")) {
            result.push(words);
        }


    }

    for (let el of result) {
        if (el.length > 0) {
            let search = el.substring(1, el.length);
            console.log(search);
        }
    }


}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('------');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')