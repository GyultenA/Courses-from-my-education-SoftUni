import {render} from "./node_modules/lit-html/lit-html.js"
import { getBookById } from "./api.js"
import { editFormTemplate } from "./templates/formTemp.js"

export async function editHandler(id){
    document.querySelector("#add-form").style.display= "none";
   // console.log( document.querySelector("#add-form"))
    let currentBook = await getBookById(id);
    let formElement = document.querySelector("#edit-form");
    formElement.style.display= "block"
    render(editFormTemplate(currentBook, id), formElement)
}