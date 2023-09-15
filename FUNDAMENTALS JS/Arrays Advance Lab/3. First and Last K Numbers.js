function firstLastKElement(arr) {
    let k = Number(arr[0]);
    let firtsResult = [];
    let secResult = [];

    firtsResult = arr.slice(1,k+1)
    console.log(firtsResult.join(" "));

    secResult = arr.slice(arr.length -k);
    console.log(secResult.join(" "));

///// vtoro
/// let k = arr.shift();
/// let firstK = arr.slice(0,k);
/// let lastK = arr.slice(arr.length - k);
/// console.log(firstK.join(" "))
/// console.log(lastK.join(" "));




}

firstLastKElement([2, 7, 8, 9]);
console.log("---")
firstLastKElement([3, 6, 7, 8, 9]);

