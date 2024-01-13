const urlAllBooks = "http://localhost:3030/jsonstore/collections/books";
const loadBtn = document.getElementById("loadBooks");
loadBtn.addEventListener("click", loadAllBooks);

const formElement = document.getElementById("submit");
formElement.addEventListener("submit", submitBookHandler);


 //function to handle the form submit depending on the situation
function submitBookHandler (e){
    e.preventDefault();
    const current = e.currentTarget.querySelector("button")
    if (current.textContent === "Submit"){
        createBook(e)
    } else {
        editBookRecord(e)
    }
   }


async function loadAllBooks(e){
    e.preventDefault()
   const response = await fetch(urlAllBooks);
   const data = await response.json();
   const booksElement = document.getElementById("books");
   booksElement.innerHTML = "";
   for (let key in data){
    let trElement = document.createElement("tr");
    trElement.id = key;

    let titleElement = document.createElement("td");
    titleElement.textContent = data[key].title;
    trElement.appendChild(titleElement);

    let authorElement = document.createElement("td");
    authorElement.textContent = data[key].author;
    trElement.appendChild(authorElement);

    let btnsElement = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editBook);
    btnsElement.appendChild(editBtn);

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteBook);
    btnsElement.appendChild(deleteBtn);

    trElement.appendChild(btnsElement);

    booksElement.appendChild(trElement)
   }

   function editBook(e){
    formElement.querySelector("h3").textContent = "Edit FORM";
    formElement.querySelector("button").textContent = "Save";
    fetch(`${urlAllBooks}/${e.target.parentElement.parentElement.id}`)  // ev.target.dataset.id;
    .then(res => {
        if (res.status == 200){
            res.json()
        } else {
            throw new Error(res.status)
        }
    })
    .then((data) => {
        //console.log(data)
        formElement.getElementsByTagName('input')[0].value = data.title;
        formElement.getElementsByTagName('input')[1].value = data.author;
        formElement.id = e.target.parentNode.parentNode.id
    })
   
   }
  
 

  async function createBook (e){
    const formData = new FormData(e.target);
    let title = formData.get("title");
    console.log(title)
    let author = formData.get("author");

    if (!title || !author){
        return alert("empty field")
    }

    const bookObj = {
        title,
       author
    }
    const data = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookObj)
    }
    try {
        const response = await fetch(catchUrl, data)
        if (response.status !== 200) {
            throw new Error
        }

    } catch (err) {
        throw new Error()
    }
//clear the form fields and refresh the books section
    e.target.reset();
    loadBtn.click()
   }

   function editBookRecord(e){
    document.querySelector("form").remove()
    const formData = new FormData(e.target)

    let title = formData.get('title');
    let author = formData.get('author');

    if(!title || !author){
        return alert('Invalid input.');
    }

    const bookObj = {
        title,
        author
    }

    fetch(`${url}/${ev.target.id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(bookObj)
    })
        .then(() => {

            //change the form back to the original state and refresh the book section
            e.target.reset();
            e.target.querySelector('h3').textContent = 'FORM';
            e.target.querySelector('button').textContent = 'Submit';
            e.target.id = '';
            loadBtn.click();
        }). catch(err => console.log("error"))
   }


 //deletes the desired book from the server and refresh the book section
   function deleteBook(e){
    fetch(`${urlAllBooks}/${ev.target.parentNode.parentNode.id}`, {
        method: "DELETE"
    })
    .then(() => {
        loadBtn.click()
    })
   }

}