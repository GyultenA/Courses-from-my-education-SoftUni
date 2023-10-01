function focused() {
   Array.from(document.querySelectorAll("input")).forEach (i => {
    i.addEventListener("focus", onFocus);
    i.addEventListener("blur", onBlur);
   // i.addEventListener("change", onChange); ne e po uslovie, promqna
   });

   function onFocus(event){
    event.target.parentElement.className = "focused";  
    // ili event.target.parentElement.classList.add("focused");  / more class
   }

   function onBlur(event){
    event.target.parentElement.className = "";
     //event.target.parentElement.classList.remove("focused");
   }

   //function onChange(){ ne e po uslovie
   // console.log("changed");
   //}
}