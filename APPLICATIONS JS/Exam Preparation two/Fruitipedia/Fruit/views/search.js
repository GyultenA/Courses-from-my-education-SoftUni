import { html } from "../../node_modules/lit-html/lit-html.js"
import { dataSevice } from "../src/dataService.js";


const searchTemplate = (data, isResult) => html`
<section id="search">
<div class="form">
  <h2>Search</h2>
  <form @submit=${searchSubmit} class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
${isResult ? resultTemplate(data) : ""}
</section>`



let resultTemplate = (items) => html`
<h4>Results:</h4>
<div class="search-result">
${items.length === 0 ? html`<p class="no-result">No result.</p>` : items.map(item => fruitCard(item))}
<!--If there are matches display a div with information about every fruit-->
</div>`

const fruitCard = (item) => html`
<div class="fruit">
<img src="${item.imageUrl}" alt="example1" />
<h3 class="title">${item.name}</h3>
<p class="description">${item.description}</p>
<a class="details-btn" href="/details/${item._id}">More Info</a>
</div>`

let context = null

export function showSearch(ctx) {
    // console.log("add")
    context = ctx
    searchManagerQuery()
}

function searchSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target)

    const { search } = Object.fromEntries(formData)

    if (!search) {
        return window.alert("error")
    }

    searchManagerQuery(search)
}

async function searchManagerQuery(query) {
    if (query) {
        const data = await dataSevice.searchText(query)
        return context.render(searchTemplate(data, true))
    }
    context.render(searchTemplate())
}