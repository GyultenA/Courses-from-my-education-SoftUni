import { html, render } from "../node_modules/lit-html/lit-html.js";

const btnLoad = document.getElementById("btnLoadTowns");
btnLoad.addEventListener("click", onClick);
let input = document.getElementById("towns");

function onClick(e) {
    e.preventDefault();
    let data = input.value.split(", ")
    // console.log(data)
    const cardTemplate = html`
   <ul>
    ${data.map(item => html`<li>${item}</li>`)}
   </ul>`

    const root = document.getElementById("root");
    render(cardTemplate, root)
}

