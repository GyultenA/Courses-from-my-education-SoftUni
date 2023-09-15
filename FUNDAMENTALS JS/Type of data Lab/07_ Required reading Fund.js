function requiredReading (pagesBook, pagesHour, days){
  let totalTime = pagesBook / pagesHour;
  let eachHourDay = totalTime / days;

  console.log (eachHourDay);
}
requiredReading (212,20 ,2);