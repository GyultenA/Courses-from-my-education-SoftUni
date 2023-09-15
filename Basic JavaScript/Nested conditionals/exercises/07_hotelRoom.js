function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = nights * 50;
        apartmentPrice = nights * 65;
    } else if (month === "June" || month === "September") {
        studioPrice = nights * 75.20;
        apartmentPrice = nights * 68.70;
    } else if (month === "July" || month === "August") {
        studioPrice = nights * 76;
        apartmentPrice = nights * 77;
    }

    if ((nights > 7 && nights <= 14) && (month === "May" || month === "October")) {
        studioPrice = studioPrice - (studioPrice * 0.05);
    } else if (nights > 14 && (month === "May" || month === "October")) {
        studioPrice = studioPrice - (studioPrice * 0.3);
    } else if (nights > 14 && (month === "June" || month === "September")) {
        studioPrice = studioPrice - (studioPrice * 0.2);
    } 
    
    if (nights > 14) {
        apartmentPrice = apartmentPrice - (apartmentPrice * 0.1);
    }


    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

hotelRoom (["June","14"]);

