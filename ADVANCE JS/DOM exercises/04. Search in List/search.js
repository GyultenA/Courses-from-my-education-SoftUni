function search() {
   let townList = Array.from(document.querySelectorAll("ul li"));
   let searchText = document.getElementById("searchText").value;
   //townList[0].innerText  or textContent

   let count = 0;

   for (let item of townList){
      let text = item.textContent;

      if (text.includes(searchText)){
         item.style.fontWeight = "bold";
         item.style.textDecoration = "underline";
         count++;

      } else {
         item.style.textDecoration = "none";
         item.style.fontWeight = "";
      }
   }


  document.getElementById("result").innerText = `${count} matches found`;

   // TODO
}
