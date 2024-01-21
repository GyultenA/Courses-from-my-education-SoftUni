import { html } from "../../node_modules/lit-html/lit-html.js"
import { dataSevice } from "../src/dataService.js";

const editTemplate = (item) => html`
<section id="edit">
<div class="form">
  <h2>Edit Fruit</h2>
  <form  @submit=${editHandler} class="edit-form">
    <input
      type="text"
      name="name"
      id="name"
      value=${item.name}
      placeholder="Fruit Name"
    />
    <input
      type="text"
      name="imageUrl"
      id="Fruit-image"
      value=${item.imageUrl}
      placeholder="Fruit Image URL"
    />
    <textarea
      id="fruit-description"
      name="description"
      placeholder="Description"
      rows="10"
      cols="50" 
    >${item.description}</textarea>
    <textarea
      id="fruit-nutrition"
      name="nutrition"
      placeholder="Nutrition"
      rows="10"
      cols="50" 
    >${item.nutrition}</textarea>
    <button type="submit">post</button>
  </form>
</div>
</section>`


let context = null;

export async function showEdit(ctx) {
  //console.log("add")
  context = ctx
  const id = context.params.id;
  const data = await dataSevice.singleFruit(id)
  context.render(editTemplate(data))
}

async function editHandler(e) {
 // e.preventDefault()

  const formData = new FormData(e.target)

  const name = formData.get("name");
  const description = formData.get("description")
  const nutrition = formData.get("nutrition")
  const img = formData.get("imageUrl")

  if (!name || !img || !description || !nutrition) {
    return window.alert("ERROR")
  }

  const id = context.params.id;

  await dataSevice.updateFruit(id, { name, img, description, nutrition })
  context.goTo(`/details/${id}`)
}