class Person {
    constructor(name, email){
        this.name = name;
        this.email = email
    }
    toString(){
        return `Person (name: ${this.name}, email: ${this.email})`
        //return `I am a Human. ${this.constructor.name} (name: ${this.name}, email: ${this.email})`
    }
}

function extendPrototype(classToExtend){
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function(){
        return `I am a ${this.species}. ${this.toString()}`
    }

}
extendPrototype(Person)

'I am Human. Person (name: Pesho, email: email@hit.bg)'
'I am a Human. Person (name: Pesho, email: email@hit.bg)'

console.log(new Person("Maria", "maria@gmail.com").toSpeciesString())
//new Person("Maria", "maria@gmail.com").toSpeciesString();
// "I am a Human. Person (name: Maria, email: maria@gmail.com)