function lunchBreak(input) {
    let serialName = input[0];
    let epizodTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = (1 / 8) * breakTime;
    let leisureTime = (1 / 4) * breakTime;

    let totalSerialTime = breakTime - (lunchTime + leisureTime);

    if (totalSerialTime >= epizodTime) {
        let timeLeft = Math.ceil (totalSerialTime - epizodTime);
        console.log(`You have enough time to watch ${serialName} and left with ${timeLeft} minutes free time.`)
    } else {
        let timeneNeeded = Math.ceil (epizodTime - totalSerialTime);
        console.log(`You don't have enough time to watch ${serialName}, you need ${timeneNeeded} more minutes.`)
    }

}

lunchBreak (["Teen Wolf","48","60"]);

