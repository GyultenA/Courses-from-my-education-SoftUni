function flightSchedule(input) {

    let flights = input[0];
    let changedStatusFligths = input[1];
    let status = input[2].toString();

    let obj = {};

    for (let current of flights) {
       
        let [numberFly, city] = current.split(" ");

        obj[numberFly] = {
            Destination: city,
            Status: "Ready to fly",
        }

    }

    for (let changed of changedStatusFligths) {
        let [numberFly, check] = changed.split(" ");

        if (obj.hasOwnProperty(numberFly)) {
            obj[numberFly].Status = check;
        }
    }

    for (let flight in obj) {

        if (obj[flight].Status === status) {
            console.log(obj[flight]);
        }
    }


}

flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
['Cancelled']]);

flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama','WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], ['Ready to fly']
])