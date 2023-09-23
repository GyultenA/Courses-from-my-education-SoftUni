function rectangle(width, height, color){
    const rectangleArea = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea(){
            return Number((this.width) * (this.height));
        }
    }
    return rectangleArea;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
