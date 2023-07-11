function specialNumbers(num) {
  let sum = 0;
  let numText = num.toString();

  for (let i = 1; i <= num; i++) {
    let currNumber = i;
    

    if (currNumber < 10) {

      if ((currNumber % 10) === 5 || (currNumber % 10) === 7 || (currNumber % 10) === 11) {
        console.log(`${i} -> True`)
      } else {
        console.log(`${i} -> False`);
      }
    
    } else {
     

           let sumString = sum.toString();
           let newSum = 0;

           for (let y = 1; y <= sumString.length; y++){
               newSum += Number(sumString[y]);
           }

     if ((newSum % 10) === 5 || (newSum % 10) === 7 || (newSum % 10) === 11) {
            console.log(`${newSum} -> True`)
          } else {
            console.log(`${newSum} -> False`);
           }
  }


}
}


specialNumbers(15)