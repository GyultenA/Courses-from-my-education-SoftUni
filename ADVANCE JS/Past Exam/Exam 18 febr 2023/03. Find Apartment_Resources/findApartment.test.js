const expect = require("chai").expect
const { findNewApartment } = require("./findApartment")

describe("findNewApartment", () => {
    describe("isGoodLocation", () => {
        it("should throw error for invalid input", () => {
            expect(() => findNewApartment.isGoodLocation("Sofia", "false")).to.throw("Invalid input!")
            expect(() => findNewApartment.isGoodLocation("Sofia", 2)).to.throw("Invalid input!")
            expect(() => findNewApartment.isGoodLocation(false, "Sofia")).to.throw("Invalid input!")
            expect(() => findNewApartment.isGoodLocation("Sofia", ["false"])).to.throw("Invalid input!")
            expect(() => findNewApartment.isGoodLocation(1, false)).to.throw("Invalid input!")
        })
        it("should return correct massage for invalid city", () => {
            expect(findNewApartment.isGoodLocation("Vidin", true)).to.equal("This location is not suitable for you.")
            expect(findNewApartment.isGoodLocation("Pleven", false)).to.equal("This location is not suitable for you.")
        })
        it("should return correct message for valid city and true", () => {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!")
            expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal("You can go on home tour!")
        })
        it("should return correct message for valid city and false", () => {
            expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.")
            expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal("There is no public transport in area.")
        })
    })
    describe("isLargeEnough", () => {
        it("should throw error for invalid input data", () => {
            expect(() => findNewApartment.isLargeEnough(30, 40, 30)).to.throw("Invalid input!")
            expect(() => findNewApartment.isLargeEnough({ 30: 30 }, 30)).to.throw("Invalid input!")
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], "30")).to.throw("Invalid input!")
            expect(() => findNewApartment.isLargeEnough(['40', '50', '60'], "30")).to.throw("Invalid input!")
        })
        it("should return correct array of apartments", () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal("60")
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal("50, 60")
            expect(findNewApartment.isLargeEnough([40,50,40,20], 55)).to.equal('');
            expect(findNewApartment.isLargeEnough([40, 50, 60, 75, 80], 60)).to.equal("60, 75, 80")
        })
    })

    describe("isItAffordable", () => {
        it("should throw error for invalid input", () => {
            expect(() => findNewApartment.isItAffordable("700", 1500)).to.throw("Invalid input!")
            expect(() => findNewApartment.isItAffordable(700, "1500")).to.throw("Invalid input!")
        })
        it("should return correct result", () => {
            expect(findNewApartment.isItAffordable(700, 1500)).to.equal("You can afford this home!")
            expect(findNewApartment.isItAffordable(700, 701)).to.equal("You can afford this home!")
        })
        it("should return correct result", () => {
            expect(findNewApartment.isItAffordable(700, 699)).to.equal("You don't have enough money for this house!")
            expect(findNewApartment.isItAffordable(700, 650)).to.equal("You don't have enough money for this house!")
        })
    })

})