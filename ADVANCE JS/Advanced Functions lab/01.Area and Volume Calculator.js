function solve(area, vol, data) {
    data = JSON.parse(data);
   let result = [];

   for (let entry of data){
    let calculateArea = area.call(entry);
    let calculateVolume = vol.call(entry);

    result.push({
        area: calculateArea,
        volume: calculateVolume
    });

   }
   //result = JSON.stringify(result);
   return result

}
let area = function area() {
    return Math.abs(this.x * this.y);
}
let vol = function vol() {
    return Math.abs(this.x * this.y *
        this.z);
}


let result= solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);
    console.log(result)