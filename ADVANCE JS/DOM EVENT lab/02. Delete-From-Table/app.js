function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value.trim();

    let tableCells = document
        .getElementById("customers")
        .getElementsByTagName("td");
    //vtori nachin za tableCells
    //document.querySelectorAll("#customers td:nth-child(2)")  ;  

    let found = false;

    for (let cell of tableCells) {
        if (cell.textContent === email) {
            //console.log(found)
            cell.parentElement.remove();
            found = true;

        }
    }
    let result = document.getElementById("result");
    result.textContent = found ? "Deleted." : "Not found."

}