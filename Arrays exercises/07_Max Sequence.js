function sequenceMax(array){
    
    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNumber = 0;

    for( let i = 0; i < array.length; i++){

        if( i !== 0){
            let currNumber = Number (array[i]);
            let prevNumber = Number (array[i - 1]);

            if (currNumber === prevNumber){
                sequence++;

                if (sequence > maxSequence){
                    maxSequence = sequence;
                    maxSequenceNumber = currNumber;
                }

            } else {
                sequence = 1;
            }
        }
    }
    console.log (`${(maxSequenceNumber + " ").repeat(maxSequence)}`);

}
sequenceMax([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);