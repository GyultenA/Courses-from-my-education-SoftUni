function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        //toString() {
        //return `Person:  ${this.name} + ${this.email}`
        //}
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }
    return {Person, Teacher}
}



let p = new Person("Maria", "maria@gmail.com");
console.log(p.toString())
// Person: Maria (maria@gmail.com)
let t = new Teacher("Ivan", "iv@yahoo.com", "PHP");
console.log(t.toString())
//console.log("Teacher: " + t.name +
//' (' + t.email + '), teaches ' + t.subject);
