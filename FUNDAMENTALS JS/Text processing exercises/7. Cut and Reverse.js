function cutAndReverse(input) {

    let firstHalf = input.split("").slice(0, input.length / 2);
    let firstReverse = firstHalf.reverse().join("");

    let secondHalf = input
        .split("")
        .slice(input.length / 2)
        .reverse()
        .join("")

    console.log(firstReverse)
    console.log(secondHalf)

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')