function repeatString (textString, repeat){
    let buff = "";
  
    for (let i = 0; i < repeat; i++){
        buff += textString;
    }
    console.log (buff);
}

repeatString("abc", 3);