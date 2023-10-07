const { expect } = require("chai");
const { lookupChar } = require("./03.Char Lookup ex");

describe("returning undefined", () => {
    it("should return undefined if the first parameter is NOT a string", () => {
        expect(lookupChar(1, 1)).to.be.undefined;
    })

    it("should return undefined if the second parameter is NOT a number", () => {
        expect(lookupChar("1", "1")).to.be.undefined;
    })

    it("should return undefined if the second parameter is NOT a integer", () => {
        expect(lookupChar("1", 1.5)).to.be.undefined;
    })
    it("should return undefined if any of the parameters are of incorrect type", () => {
        expect(lookupChar(['ads'], 1)).to.be.undefined;
        expect(lookupChar({op:'Pesho'}, 1)).to.be.undefined;
        expect(lookupChar('test', ['1'])).to.be.undefined;
        expect(lookupChar('test', {1:1})).to.be.undefined;
    })
})
describe("incorrect index", () =>{
    it("should return Incorrect index if index is lower than zero", () => {
        expect(lookupChar("test", -1)).to.equals("Incorrect index");
    })
    it("should return Incorrect index if index is bigger than string.length", () => {
        expect(lookupChar("test", 5)).to.equals("Incorrect index");
    })
})

describe("correct char", () =>{
    it("should return the correct char at index", () => {
        expect(lookupChar("test", 3)).to.equals("t");
    })
    it("should return the correct char at index", () => {
        expect(lookupChar("test", 0)).to.equals("t");
    })
    it("should return the correct char at index", () => {
        expect(lookupChar("test", 0)).to.equals("t");
    })

})

   

