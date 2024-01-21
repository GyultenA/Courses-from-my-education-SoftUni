const url = "http://localhost:3030/jsonstore/collections/books/";

export async function getAllBooks(){
    return fetch(url).then(response => response.json())
}

export async function createBooks(booksObj){
    return fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(booksObj)
    }).then(response => response.json())
}

export async function getBookById(id){
    return fetch(`${url}${id}`).then((res) => res.json())
}

export async function updateBook(id, booksObj){
    return fetch(`${url}${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(booksObj)
    }).then(response => response.json())
}

export async function deleteBook(id){
    return fetch(`${url}${id}`, {
        method: "DELETE"
    })//.then(response => response.json())
}