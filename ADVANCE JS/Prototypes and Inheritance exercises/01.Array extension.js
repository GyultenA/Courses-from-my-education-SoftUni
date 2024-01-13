(function arrayExtension() {
    //console.log("Work")
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        return this.slice(n)
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n)
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, value) => acc + value)
    }

    Array.prototype.average = function () {
        return this.sum() / this.length
    }

})()

console.log([1, 2, 3, 4].last());
console.log([1, 2, 3, 4, 8, 9, 11].skip(2))
console.log([1, 2, 3, 4, 8, 9, 11].take(2))
console.log([1, 2, 3, 4].sum())
console.log([1, 2, 3, 4].average())