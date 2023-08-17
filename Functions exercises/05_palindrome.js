function palindrome(array) {

    for (let index = 0; index < array.length; index++) {
       
        let numberString = array[index]. toString();
        let reversedNumber = numberString.split("").reverse().join("");

        if (numberString === reversedNumber){
            console.log (true);
        }else {
            console.log (false)
        }
    }

}

palindrome([123, 323, 421, 121])