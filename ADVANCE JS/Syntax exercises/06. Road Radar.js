function roadRadar(speed, area) {
    let status;
    switch (area) {
        
        case "city":
    if (speed > 50) {
        let difference = speed - 50;
        if (difference <= 20){
            status = speeding;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - ${status}`)
        } else if(difference <=40) {
            status = "excessive speeding";
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - ${status}`);
        } else {
            status = "reckless driving"
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - ${status}`);
        }
    } else {
        console.log(`Driving ${speed} km/h in a ${50} zone`)
    }
    break;

    case "motorway":
        if (speed > 130) {
            let difference =  speed - 130;
            if (difference <= 20){
                status = "speeding";
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - ${status}`);
            } else if (difference <= 40){
                status = "excessive speeding";
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - ${status}`);
            } else {
                status = "reckless driving";
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - ${status}`);
            }
        } else {
            console.log(`Driving ${speed} km/h in a ${130} zone`)
        }
        break;

        case "interstate":
            if (speed > 90) {
                let difference =  speed - 90;
                if (difference <= 20){
                    status = "speeding";
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - ${status}`);
                } else if (difference <= 40){
                    status = "excessive speeding";
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - ${status}`);
                } else {
                    status = "reckless driving";
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - ${status}`);
                }
            } else {
                console.log(`Driving ${speed} km/h in a ${90} zone`);
            }
            break;

            case "residential":
                if (speed > 20) {
                    let difference =  speed - 20;
                    if (difference <= 20){
                        status = "speeding";
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - ${status}`);
                    } else if (difference <= 40){
                        status = "excessive speeding";
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - ${status}`);
                    } else {
                        status = "reckless driving";
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - ${status}`);
                    }
                } else {
                    console.log(`Driving ${speed} km/h in a ${20} zone`);
                }
                break;

}

}

roadRadar(40, 'city');
console.log("------------");
roadRadar(120, 'interstate');
console.log("------");
roadRadar(200, 'motorway');
console.log("--------");
roadRadar(21, 'residential')