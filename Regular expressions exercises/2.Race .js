function race(input) {
    let listParticipants = input.shift().split(", ");

    let objParticipants = {};

    for (let name of listParticipants) {
        objParticipants[name] = 0;
    }

    let current = input.shift();
    let lettersRegex = /[A-Za-z]/g;
    let digitRegex = /[0-9]/g;

    while (current !== "end of race") {

        let currentName = current.match(lettersRegex).join("");
        let distance = current.match(digitRegex);

        let currentDistance = 0;
        distance.map(d => currentDistance += Number(d));

        if (objParticipants.hasOwnProperty(currentName)) {
            objParticipants[currentName] += currentDistance;

        }

        current = input.shift();
    }

    let sortedParticipants = Object.entries(objParticipants).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedParticipants[0][0]}`);
    console.log(`2nd place: ${sortedParticipants[1][0]}`);
    console.log(`3rd place: ${sortedParticipants[2][0]}`);

    //sortedParticipants.forEach(el =>console.log(el))

}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])