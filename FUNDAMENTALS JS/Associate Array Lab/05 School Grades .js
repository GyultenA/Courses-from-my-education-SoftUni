function schoolGrades(input) {

    let students = {};

    for (let line of input) {
        let tokens = line.split(" ");
        let nameStudent = tokens.shift();
        let grades = tokens.map(Number);

        if (!students[nameStudent]) {
            students[nameStudent] = [];
        } 
        students[nameStudent] = students[nameStudent].concat(grades);
    }

    let studentsEntries = Object.entries(students);
    let sortedStudents = studentsEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of sortedStudents) {
        let sum = 0;

        for (let grade of grades) {
            sum += grade;
        }

        let average = sum / grades.length;

        console.log(`${name}: ${average.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])