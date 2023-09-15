function sortingNumbers(arr){
  let sortArray = arr.sort((a,b) => b-a);
  let result = [];
  let arrayLength = sortArray.length
 

  for (let i = 0; i <= arrayLength; i++){
     let currNumber = sortArray.shift();
     let lastNumber = sortArray.pop();

     result.push(currNumber);
     result.push(lastNumber);
  }

  console.log(result.join(' '));

}

sortingNumbers([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);