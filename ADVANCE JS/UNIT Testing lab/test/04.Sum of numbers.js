function sum(arr) {
    if (!Array.isArray(arr)){
        return NaN
    }
    
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}
module.exports = { sum }