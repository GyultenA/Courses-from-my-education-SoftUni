function cats(input) {
    class Cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }

    }
    for (let cat of input) {
        let [name, age] = cat.split(" ");
        let currentCat = new Cats(name, age);
        currentCat.meow();
    }

}

cats(['Mellow 2', 'Tom 5'])