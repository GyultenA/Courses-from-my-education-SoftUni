function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            //return `Person:  (name: ${this.name}, email: ${this.email})`
            return `${this.constructor.name}:  ${this.name} + ${this.email}`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
            //return `${super.toString().replace(")", "")}, subject: ${this.subject})`
        }
    }


    class Student extends Teacher {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
            //return `${super.toString().replace(")", "")}, course: ${this.course})`
        }
    }
    return {
        Person, Teacher, Student
    }
}

const firtsTeacher = new Teacher("Ivan", "ivan@ivanom.com", "Math")
console.log(firtsTeacher.toString());

const student = new Student("Dzem", "dzam@jgmail.com", "Math")
console.log(student.toString())