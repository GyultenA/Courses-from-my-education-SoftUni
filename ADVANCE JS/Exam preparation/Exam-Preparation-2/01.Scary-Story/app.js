window.addEventListener("load", solve);
//All fields (First Name, Last Name, Age, Genre, Story title and Story text) are filled with the correct inp

function solve() {
  //console.log("work")
 const firstNameInput = document.getElementById("first-name");
 const lastNameInput = document.getElementById("last-name");
 const ageInput = document.getElementById("age");
 const genreInput = document.getElementById("genre");
 const storyTitleInput = document.getElementById("story-title");
 const storyTextInput = document.getElementById("story");

 const ulRef = document.getElementById("preview-list")
 //debugger
 const publishBtn = document.getElementById("form-btn");
 publishBtn.addEventListener("click", onClick);

 const mainEl = document.getElementById("main")

 const firstName = firstNameInput.value;
 const lastName = lastNameInput.value;
 const age = ageInput.value;
 const genre = genreInput.options[genreInput.selectedIndex].value; //genre.value for choice
 const storyTitle = storyTitleInput.value;
 const storyText = storyTextInput.value;

 function onClick(e) {
     e.preventDefault();
     if (!firstName || !lastName || !age || !storyText || !storyTitle) {
         return;
     }
     let li = createLiElement(firstName, lastName, age, storyTitle, genre, storyText);
     ulRef.appendChild(li);
     clearInputFields()

     publishBtn.disabled = true;
 }

 function createLiElement(firstName, lastName, age, storyTitle, genre, storyText) {
     const liElement = document.createElement("li");
     liElement.className = "story-info";
     // liElement.classList.add("story-info")

     const articleElement = document.createElement("article");
     const headingElement = document.createElement("h4");
     headingElement.textContent = `Name: ${firstName} ${lastName}`

     const pAgeElement = document.createElement("p");
     pAgeElement.textContent = `Age: ${age}`;

     const pTitleElement = document.createElement("p");
     pAgeElement.textContent = `Title: ${storyTitle}`;

     const pGenreElement = document.createElement("p");
     pGenreElement.textContent = `Genre: ${genre}`;

     const pStoryElement = document.createElement("p");
     pStoryElement.textContent = `${storyText}`;

     articleElement.appendChild(headingElement);
     articleElement.appendChild(pAgeElement);
     articleElement.appendChild(pTitleElement);
     articleElement.appendChild(pGenreElement);
     articleElement.appendChild(pStoryElement)

     liElement.appendChild(articleElement)
     liElement.appendChild(createBtn("save-btn", "Save Story", onSave));
     liElement.appendChild(createBtn("edit-btn", "Edit Story", onEdit));
     liElement.appendChild(createBtn("delet-btn", "Delete Story", onDelete));
     return liElement
 }

 function createBtn(styleClass, text) {
     let btn = document.createElement("button");
     btn.classList.add(styleClass);
     btn.textContent = text;
     btn.addEventListener("click", callBack)
     return btn;
 }

 function clearInputFields() {
     firstNameInput.value = "";
     lastNameInput.value = "";
     ageInput.value = "";
     storyTitleInput.value = "";
     genreInput.selectedIndex = 0;
     storyTextInput.value = "";
 }

 function propagateValue(firstName, lastName, age, storyTitle, genre, storyText) {
     firstNameInput.value = firstName
     lastNameInput.value = lastName
     ageInput.value = age
     storyTitleInput.value = storyTitle
     genreInput.selectedIndex = genre
     storyTextInput.value = storyText
 }

 function onEdit(e) {
     let article = e.target.parentElement.children[0];
     let names = article.children[0].textContent.split(" ");
     let titleArr = article.children[2].textContent.split(" ");
     titleArr.shift();
     let firstName = names[1];
     let lastName = names[2];

     let age = article.children[1].textContent.split(" ")[1];

     let title = titleArr.join(" ");

     let genre = article.children[3].textContent.split(" ")[1];;

     let story = article.children[4].textContent.
         propagateValue (firstName, lastName, age, title, genre, story);

    onDelete(e)

 }

 function onSave(e) {
     // debugger
     let h1 = document.createElement("h1");
     h1.textContent = "Your scary story is saved!";
     mainEl.replaceChildren(h1)

 }
 function onDelete(e) {
     e.target.parentElement.remove();
     publishBtn.disabled = false;
 }

}
