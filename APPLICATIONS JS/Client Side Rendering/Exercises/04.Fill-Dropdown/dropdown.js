import { html, render } from "./node_modules/lit-html/lit-html.js"

const urlItems = "http://localhost:3030/jsonstore/advanced/dropdown";

const root = document.querySelector("div")
const selectElement = document.getElementById("menu")
const formEl = document.querySelector("form");
//formEl.addEventListener("submit", addItem);
document.querySelector('form').addEventListener('submit', addItem);

const createTemplate = (data) => html`
<select id="menu">
    ${data.map(item => html`<option value=${item._id}>${item.text}</option>`)}
</select>`

getInfo()

async function getInfo(e) {
    const response = await fetch(urlItems);
    const data = await response.json();
    console.log(data)
    updateInfo(Object.values(data))
}

function updateInfo(data) {
    render(createTemplate(data), root)
}


async function addItem(e) {
    e.preventDefault();
    const text = document.getElementById("itemText").value.trim();

    const response = await fetch(urlItems, {
        method: "POST",
        headers: { "Content-Type": "appplication.json" },
        body: JSON.stringify(text)
    })
    if (response.status === 200) {
        getInfo()
        formEl.reset()
    } else {
        alert("error")
    }

}


//send a POST request to the same URL and if it is successful, update the list

//rendered as <option> items inside the <select> with id "menu". 
//function addItem() {
  //  const text = document.getElementById("newItemText");
 //   const value = document.getElementById("newItemValue");
 //   const option = document.createElement("option");

  //  option.textContent = text.value;
  //  option.value = value.value;

   // document.getElementById("menu").appendChild(option);
   // text.value = "";
   // value.value = "";
//}

