function sortByTwoCriteria(arr) {
    let sortArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    return sortArr.join("\n");
}

console.log(sortByTwoCriteria(['alpha', 'beta', 'gamma']));
console.log(sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));