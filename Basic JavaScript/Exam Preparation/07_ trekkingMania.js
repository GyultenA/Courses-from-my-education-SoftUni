function trekkingMania (input){
   let countGroups = Number (input[0]);

   let group1Count = 0
   let group2Count = 0;
   let group3Count = 0;
   let group4Count = 0;
   let group5Count = 0;

   for (let i = 1; i <= countGroups;i++){
      let curentGroup = Number (input[i]);

      if (curentGroup <= 5){
         group1Count += curentGroup;
      } else if (curentGroup <= 12){
         group2Count += curentGroup;
      } else if ( curentGroup <= 25){
        group3Count += curentGroup;
      } else if (curentGroup <= 40){
        group4Count += curentGroup;
      } else {
        group5Count += curentGroup;
      }

   }

   let totalPeople = group1Count + group2Count + group3Count + group4Count + group5Count;

   let group1Percent = (group1Count / totalPeople) * 100;
   let group2Percent = (group2Count / totalPeople) * 100;
   let group3Percent = (group3Count / totalPeople) * 100;
   let group4Percent = (group4Count / totalPeople) * 100;
   let group5Percent = (group5Count / totalPeople) * 100;

   console.log(`${group1Percent.toFixed(2)}%`);
   console.log(`${group2Percent.toFixed(2)}%`);
   console.log(`${group3Percent.toFixed(2)}%`);
   console.log(`${group4Percent.toFixed(2)}%`);
   console.log(`${group5Percent.toFixed(2)}%`);

}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
