function colorize() {
    let list = document.querySelectorAll("table tr");
    let index = 0;
    for (let row of list) {
        index++;
        if (index % 2 === 0) {
            row.style.background = "teal";
        }

    }
}
 //vtori nachin
//function colorize(){
    //let list = document.querySelectorAll("tr:nth-child(2n)");
    //for (let row of list){
        //row.style.background = "teal";
    //}
//}