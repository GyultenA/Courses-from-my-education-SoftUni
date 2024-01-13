
//class Person {
    //constructor(name, email) {
       // this.name = name;
       // this.email = email;
    //}
    //toString() {
    //return `Person:  ${this.name} + ${this.email}`
    //}
//}

//class Teacher extends Person {
    //constructor(name, email, subject) {
       // super(name, email);
        //this.subject = subject;
   // }
//}


function personAndTeacher() {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }
    function Teacher(name, email, subject) {
        Person.call(this, name, email)
        this.subject = subject;
    }
    Teacher.prototype = Object.create(Person.prototype)
    return {
        Person, Teacher
    }
}
