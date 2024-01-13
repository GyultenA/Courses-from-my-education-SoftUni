import { createIdea } from "../../apid/data.js"

const create = document.getElementById("createview");
const form = create.querySelector("form");
form.addEventListener("submit", onSubmit);

let ctx = null;

export function showCreateView(contex){
    ctx= contex
    contex.showSection(create)
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const {title, description, imageURL} = Object.fromEntries(formData);

    await createIdea({title, description, img: imageURL})
    form.reset();
    ctx.goTo("/catalog")
}