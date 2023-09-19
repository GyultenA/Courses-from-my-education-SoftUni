function timeToWalk(steps, footprint, speed) {
    let speedSecunds = speed / 3.6;
    let distanceInM = steps * footprint;
    let time = distanceInM / speedSecunds;
    let rest = Math.floor(distanceInM / 500);


    let timeInMin = Math.floor(time / 60);//75 %60 = 1.15
    let timeInSec = Math.round(time - (timeInMin * 60));
    let hours = Math.floor(timeInMin / 60);

    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minToPrint = (timeInMin % 60) + rest;
    minToPrint = minToPrint < 10 ? `0${minToPrint}` : `${minToPrint}`;
    let secondToPrint = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;


    console.log(`${hoursToPrint}:${minToPrint}:${secondToPrint}`);

}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
