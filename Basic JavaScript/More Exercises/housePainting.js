function housePainting (input) {
    let highX = Number (input[0]);
    let length = Number (input[1]);
    let highRoof = Number (input[2]);

    let wall = highX * length;
    let windows = 2 * (1.5*1.5);
    let twoSide = (2*wall) - windows;

    let gate = 1.2* 2;
    let backWall = highX * highX;
    let frontSide = (2*backWall) - gate;

    let areaDown = twoSide + frontSide;

    let roofSquar = 2 * (highX * length);
    let roofTr = 2 * ((highRoof * highX) / 2);
    let roofArea = roofSquar + roofTr;

    let greenPaint = areaDown / 3.4;
    console.log (greenPaint.toFixed(2));

    let redPaint = roofArea / 4.3;
    console.log (redPaint.toFixed(2));


}

housePainting (["10.25", "15.45", "8.88"]);
