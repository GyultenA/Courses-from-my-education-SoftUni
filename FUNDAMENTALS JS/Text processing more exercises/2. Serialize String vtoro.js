function serializeString(array) {
    let charsObj = {};

    for (let i = 0; i < array[0].length; i++) {
        if (charsObj.hasOwnProperty(array[0][i])) {
            charsObj[array[0][i]].push(i);
        } else {
            charsObj[array[0][i]] = [i]
        }
    }
    for (let char in charsObj) {
        let indexes = charsObj[char].join('/')
        console.log(`${char}:${indexes}`);
    }
}

serializeString(["abababa"]);
console.log("------");
serializeString(["avjavamsdmcalsdm"]);