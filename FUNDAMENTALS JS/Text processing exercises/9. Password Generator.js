function passwordgenerator(input){

    let firstString = input[0];
    let secondString = input[1]
    let word = input[2];
    let counter = 0;

    let concateString= firstString.concat(secondString);

    concateString = concateString.toLowerCase();
    word= word.toUpperCase();

    let password = concateString.split('');

    for(let i = 0; i < password.length; i++){

        let isVowel = checkVowel(password[i]);
          if (isVowel){
            password[i] = returnLetter();
          }
    }

    password = password.reverse().join("");
    console.log(`Your generated password is ${password}`);

    function checkVowel(letter){
        let vowelsLetter = ["a", "e", "i", "o", "u"];
   
        for (let element of vowelsLetter){
            if (letter === element){
                return true;
            }

        }
        return false;
    }

    function returnLetter(){
        let letter =  word[counter];
        counter++;
          if(counter === word.length){
            counter = 0
          }
          return letter;
    }
    


}

passwordgenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
console.log("-----");
passwordgenerator(['ilovepizza', 'ihatevegetables', 'orange'])