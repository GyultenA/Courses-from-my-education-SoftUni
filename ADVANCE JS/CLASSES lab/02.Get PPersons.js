function getPerson() {
    let resultArray = [];

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age
            this.email = email
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    resultArray.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    resultArray.push(new Person('SoftUni'));
    resultArray.push(new Person('Stephan', 'Johnson', 25));
    resultArray.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));
    return resultArray

}



console.log(getPerson())