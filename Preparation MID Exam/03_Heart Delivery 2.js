function heartDelivery(input) {
    let myArray = input.shift().split("@").map(Number);

    let index = 0
    let command = input[index];
    index++;

    while(command !== "Love!"){
        let [jump, lengthNum] = command.split(" ");
        console.log(command)

        command = input[index]
        index++
    }

}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
console.log("----------------");
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])