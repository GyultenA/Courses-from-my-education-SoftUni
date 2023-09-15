function maxNumber (input){
   let index = 0;
   let command = input [index];
   index++;

   let maxNum = Number.MIN_SAFE_INTEGER;
   // or Number (input[0])

   while (command !== "Stop"){
    let currentNumber = Number (command);

    if (currentNumber > maxNum){
        maxNum = currentNumber;
    }

    command = input [index];
    index++;
   }

   console.log (maxNum)
   // console.log (Number.MAX_SAFE_INTEGER)
   // console.log (Number.MIN_SAFE_INTEGER)

}

maxNumber (["100",
"99",
"80",
"70",
"Stop"])
