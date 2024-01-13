const { expect } = require("chai");
//const { describe } = require("mocha");
const { movieTheater } = require("./03. Movie Theater");

describe("movieTheater", () => {
    describe("ageRestrictions", () => {
       
        it("should return correct message for G movie rating", () =>{
            expect(movieTheater.ageRestrictions("G")).to.equal("All ages admitted to watch the movie")
        })
        it("should return correct message for PG movie rating", () =>{
            expect(movieTheater.ageRestrictions("PG")).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers")
        })
        it("should return correct message for NC-17 movie rating", () =>{
            expect(movieTheater.ageRestrictions("NC-17")).to.equal("No one under 17 admitted to watch the movie")
        })
        it("should return correct message for random string massage", () =>{
            expect(movieTheater.ageRestrictions("gbs")).to.equal("There are no age restrictions for this movie")
        })
    })
     describe("moneySpent", () => {
        it ("should calculate total cost with discount and return message", () => {
            expect(movieTheater.moneySpent(5, ["Nachos","Popcorn"], ["Soda"])).to.equal(`The total cost for the purchase with applied discount is 70.40`)
        })
        it ("should calculate total cost without discount and return message", () => {
            expect(movieTheater.moneySpent(1, ["Nachos","Popcorn"], ["Soda"])).to.equal(`The total cost for the purchase is 28.00`)
        })
        it ("should throw an error and return message with invalid data", () => {
            expect( () => movieTheater.moneySpent("1", ["Nachos","Popcorn"], ["Soda"])).to.throw(`Invalid input`)
        })
        it ("should throw an error and return message with invalid data", () => {
            expect( () => movieTheater.moneySpent(1, "Nachos", ["Soda"])).to.throw(`Invalid input`)
        })
     })
     describe("reservation", () => {
        it("should return the row number with enough seats for reservation", () => {
            expect(movieTheater.reservation( [
                { rowNumber: 1, freeSeats: 7 },
                { rowNumber: 2, freeSeats: 5 },
                { rowNumber: 3, freeSeats: 5 },
                { rowNumber: 4, freeSeats: 5 },
                { rowNumber: 4, freeSeats: 5 },
              ],6)).to.be.equal(1)
        })
        it("should throw error massage if the input data is invalid", () => {
            expect(() => movieTheater.reservation("something", 2)).to.throw("Invalid input")
        })
        it("should throw error massage if the input data is invalid", () => {
            expect(() => movieTheater.reservation([], "bgf")).to.throw("Invalid input")
        })

     })

})
