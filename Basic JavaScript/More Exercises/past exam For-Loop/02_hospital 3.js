function hospital(input){
    let index=0;
    let daysForTreatment = Number (input[index]);
    index++;
    let doctors =7;
    let treatedPatient=0;
    let untreatedPatient=0;
    let daysCount=0;
 
    for(let i =1;i<=daysForTreatment;i++){
        daysCount++
        if(daysCount % 3 == 0){
            if(untreatedPatient>treatedPatient){
                doctors++
            }
        }
        let patientPerDay = Number (input[index]);
        index++;
        if(patientPerDay<=doctors){
            treatedPatient+=patientPerDay;
        }else{
            untreatedPatient+=patientPerDay-doctors;
            treatedPatient+=doctors
        }
    }
    console.log(`Treated patients: ${treatedPatient}.`);
    console.log(`Untreated patients: ${untreatedPatient}.`);
}
hospital (["4","7", "27", "9", "1"])