function hospital(input){

 let period = Number (input[0]);

 let treatedPatients = 0;
 let untreatedPatients = 0;
 let doctors = 7


 for (let i = 1; i <= period; i++){
   let dailyPatients = Number (input[i]);
   

   if (i % 3 === 0 && untreatedPatients > treatedPatients) {
    doctors++;
   }
   
   if (dailyPatients <= doctors){
         treatedPatients += dailyPatients;
   } else {
          treatedPatients += doctors;
          untreatedPatients += dailyPatients - doctors;
   }

 }
 console.log(`Treated patients: ${treatedPatients}.`);
 console.log(`Untreated patients: ${untreatedPatients}.`);

}

hospital (["4","7", "27", "9", "1"])