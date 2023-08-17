function sequence (input){
    let objSequence = {};
    objSequence.arr = [];
    objSequence.arr.push(JSON.parse(input[0]).sort((a, b) => b - a));

    for (let i = 1; i < input.length; i++) {
        let currentArr = JSON.parse(input[i]).sort((a, b) => b - a);
        let check = currentArr[0];
        let internalChecker = objSequence.arr.find(el => el.find(x => x === check));
        if (!internalChecker) {
            objSequence.arr.push(currentArr);
        }
        // console.log(internalChecker);
    }

    objSequence.arr = objSequence.arr.map(JSON.stringify);
    [...new Set(objSequence.arr)].map(JSON.parse).sort((a, b) => a.length - b.length).forEach(arr => {
        console.log(`[${arr.join(', ')}]`);
    })
}

sequence(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])