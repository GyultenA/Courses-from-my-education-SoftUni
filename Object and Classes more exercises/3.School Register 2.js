function schoolRegister(array) {
    let studentsArr = [];
    let isPush = false;
    for (let currentStudent of array) {
        let tokens = currentStudent.split(' ');
        let nameStudent = tokens[2].split('').slice(0, tokens[2].length - 1).join('');
        let grade = Number(tokens[4].split('').slice(0, tokens[4].length - 1).join(''));
        let averageScore = Number(tokens[10]);
        if (averageScore >= 3) {
            grade += 1;
            if (studentsArr.length === 0) {
                let result = {
                    name: [nameStudent],
                    grade: grade,
                    averageScore: [averageScore],
                    numStudents: 1
                }
                studentsArr.push(result);
            } else {

                for (let gradeLine of studentsArr) {
                    isPush = false;
                    if (gradeLine.grade === grade) {
                        gradeLine.name.push(nameStudent),
                            gradeLine.averageScore.push(averageScore);
                        gradeLine.numStudents++;
                        isPush = true;
                        break;
                    }

                }
                if (!isPush) {
                    let result = {
                        name: [nameStudent],
                        grade: grade,
                        averageScore: [averageScore],
                        numStudents: 1
                    }
                    studentsArr.push(result);
                }
            }
        }
    }
    let sortedArrStudents = studentsArr.sort((a, b) => a.grade - b.grade);
    for (let currentGrade of sortedArrStudents) {
        console.log(`${currentGrade.grade} Grade`);
        console.log(`List of students: ${currentGrade.name.join(', ')}`);
        let average = (currentGrade.averageScore.reduce((acc, num) => acc + num) / currentGrade.numStudents).toFixed(2);
        console.log(`Average annual score from last year: ${average}`);
        console.log('')
    }
}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ])