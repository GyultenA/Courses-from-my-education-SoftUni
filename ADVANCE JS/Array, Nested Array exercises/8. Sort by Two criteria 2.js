function sortArrayByTwoCriteria2(input) {
    
    return input.sort(twoCriteriaSorting).join('\n');

    function twoCriteriaSorting(current, next) {
        if (current.length === next.length) {
            return current.localeCompare(next);
        }
        return current.length - next.length;
    }
}

console.log('++++++++++++++++++');
console.log(sortArrayByTwoCriteria2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));