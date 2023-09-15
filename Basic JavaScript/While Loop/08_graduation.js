function graduation(input) {

    let index = 0;
    let studentName = input[index];
    index++;

    let i = 1;
    let avrGrade = 0
    let badGradeCounter = 0;
    let hasExcluded = false



    while (i <= 12) {
        let grade = Number(input[index])
        index++
        if (grade < 4.00) {
            badGradeCounter++;
            if (badGradeCounter > 1) {
                hasExcluded = true
                console.log(`${studentName} has been excluded at ${i} grade`)
                break;
            }
            continue;
        }
        avrGrade += grade;

        i++;
    }

    if (!hasExcluded) {
        console.log(`${studentName} graduated. Average grade: ${(avrGrade/12).toFixed(2)}`);
    }


}

graduation (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

