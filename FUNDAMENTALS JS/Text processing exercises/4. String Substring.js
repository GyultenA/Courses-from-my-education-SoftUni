function substringString(word, text){

    let isFound = false;
    let sentence = text.toLowerCase().split(" ");
    

   for (let element of sentence){
    if (element === word.toLowerCase()){
        isFound = true;
        console.log(element);

    }
   }

 if (!isFound){
    console.log(`${word} not found!`)
 }

}

substringString('javascript','JavaScript is the best programming language');
console.log("----------");
substringString('python','JavaScript is the bestprogramming language')