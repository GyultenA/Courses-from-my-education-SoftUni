import { html } from "../../node_modules/lit-html/lit-html.js"
import { dataSevice } from "../src/dataService.js";
import { userHelper } from "../src/userHelper.js";


const detailsTemplate = (item, isOwner) => html`
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src=${item.imageUrl} alt="example1" />
  <p id="details-title">${item.name}</p>
  <div id="info-wrapper">
    <div id="details-description">
      <p>${item.description}</p>
          <p id="nutrition">Nutrition</p>
         <p id = "details-nutrition">${item.nutrition}</p>
    </div>
     ${isOwner ? 
        html`<div id="action-buttons">
        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
        <a @click=${deleteFruitFrom} href="javascript:void(0)" id="delete-btn">Delete</a>
         </div>` : ""}
  </div>
</div>
</section>`

//href="javascript:void(0)"

let context = null;

export async function showDetails(ctx){
    //console.log("add")
    context=ctx;
    const id = context.params.id
    const data = await dataSevice.singleFruit(id)
    const isOwner = userHelper.getUserId() === data._ownerId
  
    context.render(detailsTemplate(data, isOwner))
}

async function deleteFruitFrom(e){
    e.preventDefault()
  const id = context.params.id
  await dataSevice.deleteFruit(id)
  context.goTo("/dashboard")
}