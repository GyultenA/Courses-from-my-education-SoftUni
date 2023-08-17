function hardWords(input) {

    let text = input[0];
    let words = input[1];

    words = words.sort((w1, w2) => w2.length - w1.length);

    for (let element of words) {

        let template = "_".repeat(element.length);


        while (text.includes(template)) {
            text = text.replace(template, element);
        }
    }

    console.log(text);

}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])