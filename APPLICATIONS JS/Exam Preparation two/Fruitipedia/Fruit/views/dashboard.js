import { html } from "../../node_modules/lit-html/lit-html.js"
import { dataSevice } from "../src/dataService.js"


const dashBoardTemplate = (data) => html`
<h2>Fruits</h2>
  ${data.length > 0 ? html`<section id="dashboard">${data.map(item => cardFruitTemplate(item))}</section>`
   : html`<h2>No fruit info yet.</h2>`}`


const cardFruitTemplate = (item) => html`
<div class="fruit">
<img src="${item.imageUrl}" alt="example1" />
<h3 class="title">${item.name}</h3>
<p class="description">${item.description}</p>
<a class="details-btn" href="/details/${item._id}">More Info</a>
</div>`


export async function showdashboard(ctx) {
    //console.log("add")
    const data = await dataSevice.getAllFruits()

    ctx.render(dashBoardTemplate(data))
}