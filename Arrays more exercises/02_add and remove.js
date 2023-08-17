function addAndRemove (array){

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'remove') {
            newArray.pop();
        } else if (array[i] === 'add') {
            newArray.push(i + 1);
        }
        if (array.length === 0){
            console.log ("Empty");
        }
    }

    console.log(newArray.join(" "));

}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add'])