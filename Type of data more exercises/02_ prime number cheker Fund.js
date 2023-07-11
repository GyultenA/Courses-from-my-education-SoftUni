function primeNumber (num){

    if ((num % 2)=== 0 || (num % 3) === 0 || (num % 5) === 0 ){
        console.log (false);
    } else {
        console.log (true);
    }

}

primeNumber(83)