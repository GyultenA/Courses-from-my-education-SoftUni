function text (input){
    let index = 0;

  let command = input [index];
  index++;

  while (command !== "Stop"){
    console.log (command);

    // last posledni
        command = input [index];
        index++;
  }

}

text (["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
