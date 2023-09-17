function sameNumbers(num) {
    let isSame;
    const arr = num.toString().split('').map(n => Number(n))
    arr.length === arr.filter(n => arr[0] === n).length ? isSame = true : isSame = false;
   
    console.log(isSame);
    console.log(arr.reduce((acc, sum) => acc + sum));
    
}
sameNumbers(2222222);
sameNumbers(1234);