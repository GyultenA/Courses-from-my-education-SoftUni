function addAndRemove(arr) {
    let result = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        counter++;
        if (arr[i] === "add") {
            result.push(counter);
        } else {
            result.pop()
        }
    }
    if (result.length <= 0) {
        console.log("Empty")
    } else {
        console.log(result.join("\n"));
    }

}

addAndRemove(['add', 'add', 'add', 'add']);
console.log("---------------");
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);