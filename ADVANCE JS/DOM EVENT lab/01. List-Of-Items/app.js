function addItem() {
    // select input field and read its value
    let input= document.getElementById("newItemText");

    let newItem = input.value;

    // create <li> elemnt
    let liItem = document.createElement("li");

    // assing input value to elemnt text content
    liItem.textContent = newItem;

    // select input field and clear contents (value)

    let list = document.getElementById("items");

    list.appendChild(liItem);

    input.value = " ";
}