function lastKNumbers(n, k) {
    let result = [];
    result.push(1);

     while(result.length < n){
        let currentValue = 0;
         if(result.length < k){
            currentValue = result.reduce((a,b) => a+b)
         } else {
            currentValue =  result.slice(result.length - k).reduce((a,b) => a + b)
         }
     
          result.push(currentValue)
     }
  console.log(result)
}
lastKNumbers(6, 3);
console.log("---------------");
lastKNumbers(8, 2)