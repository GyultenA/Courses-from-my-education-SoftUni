const expect = require("chai").expect;
const { weddingDay } = require("./weddingDay")

describe("weddingDay", () => {
    describe("pickVenue", () => {
        it("should throw error for invalid input", () => {
            expect(() => weddingDay.pickVenue("100", 50, "Sofia")).to.throw("Invalid Information!")
            expect(() => weddingDay.pickVenue(100, 50, ["Sofia"])).to.throw("Invalid Information!")
            expect(() => weddingDay.pickVenue(100, "50", "Sofia")).to.throw("Invalid Information!")
        })
        it("should throw error for invalid location", () => {
            expect(() => weddingDay.pickVenue(100, 50, "Sofia")).to.throw("The location of this venue is not in the correct area!")
        })
        it("should throw error for invalid location", () => {
            expect(weddingDay.pickVenue(150, 120, "Varna")).to.equal("This venue meets the requirements, with capacity of 150 guests and 120$ cover.")
            expect(weddingDay.pickVenue(151, 119, "Varna")).to.equal("This venue meets the requirements, with capacity of 151 guests and 119$ cover.")
        })
        it("should return correct answer for location", () => {
            expect(weddingDay.pickVenue(149, 121, "Varna")).to.equal("This venue does not meet your requirements!")
            expect(weddingDay.pickVenue(145, 125, "Varna")).to.equal("This venue does not meet your requirements!")
        })
    })
    describe(" otherSpendings", () => {
        it("should throw error for invalid input data", () =>{
            expect(() => weddingDay.otherSpendings("flowers",["photography"], false)).to.throw("Invalid Information!")
            expect(() => weddingDay.otherSpendings(["flowers"],"photography", false)).to.throw("Invalid Information!")
            expect(() => weddingDay.otherSpendings(["flowers"],["photography"], "false")).to.throw("Invalid Information!")
            expect(() => weddingDay.otherSpendings("flowers",["photography"], true)).to.throw("Invalid Information!")
        })
        it("should return correct message for total price", () => {
            expect(weddingDay.otherSpendings(["flowers"], ["pictures"], true)).to.equal("You spend 1020$ for wedding decoration and photography with 15% discount!")
        })
        it("should return correct message for total price", () => {
            expect(weddingDay.otherSpendings(["Fabric drapes and curtains"], ["pictures"], true)).to.equal("You spend 935$ for wedding decoration and photography with 15% discount!")
        })
        it("should return correct message for total price", () => {
            expect(weddingDay.otherSpendings(["Fabric drapes and curtains"], ["video"], true)).to.equal("You spend 1445$ for wedding decoration and photography with 15% discount!")
        })
        it("should return correct message for total price", () => {
            expect(weddingDay.otherSpendings(["flowers"], ["video"], true)).to.equal("You spend 1530$ for wedding decoration and photography with 15% discount!")
        })
        it("should return correct message for total price", () => {
            expect(weddingDay.otherSpendings(["flowers"], ["video"], false)).to.equal("You spend 1800$ for wedding decoration and photography!")
        })
        it("should return correct message for total price", () => {
            expect(weddingDay.otherSpendings(["Fabric drapes and curtains"], ["video"], false)).to.equal("You spend 1700$ for wedding decoration and photography!")
        })
        it("should return correct message for total price", () => {
            expect(weddingDay.otherSpendings(["Fabric drapes and curtains"], ["pictures"], false)).to.equal("You spend 1100$ for wedding decoration and photography!")
        })
        it("should return correct message for total price", () => {
            expect(weddingDay.otherSpendings(["flowers"], ["pictures"], false)).to.equal("You spend 1200$ for wedding decoration and photography!")
        })
    })
    describe("tableDistribution", () => {
        it("should return error message for input data type and value", () =>{
            expect(() => weddingDay.tableDistribution("100",50)).to.throw("Invalid Information")
        })
        it("should return error message for input data type and value", () =>{
            expect(() => weddingDay.tableDistribution(100,'50')).to.throw("Invalid Information")
        })
        it("should return error message for input data type and value", () =>{
            expect(() => weddingDay.tableDistribution(100,0)).to.throw("Invalid Information")
        })
        it("should return error message for input data type and value", () =>{
            expect(() => weddingDay.tableDistribution(0,20)).to.throw("Invalid Information")
        })
        it("should return error message for input data type and value", () =>{
            expect(() => weddingDay.tableDistribution(-1,20)).to.throw("Invalid Information")
        })
        it("should return error message for input data type and value", () =>{
            expect(() => weddingDay.tableDistribution(50,-1)).to.throw("Invalid Information")
        })
        it("should return correct value for people on table", () => {
            expect(weddingDay.tableDistribution(60,10)).to.equal("You have 10 tables with 6 guests on table.")
        })
        it("should return correct value for people on table", () => {
            expect(weddingDay.tableDistribution(120,15)).to.equal("You have 15 tables with 8 guests on table.")
        })
        it("should return correct value for people on table", () => {
            expect(weddingDay.tableDistribution(59,10)).to.equal("You have 10 tables with 6 guests on table.")
        })
        it("should return correct value for people on table", () => {
            expect(weddingDay.tableDistribution(54,10)).to.equal("There is only 5 people on every table, you can join some tables.")
        })
        it("should return correct value for people on table", () => {
            expect(weddingDay.tableDistribution(133,17)).to.equal("You have 17 tables with 8 guests on table.")
        })
    
    })
})