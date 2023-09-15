function bulding (input){
let floor = Number (input[0]);
let roomsCount = Number (input[1]);

for (let i = floor; i > 0; i--){
    let buff = "";
    for ( let x = 0; x < roomsCount; x++){
         if (i === floor){
            buff += `L${i}${x} `
         } else if (i % 2 === 0){
            buff += `O${i}${x} `
         } else {
        buff += `A${i}${x} `
         }

    }
   console.log (buff)

}

}

bulding (["6", "4"]);