class Point {
    constructor(a, b) {
        this.x = a
        this.y = b
    }
    static distance(a, b) {    // tozi metod e statichen- dannite gi poluchva ot vyn
        let x = b.x - a.x
        let y = b.y - a.y
        let distance = Math.sqrt(x ** 2 + y ** 2)
        return distance
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));



