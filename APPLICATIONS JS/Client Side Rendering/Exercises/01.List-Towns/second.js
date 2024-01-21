import { html, render } from "../node_modules/lit-html/lit-html.js";

const btnLoad = document.getElementById("btnLoadTowns");
btnLoad.addEventListener("click", onClick);
let input = document.getElementById("towns");

const dataFromInput = (input) => input.value.split(", ");

function onClick(e) {
    e.preventDefault();
    const data = dataFromInput(input)
    // console.log(data)
    renderComponent(data);
    input.value = "";
}

const renderComponent = (data) => {
    const root = document.getElementById("root");
    render(cardTemplate(data), root)
}

const cardTemplate = (data) => html`
<ul>
 ${data.map(item => html`<li>${item}</li>`)}
</ul>`