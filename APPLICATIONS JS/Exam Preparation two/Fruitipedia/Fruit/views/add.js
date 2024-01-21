import { html } from "../../node_modules/lit-html/lit-html.js"
import { dataSevice } from "../src/dataService.js";


const addTemplate = () => html`
<section id="create">
<div class="form">
  <h2>Add Fruit</h2>
  <form @submit=${addSubmit} class="create-form">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Fruit Name"
    />
    <input
      type="text"
      name="imageUrl"
      id="Fruit-image"
      placeholder="Fruit Image"
    />
    <textarea
    id="fruit-description"
    name="description"
    placeholder="Description"
    rows="10"
    cols="50"
  ></textarea>
  <textarea
    id="fruit-nutrition"
    name="nutrition"
    placeholder="Nutrition"
    rows="10"
    cols="50"
  ></textarea>
    <button type="submit">Add Fruit</button>
  </form>
</div>
</section>`

let context = null

export function showAdd(ctx) {
  //console.log("add")
  context = ctx
  context.render(addTemplate())
}


async function addSubmit(e) {
  e.preventDefault()

  const formData = new FormData(e.target);

  const name = formData.get("name");
  const description = formData.get("description")
  const nutrition = formData.get("nutrition")
  const img = formData.get("imageUrl")

  if (!name || !description || !nutrition || !img) {
    return window.alert("Error")
  }

  await dataSevice.createFruit({ name, img, description, nutrition })
 // context.updateNav()
  context.goTo("/dashboard")
}