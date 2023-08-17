function letterChangeNumber (input){

    let array = input.trim().split(" ");
    let nums = [];

    for (let i of array){
        let num = readString(i);
        nums.push(num);
    }
    let result = sumNumbers(nums);
    console.log (result.toFixed(2));

    function readString(i){
        let arr = i.split('');
        let firstLetter = arr.shift();
        let lastLetter =arr.pop();
        let number = Number(arr.join(""));

        number = firstLetterResult(firstLetter, number);
        number = lastLetterResult (lastLetter, number);
        return number;
    }

    function firstLetterResult(firstLetter, number){
        let uppercase = firstLetter.toUpperCase();
        if (firstLetter === uppercase){
            let letterNum = firstLetter.charCodeAt() - 64;
            number /= letterNum;
        } else {
            let letterNum = firstLetter.charCodeAt() - 96;
            number *= letterNum;
        }
        return number;
    }

    function lastLetterResult(lastLetter, number){
        let uppercase = lastLetter.toUpperCase();
        if (lastLetter === uppercase){
            let letterNum = lastLetter.charCodeAt() -64;
            number -= letterNum;
        }
        else {
            let letterNum = lastLetter.charCodeAt() - 96;
            number += letterNum;
        }
        return number;
    }

    function sumNumbers(nums){
        let sum =0;
        for (let el of nums){
            sum += el;
        }
        return sum;
    }

    

}

letterChangeNumber('A12b s17G')