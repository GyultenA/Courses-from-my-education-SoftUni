function sortBy2Criteria(arr) {

    let sortArray1 = arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length
        }
        return a.localeCompare(b)

    });


   //// let sortArray = arr.sort((a,b) => {
       //// return a.length - b.length || a.localeCompare(b);
   /// })

    console.log(sortArray1.join("\n"));


}

sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

console.log("--------");
sortBy2Criteria(['alpha', 'beta', 'gamma']);