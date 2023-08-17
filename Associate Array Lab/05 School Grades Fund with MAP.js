function schoolGrades(input) {

    let list = new Map();
    let gradesList = new Map();

    for (let element of input) {
        let tokens = element.split(' ');
        let name = tokens.shift();
        let grades = tokens.join();

        if (list.has(name)) {
            let gradesList = list.get(name) + ',' + grades;
            list.set(name, gradesList);
        } else {
            list.set(name, grades);
        }
    }

    for (let el of list) {
        let result = 0;
        let grad = el[1].split(',');

        for (let num of grad) {
            result += Number(num);
        }

        result /= Number(grad.length);
        gradesList.set(el[0], result.toFixed(2));
    }
    let entries = Array.from(gradesList.entries());
    
    let sortGradesList = entries.sort(([nameA, gradA], [nameB, gradB]) => {
        return nameA.localeCompare(nameB);
    });

    for (let el of sortGradesList) {
        console.log(`${el[0]}: ${el[1]}`);
    }
}
schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3'])