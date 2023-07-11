function triangleArea (a, b, c){

    let s = (a + b + c) / 2;

    let areaN = s * ((s-a) * (s - b) * (s - c));
    let area = Math.sqrt(areaN)
    console.log (area)


}

triangleArea(2, 3.5, 4);