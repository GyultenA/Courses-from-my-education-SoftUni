function serializeString(input){

    let text = input[0].split('');
    let resultArr = [];

    for (let i = 0; i < text.length; i++) {
        let resultIndex = '';
        let char = text[i];

        for (let j = 0; j < text.length; j++) {
            if (char === text[j]) {
                if (!resultIndex.includes(char)) {
                    resultIndex += char + ':' + j + '/';
                } else {
                    resultIndex += j + '/';
                }
            }
        }
        if (!resultArr.includes(resultIndex)) {
            resultArr.push(resultIndex);
        }
    }

    resultArr = resultArr.map(x => x = x.slice(0, x.length - 1))
    console.log(resultArr.join('\n'));


}

serializeString(["abababa"]);
console.log("------");
serializeString(["avjavamsdmcalsdm"]);