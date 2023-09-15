function oldBooks (input){
    let index = 0;
    let searchBook = input[index];
    index++;

    let booksCount =0;
    let command = input[index];
    index++;

    let isFound = false;

    while (command !== "No More Books"){
       let currentBook = command;

       if (searchBook === currentBook){
        isFound = true;
        break;
        // do tuk proverqvame tekushtata kniga
       }
        
       booksCount++;
        command = input [index];
        index++;

    }


   if (!isFound){
console.log ("The book you search is not here!");
console.log (`You checked ${booksCount} books.`);

   } else {
    console.log (`You checked ${booksCount} books and found it.`)

}
}

oldBooks (["Troy",
"Stronger",
"Life Style",
"Troy"])

console.log ("------------------")
oldBooks (["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

