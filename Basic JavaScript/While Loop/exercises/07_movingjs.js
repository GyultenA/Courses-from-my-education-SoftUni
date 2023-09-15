function moving (input){
  let index = 0;
  let width = Number (input[index]);
  index++;

  let length = Number (input[index]);
  index++;

  let high = Number (input [index]);
  index++;

  let comand = input[index];
  index++;
  let freeSpace = high * length * width

while (comand !== "Done"){
  let box = Number (comand);

  freeSpace -= box
  if (freeSpace < 0){
    break
  }

  comand = input [index];
  index++;

}

if (freeSpace >= 0){
    console.log (`${freeSpace} Cubic meters left.`)

} else {
    console.log (`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
}


}
moving (["10", 
"1",
"2",
"4", 
"6",
"Done"])
