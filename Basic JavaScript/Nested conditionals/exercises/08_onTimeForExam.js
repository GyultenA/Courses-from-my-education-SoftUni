function timeForExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let totalExamTime = examHour * 60 + examMin;
    let totalArrivalTime = arrivalHour * 60 + arrivalMin;

    let totalDifrTime = Math.abs(totalExamTime - totalArrivalTime);

    let difrHour = Math.floor(totalDifrTime / 60);
    let difrMin = totalDifrTime % 60;

    if (totalExamTime === totalArrivalTime) {
        console.log(`On time`);
    } else if (totalExamTime < totalArrivalTime) {
        console.log(`Late`);




        if (totalDifrTime < 60) {
            console.log(`${totalDifrTime} minutes after the start`);
        } else {

            if (difrMin < 10) {
                console.log(`${difrHour}:0${difrMin} hours after the start`);
            } else {
                console.log(`${difrHour}:${difrMin} hours after the start`);
            }
        }
    } else {
        if (totalDifrTime <= 30) {
            console.log(`On time`);
            console.log(`${totalDifrTime} minutes before the start`);
        } else {
            console.log(`Early`);

            if (totalDifrTime < 60) {
                console.log(`${totalDifrTime} minutes before the start`);
            } else {
                if (difrMin < 10) {
                    console.log(`${difrHour}:0${difrMin} hours before the start`);
                } else {
                    console.log(`${difrHour}:${difrMin} hours before the start`);
                }
            }
        }


    }

}


timeForExam(["9",
"00",
"8",
"30"])

