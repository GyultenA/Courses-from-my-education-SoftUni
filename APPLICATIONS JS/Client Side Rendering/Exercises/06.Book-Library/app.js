import { render } from "../node_modules/lit-html/lit-html.js";
import { getAllBooks, createBooks, updateBook, deleteBook } from "./api.js";
import { mainTemplate } from "./templates/mainTemplate.js";
import { tableRowsTemplate } from "./templates/tableRowsTemp.js";
import { editHandler } from "./action.js";



//console.log('My requests...')
//console.log(getAllBooks())
const documentBody = document.querySelector("body")

render(mainTemplate(), documentBody)

const loadBtn = documentBody.querySelector("#loadBooks").addEventListener("click", onloadBooks)

async function onloadBooks() {
    const booksData = await getAllBooks();
    const section = documentBody.querySelector("table tbody")
    const books = [];

    for (let id in booksData) {
        books.push({
            author: booksData[id].author,
            title: booksData[id].title,
            _id: id
        })
    }
    //console.log(books)
    const context = {
        books,
        deleteFunc,
        editHandler,
    }
    render(tableRowsTemplate(context), section)
}

const addFormElement = document.querySelector("#add-form")
addFormElement.addEventListener("submit", onSubmit)

async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(addFormElement)
    const author = formData.get("author");
    const title = formData.get("title");

    if (!title || !author) {
        return alert("Please fill in all fileds!")
    }

    const book = {
        author,
        title
    }

    await createBooks(book).then(data => {
        addFormElement.reset();
        documentBody.querySelector("#loadBooks").click();
    })
}

const editFormElement = documentBody.querySelector("#edit-form");
editFormElement.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(editFormElement);
    const id = formData.get("id");
    const author = formData.get("author");
    const title = formData.get("title");

    if (!title || !author) {
        return alert("Please fill in all fileds!")
    }

    const book = {
        author,
        title
    }

    updateBook(id, book).then(() => {
        documentBody.querySelector("#loadBooks").click()
        editFormElement.style.display = "none"
        editFormElement.reset();
        addFormElement.style.display = "block"

    })
})

function deleteFunc(id) {
    deleteBook(id)
    documentBody.querySelector("#loadBooks").click()
}
