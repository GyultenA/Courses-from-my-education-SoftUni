class Circle {
    constructor(radius) {
        this.radius = radius;

    }
   // get radius() {
      //  return this._radius
    //}

   // set radius(r) {
        //if (typeof r !== "number") {
          //  throw new Error("Radius must be a number")
       // }
       // this._radius = r;
    //}

    get diameter() {
        return this.radius * 2
    }

    set diameter(d){
        return this.radius * 2
    }

    get area() {
        return Math.PI * (this.radius ** 2)
       // return Math.PI * Math.pow(this.radius, 2)
    }

    //set area(a){
        //return Math.PI * (this._radius ** 2)
    //}
}


let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);	
//Radius: 2
////Diameter: 4
//Area: 12.566370614359172
//Radius: 0.8
//Diameter: 1.6
//Area: 2.0106192982974678
