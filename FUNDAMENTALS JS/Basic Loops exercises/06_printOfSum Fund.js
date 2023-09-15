function printSum (start, end){
  let sumNumber = 0;
  let numberRows = "";

  for (let i = start; i <= end; i++){
    sumNumber += i;
    numberRows += `${i} `;
  }

  console.log (numberRows);
  console.log (`Sum: ${sumNumber}`);

}

printSum (0, 26);

