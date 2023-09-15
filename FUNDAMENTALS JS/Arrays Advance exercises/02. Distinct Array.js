function distinctArray(input) {
    let result = [];

    for (let number of input) {
      if(!result.includes(number)){
         result.push(number)
      }
    }
console.log(result.join(" "))


}


distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])