function cake (input){
 let index = 0;

 let width = Number (input[index]);
 index++;

 let length = Number (input[index]);
 index++;

 let totalCake = width * length;
 let part = 0;

 let command = input[index];
 index++;


  while (command !== "STOP"){
     let pieceCake = Number (command);
     part += pieceCake;

     if (totalCake <= part){
        let cakeNeed = part - totalCake
        console.log (`No more cake left! You need ${cakeNeed} pieces more.`)
        break;
     }

    command = input[index];
    index++
  }

  if (command === "STOP"){
    let cakeMore = totalCake - part;
    console.log (`${cakeMore} pieces are left.`)
  }

}

cake (["10",
"10",
"20",
"20",
"20",
"20",
"21"])

