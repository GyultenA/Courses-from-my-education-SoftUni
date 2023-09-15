function cookingByNumbers(num, ...commands) {
    let myNumber  = Number(num);

    commands.forEach(op => {
        switch (op) {
            case 'chop':
                myNumber /= 2;
                break;
            case 'dice':
                myNumber = Math.sqrt(myNumber);
                break;
            case 'spice':
                ++myNumber;
                break;
            case 'bake':
                myNumber *= 3;
                break;
            case 'fillet':
                myNumber = myNumber - myNumber * 0.2; // *0.80
                break;
        }
        console.log(myNumber);
    });

}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log("--------------");
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');