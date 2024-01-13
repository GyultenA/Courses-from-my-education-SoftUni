async function getInfo() {
   // console.log("TODO...");
   const stopId = document.getElementById("stopId").value;
   //console.log(stopId)
   const busesListElement = document.getElementById("buses");
   busesListElement.innerHTML = "";
   const stopName = "stopName"

   try{
      const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
      //console.log(response)
      if(!response.ok){
         let error = new Error();
         error.status = response.status;
         error.statusText = response.statusText;
         throw error;
      }

    const data = await response.json();
    //console.log(data);
    const busName = document.getElementById("stopName");
    busName.textContent = data.name;
    Object.entries(data.buses).forEach(([busId, time]) => {
      const listElement = document.createElement("li");
      listElement.textContent = `Bus ${busId} arrives in ${time} minutes`
      busesListElement.appendChild(listElement);
    })
   } catch (error){
    document.getElementById(stopName).textContent = "Error";
   // console.log(error)
   }
  





}