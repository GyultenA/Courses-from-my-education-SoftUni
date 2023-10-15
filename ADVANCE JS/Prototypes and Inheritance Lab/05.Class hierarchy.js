function calculations() {
    class Figure {
        constructor(unitValue = "cm") {
            this.unitValue = unitValue
            this.area = this.area;
            Object.defineProperty(this, "area", {
                get() {
                    return this.area
                }
            })
        }

        changeUnits(unitValue) {
            this.unitValue = unitValue
        }

        convertUnits(value) {
            if (this.unitValue == "m") {
                return value /= 100;
            } else if (this.unitValue == "mm") {
                return value *= 10;
            }
            return value;

        }
        toString() {
            return `Figures units: ${this.unitValue}`
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
            Object.defineProperty(this, "area", {

                get() {
                    this.newRadius = this.convertUnits(this.radius);
                    return Math.PI * this.newRadius ** 2;
                }

            })
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.newRadius}`;
        }
    }


    class Rectangle extends Figure {
        constructor(width, heigth, units) {
            super(units);
            this.width = width;
            this.heigth = heigth;
            Object.defineProperty(this, "area", {
                get() {
                    this.newWidth = this.convertUnits(this.width);
                    this.newHeigth = this.convertUnits(this.heigth);

                    return this.newWidth * this.newHeigth
                }

            })
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.newWidth}, height: ${this.newHeigth}`
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }

}

const {
    Figure,
    Circle,
    Rectangle
} = calculations();


let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50