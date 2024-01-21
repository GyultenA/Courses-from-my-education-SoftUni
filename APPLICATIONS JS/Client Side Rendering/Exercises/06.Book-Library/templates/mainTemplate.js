import { html } from "../node_modules/lit-html/lit-html.js"
import { addFormTemplate, editFormTemplate } from "./formTemp.js"
import { loadButton } from "./loadBtn.js"
import { tableTemplate } from "./tableTemp.js"
//import { editFormTemplate } from "./formTemp"

// add loadButton
//table template
//add edit-form
export const mainTemplate = () => {
    return html`
    ${loadButton()} ${tableTemplate()}
    <form id="add-form">${addFormTemplate()}</form>
    <form id="edit-form" style="display: none"></form>`
}
