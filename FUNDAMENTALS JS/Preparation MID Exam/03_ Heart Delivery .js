function heartDelivery(arr) {

    let firstLine = arr.shift().split('@');
    let nextLine = arr.shift();
    let positionIndex = 0;

    while (nextLine !== 'Love!') {
        let result = nextLine.split(' ');
        positionIndex += Number(result[1]);

        if (positionIndex > firstLine.length - 1) {
            positionIndex = 0;
        }

        if (firstLine[positionIndex] === 0) {
            console.log(`Place ${positionIndex} already had Valentine's day.`);
        } else {
            firstLine[positionIndex] = firstLine[positionIndex] - 2;
            if (firstLine[positionIndex] === 0) {
                console.log(`Place ${positionIndex} has Valentine's day.`);

            }
        }
        nextLine = arr.shift();

    }

    console.log(`Cupid's last position was ${positionIndex}.`);

    let counter = 0;
    let resultFlag = true;

    firstLine.forEach(element => {
        if (element !== 0) {
            resultFlag = false;
            counter++
        }
    });

    if (resultFlag) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${counter} places.`);
    }

}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
console.log("----------------");
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
