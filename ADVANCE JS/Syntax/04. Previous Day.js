function previousDay(year, month, day) {
    let searchDate = new Date(year, month - 1, day);
    searchDate.setDate(searchDate.getDate() - 1);

    console.log(`${searchDate.getFullYear()}-${searchDate.getMonth() + 1}-${searchDate.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);