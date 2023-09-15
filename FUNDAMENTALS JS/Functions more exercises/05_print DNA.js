function printDna(num){
    let letters = 'ATCGTTAGGG';
    let dnaLine = ''
    let firstStar = 2
    let firstLetter = 0;
    let dash = 0;
    let secondLetter = 1;
    let secondStar = 1;
    let lastSecondStar = 3
 
    dnaLine += '*'.repeat(firstStar) + letters[firstLetter] + '-'.repeat(dash) + letters[secondLetter] + '*'.repeat(secondStar);
 
    for (let i = 0; i < num; i++) {
 
        console.log(dnaLine);
        dnaLine = ''
 
 
        if (i < 1) {
            firstStar -= 1;
            secondStar -= 1;
            dash += 2;
            firstLetter += 2;
            secondLetter += 2;
 
            dnaLine += '*'.repeat(firstStar) + letters[firstLetter] + '-'.repeat(dash) + letters[secondLetter] + '*'.repeat(secondStar);
 
        } else {
            if (lastSecondStar > secondStar) {
                lastSecondStar = secondStar
                if (secondStar === 0) {
                    firstStar += 1;
                    secondStar += 1
                    dash -= 2
                } else {
                    firstStar -= 1;
                    secondStar -= 1;
                    dash += 2;
                }
 
                firstLetter += 2;
                secondLetter += 2;
 
                if (secondLetter > 9) {
                    firstLetter = 0;
                    secondLetter = 1;
                }
 
                dnaLine += '*'.repeat(firstStar) + letters[firstLetter] + '-'.repeat(dash) + letters[secondLetter] + '*'.repeat(secondStar);
 
            } else if (lastSecondStar < secondStar) {
                lastSecondStar = secondStar
 
                if (firstStar === 2) {
                    firstStar -= 1
                    secondStar -= 1;
                    dash += 2
                } else {
                    firstStar += 1;
                    secondStar += 1;
                    dash -= 2;
                }
 
                firstLetter += 2;
                secondLetter += 2;
 
                if (secondLetter > 9) {
                    firstLetter = 0;
                    secondLetter = 1;
                }
 
                dnaLine += '*'.repeat(firstStar) + letters[firstLetter] + '-'.repeat(dash) + letters[secondLetter] + '*'.repeat(secondStar);
            }
 
        }
    }

}

printDna(4)