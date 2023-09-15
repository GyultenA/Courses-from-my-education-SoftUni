function sleepyTom(input) {
    let holidayDays = Number (input[0]);
    let workDays = 365 - holidayDays;

    let workDaysPlay = workDays * 63;
    let daysPlay = holidayDays * 127;

    let playTime = workDaysPlay + daysPlay
    let lessTime = Math.abs(30000 - playTime);

    let lessTimeHour = Math.floor (lessTime/60);
    let lessTimeMin = lessTime % 60;

    if(playTime <= 30000){
        console.log ("Tom sleeps well");
        console.log (`${lessTimeHour} hours and ${lessTimeMin} minutes less for play`);
    }else {
        console.log ("Tom will run away");
        console.log (`${lessTimeHour} hours and ${lessTimeMin} minutes more for play`);
    }
}

sleepyTom (["113"]);
