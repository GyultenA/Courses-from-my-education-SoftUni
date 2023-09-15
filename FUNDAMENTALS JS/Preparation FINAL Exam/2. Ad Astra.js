function adAstra(input) {
    let regex = /([#]|[|])(?<item>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/gm
    let totalCalories = 0;
    let buffer = "";

    let result = regex.exec(input);

    while (result) {
        let item = result.groups["item"];
        let date = result.groups["date"];
        let calories = Number(result.groups["calories"]);

        totalCalories += calories;
        buffer += `Item: ${item}, Best before: ${date}, Nutrition: ${calories}\n`
        result = regex.exec(input);
    }

    let days = Math.floor(totalCalories / 2000)
    console.log(`You have food to last you for: ${days} days!`);
    console.log(buffer);

}

adAstra('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|')