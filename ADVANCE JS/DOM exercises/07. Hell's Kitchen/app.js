function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];

   function onClick() {
      let input = JSON.parse(document.getElementById("inputs").children[1].value);
      let bestRestaurant = document.querySelector("#bestRestaurant p");
      let bestWorkers = document.querySelector("#workers p");

      for (let data of input) {
         let [name, workerList] = data.split(" - ");
         if (!result.find(e => e.name === name)) {
            //syzdawam obekt
            result.push({
               name,
               avrSalry: 0,
               bestSalary: 0,
               sumSalary: 0,
               workerList: []
            });
         }
            let currentRestaurant = result.find(e => e.name === name);
            workerList = workerList && workerList.split(", ")

            for (let currentWorker of workerList) {
               updateRestaurant(currentRestaurant, currentWorker)
            }
         }

      
     let sortBestRestaurant = result.sort((a,b) => b.avrSalry - a.avrSalry)[0];
     
    bestRestaurant.textContent = `Name: ${sortBestRestaurant.name} Average Salary: ${sortBestRestaurant.avrSalry.toFixed(2)} Best Salary: ${sortBestRestaurant.bestSalary.toFixed(2)}`

    let sortlistWorker = sortBestRestaurant.workerList.sort((a, b) => b.salary - a.salary);
    let buff = ""
    for(let worker of sortlistWorker){
      buff += `Name: ${worker.name} With Salary: ${worker.salary} `;

    }
    bestWorkers.textContent += buff;

   }

   function updateRestaurant(obj, worker) {
      let [name, salary] = worker.split(" ");
      salary = Number(salary)
      obj.sumSalary += salary;
      if (obj.bestSalary < salary) {
         obj.bestSalary = salary;
      }
      obj.workerList.push({
         name,
         salary
      });
      obj.avrSalry = obj.sumSalary / obj.workerList.length

   }
}