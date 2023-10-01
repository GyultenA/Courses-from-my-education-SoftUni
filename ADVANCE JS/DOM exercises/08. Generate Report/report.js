function generateReport() {
    let tableRow = document.querySelectorAll("tbody tr");
    let tableHeader = document.querySelectorAll("thead tr th");
    let result = [];

    for (let i = 0; i < tableRow.length; i++) {
        let tableData = tableRow[i].cells;

        let currData = {};

        for (let y = 0; y < tableData.length; y++) {
            let infoHeader = tableHeader[y].childNodes;

            if (infoHeader[1].checked) {
                currData[infoHeader[0].textContent.trim().toLocaleLowerCase()] = tableData[y].textContent;
            }

        }
      
        result.push(currData);

    }

    let jsonResult = JSON.stringify(result);
    document.getElementById("output").textContent = jsonResult;


}