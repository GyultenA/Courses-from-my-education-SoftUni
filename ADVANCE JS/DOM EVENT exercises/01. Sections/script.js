function create(words) {

   const contentEl =  document.getElementById("content");

   for (let word of words){
      let divEl = document.createElement("div");
      let pEl = document.createElement("p");
      pEl.style.display = "none";
      pEl.textContent = word;

      divEl.addEventListener("click", onclickHandler)

      divEl.appendChild(pEl);
      contentEl.appendChild(divEl);

   }
   function onclickHandler(event){
      let divF = event.currentTarget;
      let pRef = divF.children[0];

      pRef.style.display = "block"

   }

   //event.target
   //event.target.children[0]
   //event.currentTarget
   //event.target.parentElement
   //event.target.parentElement.children[1]
   //event.target.parentElement.children[1].value



   //console.log("words");
}