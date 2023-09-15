function dayOfWeek (day){

    let dayWeek = ["undefind", "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"]

    let result = dayWeek[day];

    if (result){
        console.log(result);
    } else {
        console.log ("Invalid day!");
    }

}

dayOfWeek(5)