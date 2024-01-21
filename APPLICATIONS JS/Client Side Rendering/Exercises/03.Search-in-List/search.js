import { html, render} from "../node_modules/lit-html/lit-html.js"
import { towns } from "./towns.js"
//console.log(towns)

const cardTemplate = (towns) => html `
<ul>
${towns.map(town => html `<li id=${town}>${town}</li>`)}
</ul>`

const renderTownsComponent = (towns) =>{
   cardTemplate(towns)
   const rootElement = document.getElementById("towns");
   render(cardTemplate(towns), rootElement);
}

renderTownsComponent(towns)

const btnSearch = document.querySelector("button");
btnSearch.addEventListener("click", search);

const searchTown = (towns, text) => {
   return towns.filter(town => {
      if(town.includes(text)){ // toLowercase()
         let match = document.getElementById(`${town}`)
         match.setAttribute("class", "active");
         return town;
      }
   })
}

function search() {
   const text = document.getElementById("searchText").value; // toLowercase()
   const result = searchTown(towns,text)
   const resultHtml = document.getElementById("result");

   resultHtml.textContent = `${result.length} matches found`  
}
