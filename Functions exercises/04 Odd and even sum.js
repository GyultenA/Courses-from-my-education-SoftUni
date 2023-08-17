function oddEvenSum (numbers){
  let numbersAsString = numbers.toString();
  let oddSum = 0;
  let evenSum = 0;
  let numbersLength = numbersAsString.length;

  for (let index  = 0; index < numbersLength; index ++){
     let currNumber = Number (numbersAsString[index]);

     if (currNumber % 2=== 0){
        evenSum += currNumber
     } else {
      oddSum += currNumber
     }
  }

  console.log (`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435)