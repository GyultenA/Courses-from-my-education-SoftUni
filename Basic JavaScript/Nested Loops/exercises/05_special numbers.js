function specialNumber (input){
 let enterNumber = Number (input[0]);
  let start = 1111;
  let end = 9999;
  let printNum = " ";

  for (let i = start; i <= end; i++){
     let currentNum = "" + i;

         for (let j = 0; j < currentNum.length; j++){
           let jNum = Number (currentNum.charAt(j));

            if (enterNumber % jNum !== 0){
               break;
            }
         if (enterNumber % jNum === 0 && j === 3){
            printNum += " "+ i;
         }

         }

       

  }




 console.log (printNum)

}
specialNumber (["11"])