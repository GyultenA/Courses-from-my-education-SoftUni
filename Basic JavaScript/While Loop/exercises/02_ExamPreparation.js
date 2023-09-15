function examPreparation(input) {
    let index = 0;
    let negativeGradeCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let negativeCounter = 0;
    let gradeCount = 0;
    let sumGrade = 0;
    let isNeedBreak = false
    let taskName = "";


    while (command !== "Enough") {
        taskName = command;
        let grade = Number(input[index]);
        index++;



        if (grade <= 4) {
            negativeCounter++;
            if (negativeGradeCount <= negativeCounter) {
                isNeedBreak = true;
                break;
            }

        }

        gradeCount++;
        sumGrade += grade;

        command = input[index];
        index++

    }

    if (isNeedBreak) {
        console.log(`You need a break, ${negativeCounter} poor grades.`);
    } else {

        let avgGrade = sumGrade / gradeCount;
        console.log(`Average score: ${avgGrade.toFixed(2)}`)
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${taskName}`)
    }


}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);
