function revealWords(word, template) {
    let sentence = template;

    let replacement = word.split(", ");
    replacement.forEach(el => {
        sentence = sentence.replace(("*".repeat(el.length)), el);
    });

    console.log(sentence);


}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');
console.log("----------");
revealWords('great', 'softuni is ***** place for learning new programming languages')