//console.log("dashboard")
import { html, render} from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"
import { userData } from "./userDatahelper.js";
import { get, del } from "./api.js"

const root = document.querySelector(".container")

const detailsTemplate = (item, isOwner) => html`
<div class="row space-top">
  <div class="col-md-12">
    <h1>Furniture Details</h1>
  </div>
  <div class="row space-top">
   <div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="../${item.img}" />
        </div>
    </div>
</div>
<div class="col-md-4">
    <p>Make: <span>${item.make}</span></p>
    <p>Model: <span>${item.model}</span></p>
    <p>Year: <span>${item.year}</span></p>
    <p>Description: <span>${item.description}</span></p>
    <p>Price: <span>${item.price}</span></p>
    <p>Material: <span>${item.material}</span></p>
    <div>
        ${isOwner ? html`
        <a href=/edit/${item._id} class="btn btn-info">Edit</a>
        <a href="javascript:void(0)" @click=${onDelete} class="btn btn-red">Delete</a>` : ""}   
    </div>
  </div>
</div>`

let id = "";

export async function detailsView(ctx){
    id = ctx.params.id;
    const data = await get(`data/catalog/${id}`)
    const isOwner = userData.getUserId() === data._ownerId
    render(detailsTemplate(data, isOwner), root)
    
}

async function onDelete(e){
    await del(`data/catalog/${id}`);

    page.redirect("/")

}