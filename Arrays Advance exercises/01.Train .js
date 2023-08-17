function train(arr) {
   let passengersArray = arr[0].split(" ").map(Number);
   let capacity = Number(arr[1]);


   for (let i = 2; i < arr.length; i++) {
      let command = arr[i].split(' ');

      if (command[0] === "Add") {
         passengersArray.push(Number(command[1]));
      } else {
         let newPassenger = Number(command[0]);

         for (let j = 0; j < passengersArray.length; j++) {

            if (capacity - passengersArray[j] >= newPassenger) {
               passengersArray[j] += newPassenger;
               break;
            }

         }

      }

   }

   console.log(passengersArray.join(" "));

}


train(['32 54 21 12 4 0 23',
   '75',
   'Add 10',
   'Add 0',
   '30',
   '10',
   '75'])