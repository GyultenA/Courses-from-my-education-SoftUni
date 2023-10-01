function addItem() {
    // select input field
    let newElement = document.getElementById("newItemText");

    // create <li> elemnt and assign input value to elemnt text content
    let listItem = document.createElement("li");
    listItem.textContent = newElement.value;

    // create [delete anchor]
    let deleteBtn = document.createElement("a");
    deleteBtn.textContent = ("[Delete]");
    deleteBtn.href = "#";

    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteItem);
    

    // selct <ul> and append new elemnt
    let list = document.getElementById("items");
    list.appendChild(listItem);

    // select input field and clear content (value)
    newElement.value = "";

    //if (newElement.length === 0) return;
   // listItem.appendChild(remove);

    function deleteItem(event) {
        event.target.parentElement.remove()
       // listItem.remove();
    }

}