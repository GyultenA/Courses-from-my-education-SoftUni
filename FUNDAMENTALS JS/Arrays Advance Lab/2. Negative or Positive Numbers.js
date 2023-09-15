function positiveNegativeNum (arr){
  let newArray =[];

  for (let i = 0; i < arr.length; i++){
     let currNumber = Number(arr[i]);
        if (currNumber < 0){
           newArray.unshift(currNumber)
        } else {
            newArray.push(currNumber)
        }

  }


  console.log(newArray.join("\n"));

  let result = [];

  for (let el of arr){
    el = Number(el)

    if (el < 0){
        result.unshift(el)
    }else {
        result.push(el)
    }

  }
  for (let el of result){
    console.log(el);
  }



}

positiveNegativeNum(['7', '-2', '8', '9']);
console.log("------");
positiveNegativeNum(['3', '-2', '0', '-1']);