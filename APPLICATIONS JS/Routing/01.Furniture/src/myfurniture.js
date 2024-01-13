//console.loh("myFurniture")
import { html, render } from "../node_modules/lit-html/lit-html.js"
import { userData } from "./userDatahelper.js"
import { get } from "./api.js"

const root = document.querySelector(".container")


const furnitureTemplate = (data) => html` 
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
       ${data.map(item => cardTemplate(item))}
</div>`

const cardTemplate = (item) => html`
<div class="col-md-4">
  <div class="card text-white bg-primary">
    <div class="card-body">
            <img src="${item.img}" />
            <p>${item.description}</p>
            <footer>
                <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
                <a href="/details/${item._id}" class="btn btn-info">Details</a>
            </div>
    </div>
  </div>
</div>`

//data/catalog?where=_ownerId%3D%22{userId}%22
export async function myFurnitureView() {
    const userId = userData.getUserId()
    const data = await get(`data/catalog?where=_ownerId%3D%22${userId}%22`)  //data/catalog?where=_ownerId=${userId}
    render(furnitureTemplate(data), root)

}