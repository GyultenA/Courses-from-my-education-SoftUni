function hospital(input) {
    let period = Number(input[0]);
    let treated = 0;
    let untreated = 0;
    let doctors = 7;

    for (let i = 1; i <= period; i++) {
        let patients = Number(input[i]);
        
        if (i % 3 == 0 && untreated > treated) {
            doctors++;
        }
 
        if (patients <= doctors) {
            treated += patients;
        }
        else {
            treated += doctors;
            untreated += patients - doctors;
        }
    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}
hospital (["4","7", "27", "9", "1"])