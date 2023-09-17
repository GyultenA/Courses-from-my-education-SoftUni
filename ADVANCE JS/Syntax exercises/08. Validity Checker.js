function validCheker(x1, y1, x2, y2){
    const distance1 = Math.sqrt(x1 ** 2 + y1 ** 2);
    const distance2 = Math.sqrt(x2 ** 2 + y2 ** 2);
    const distance3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
 
    const isValid1 = Number.isInteger(distance1);
    const isValid2 = Number.isInteger(distance2);
    const isValid3 = Number.isInteger(distance3);
 
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid1 ? "valid" : "invalid"}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid2 ? "valid" : "invalid"}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid3 ? "valid" : "invalid"}`);
    
    //koren kwadrat ot(x2 - x1)(x2 - x1) + (y2 - y1)(y2-y1)

}

validCheker(3, 0, 0, 4);