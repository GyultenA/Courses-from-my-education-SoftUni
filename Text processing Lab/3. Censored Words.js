function censoredWord(text, word) {
   

    let result;

    while (text.includes(word)) {

        let startindex= text.indexOf(word);

        let endIndex= startindex + word.length;

        result = text.substring(0, startindex);
        result += "*".repeat(word.length)

        result += text.substring(endIndex)
        text = result

    }
    console.log(text)


    // vtoro

    let newResult = text.split(word);

    console.log(newResult.join("*".repeat(word.length)));

   // treti
   //let newres;

   //while()
   //text = text.replace(word, "*", repeat)




}

censoredWord('A small sentence with some words', 'small')