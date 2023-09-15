function swimmingRecord(input) {
    let recordSeconds = Number (input[0]);
    let distanceMeters = Number (input[1]);
    let secondsTimePerMeter = Number (input[2]);

    let swimAcrossSeconds = distanceMeters * secondsTimePerMeter

    let resistance = Math.floor (distanceMeters/15) ;
    let waterResistance = resistance* 12.5;
    let totalSwimTime = swimAcrossSeconds + waterResistance;

    if (totalSwimTime >= recordSeconds){
        let slower = totalSwimTime - recordSeconds;
        console.log (`No, he failed! He was ${slower.toFixed(2)} seconds slower.`);
    } else {
        console.log (`Yes, he succeeded! The new world record is ${totalSwimTime.toFixed(2)} seconds.`);
    }
}

swimmingRecord (["55555.67","3017","5.03"]);
