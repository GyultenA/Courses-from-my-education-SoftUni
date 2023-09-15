function highJump (input) {
    // neraboti dobre
    let neededHeight = Number(input[0]);
    
    let index = 1;
 
    let startingHeight = neededHeight - 30;
    let atempts = 0;
    let isDone = false;
    
 
 
    for (let j = startingHeight; j < neededHeight; j += 5) {
        let tempUnsucceces = 0;
 
        for (let i = 1; i <= 3; i++) {
            let tempResult = Number(input[index]);
            index++;
            atempts++;

            if (tempResult >= neededHeight) {
                isDone = true
                break;
            }
            if (tempResult <= j) {
                tempUnsucceces++;
            } else if (tempResult >= j) {
                break;
            }
            if (tempUnsucceces === 3) {
                break;
            } 
        }
        if(tempUnsucceces === 3){
            console.log(`Tihomir failed at ${j}cm after ${atempts} jumps.`);
            break;
        }

        if(isDone){
            console.log(`Tihomir succeeded, he jumped over ${neededHeight}cm after ${atempts} jumps.`)
            break;
 
        }
 
    }
    
}


 highJump (["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])