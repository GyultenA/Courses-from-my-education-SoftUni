function pascalCaseSplitter(input){
    let result = "";

    let firstIndex = 0;

    for (let i = 1; i < input.length; i++){
        let secondIndex = i;

        if (input[i].toUpperCase() === input[i]){
            result += input.substring(firstIndex, secondIndex) + ", ";

            firstIndex = secondIndex;
        }
    }

    result += input.substring(firstIndex);
    console.log(result);

}

pascalCaseSplitter('ThisIsSoAnnoyingToDo');
console.log("-----");
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')