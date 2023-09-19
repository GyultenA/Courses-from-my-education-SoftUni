function pieceOfPie(arrPies, target1, target2){
    let result = [];
    let startIndex = arrPies.indexOf(target1);
    let endIndex = arrPies.indexOf(target2) + 1;
    result.push(...arrPies.slice(startIndex,endIndex));

    return result;

}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));
console.log("--------------------");
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'))