const  expect  = require("chai").expect;
const { assert } = require("chai");
let { sum } = require("./04.Sum of numbers");

//const { sum } = require("./04.Sum of numbers")

describe("Test Sum", () => {
    //arrange, act, assert
    it("should return correct result with array of numbers", () => {
        // Arrange
        let arr = [1, 2, 3];
        // Act
        let result = sum(arr);
        //Assert
        expect(result).to.be.equal(6);
    });

    
    it ("should return NaN if input is not an array", () => {
     //Arrange
      let arr = "Invalid array"
      //Act
      let result = sum(arr);
      // Assert
      expect(result).to.be.NaN;
    });

    
    it ("should calculate correct result with array of mixed types", () => {
      //Arrange
      let arrMix = ["1", true, 2]
      //Act
      let result = sum(arrMix);
      //Assert
      expect(result).to.be.equal(4)
    })
});
