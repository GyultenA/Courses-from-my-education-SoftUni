function mathPower(num, power){

    let powerNumber = num;

    for (let i = 1; i < power; i++){
        powerNumber *= num
    }
    console.log (powerNumber)

}
mathPower(3, 4);