function roadRadar(speedStr, area) {
    let speed = Number(speedStr);
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;

    switch (area) {
        case 'motorway':
            {
                let difference = speed - motorwayLimit;
                speed <= motorwayLimit ? console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`) : console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${statusCheck(difference)}`);
            }
            break;
        case 'interstate':
            {
                let difference = speed - interstateLimit;
                speed <= interstateLimit ? console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`) : console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${statusCheck(difference)}`);
            }
            break;
        case 'city':
            {
                let difference = speed - cityLimit;
                speed <= cityLimit ? console.log(`Driving ${speed} km/h in a ${cityLimit} zone`) : console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${statusCheck(difference)}`);
            }
            break;
        case 'residential':
            {
                let difference = speed - residentialLimit;
                speed <= residentialLimit ? console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`) : console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${statusCheck(difference)}`);
            }
            break;
    }

    function statusCheck(difference) {
        if (difference <= 20) {
            return 'speeding';
        } else if (difference <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');