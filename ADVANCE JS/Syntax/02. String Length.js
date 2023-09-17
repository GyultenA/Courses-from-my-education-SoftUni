function stringLength(str1, str2, str3){
    let strLength1 = str1.length;
    let strLength2 = str2.length;
    let strLength3 = str3.length;
    let sumLength = strLength1 + strLength2 + strLength3;
    let avrLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avrLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');