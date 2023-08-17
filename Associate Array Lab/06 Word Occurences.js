function wordOccurrence(input) {

    let result = new Map();
    let counter = 0;

    for (let word of input) {

        if (!result.has(word)) {
            counter = 1;

        } else {
            counter = result.get(word) + 1;
        }

        result.set(word, counter);

    }

    let sorted = Array.from(result)
    sorted.sort((a, b) => b[1] - a[1]);

    for (let [word, counter] of sorted) {
        console.log(`${word} -> ${counter} times`);
    }

}

wordOccurrence(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])