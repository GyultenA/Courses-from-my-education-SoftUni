const { expect } = require("chai");
const { isSymmetric } = require("./05. Check for Symmentry");

//isSymmetric()'. It should meet the following requirements:
//Take an array as an argument
//Return false for any input that isn’t of the correct type
//Return true if the input array is symmetric
//Otherwise, return false


describe("Is Symmetric", () => {
    it("should return false if input is not an array", () => {
        let input = "Not array";  //arrange
        let result = isSymmetric(input); //act
        expect(result).to.be.false; // assert

    })

    it("should return true if array is a symmetric", () => {
        let input = [1, 2, 3, 4, 3, 2, 1]; // arrange
        let result = isSymmetric(input);  // act
        expect(result).to.be.true;  // assert

    })

    it("should return false if input array is not symmetric", () => {
        let input = [1, 2, 3, 4, 3, 2]; //arrange
        let result = isSymmetric(input) // act
        expect(result).to.be.false; // assert

    })

    it("return false if an array includes mix elements", () => {
        let input = [1, '2', 3]; // arrange
        let result = isSymmetric(input); // act
        expect(result).to.be.false; // assert

    })

    it("return false if an array is empty", () => {
        let input = [];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    })

    it("return false if input is not array", () => {
        let input = (1, 2, 3)
        let result = isSymmetric(input);
        expect(result).to.be.false;

    })

})





// it('does not work if arg is not array', () => {
//     expect(!Array.isArray([1, 2, 3])).to.be.false;
// });
// it('works with strings filled symmetric array', () => {
//     expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
// });
// it('returns false for type mismatched elements', () => {
//     expect(isSymmetric([1, 2, '1'])).to.be.false;
// });

// });