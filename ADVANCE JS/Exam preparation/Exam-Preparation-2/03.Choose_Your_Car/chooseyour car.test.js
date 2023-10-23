const expect = require("chai").expect;
const { chooseYourCar } = require("./chooseYourCar");

describe("chooseYourCar", () => {
    describe("choosingType", () => {
        it("should throw error for invalid input year", () => {
            expect(() => chooseYourCar.choosingType("Sedan", "red", 1899)).to.throw(`Invalid Year!`)
            expect(() => chooseYourCar.choosingType("Sedan", "red", 2023)).to.throw(`Invalid Year!`)
        })
        it("should throw error for invalid input type", () => {
            expect(() => chooseYourCar.choosingType("Mazda", "red", 2010)).to.throw(`This type of car is not what you are looking for.`)
            expect(() => chooseYourCar.choosingType("BMW", "red", 2010)).to.throw(`This type of car is not what you are looking for.`)
            expect(() => chooseYourCar.choosingType("blue", "Sedan", 2010)).to.throw(`This type of car is not what you are looking for.`)
        })
        it("shoud return correct massage for valid type and year", () => {
            expect(chooseYourCar.choosingType("Sedan", "red", 2011)).to.equal(`This red Sedan meets the requirements, that you have.`)
            expect(chooseYourCar.choosingType("Sedan", "blue", 2010)).to.equal(`This blue Sedan meets the requirements, that you have.`)
            expect(chooseYourCar.choosingType("Sedan", "red", 2009)).to.equal(`This Sedan is too old for you, especially with that red color.`)
            expect(chooseYourCar.choosingType("Sedan", "gree", 2000)).to.equal(`This Sedan is too old for you, especially with that gree color.`)
        })
    })
    describe("brandName", () => {
        it("shoud throw erro for invalid input data", () => {
            expect(() => chooseYourCar.brandName("BMW", 0)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], "2")).to.throw("Invalid Information!")
            //let brandArray = ["BMW", "Toyota", "Peugeot"]
            //let arraylength = brandArray.length-1
            expect(() => chooseYourCar.brandName({}, 2)).to.throw("Invalid Information!")
        })
        it("should return correct array brand when an index is submitted", () => {
          let brandArray = ["BMW", "Toyota", "Peugeot"];
          let brandIndex = 1;
          brandArray = brandArray.slice(1,1);
          brandArray.join(", ")
          expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal("BMW, Peugeot")
        })
        it("should return correct array brand when an index is submitted", () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot", "Mazda"], 0)).to.equal("Toyota, Peugeot, Mazda")
          })
    })
    describe("carFuelConsumption", () => {
        it("should return error for invalid input data", () => {
            expect(() => chooseYourCar.carFuelConsumption("100", 200)).to.throw()
            expect(() => chooseYourCar.carFuelConsumption(0, 200)).to.throw()
            expect(() => chooseYourCar.carFuelConsumption(100, "20")).to.throw()
            expect(() => chooseYourCar.carFuelConsumption(100, 0)).to.throw()
            expect(() => chooseYourCar.carFuelConsumption(-100, 20)).to.throw()
            expect(() => chooseYourCar.carFuelConsumption(2540, -89)).to.throw()
        })
        it("should return correct massage for liters less than 7", () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.")
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal("The car is efficient enough, it burns 5.00 liters/100 km.")
        })
        it("should return correct answer for invalid data input", () => {
            expect(chooseYourCar.carFuelConsumption(300, 35)).to.equal("The car burns too much fuel - 11.67 liters!")
            expect(chooseYourCar.carFuelConsumption(440, 32)).to.equal("The car burns too much fuel - 7.27 liters!")
        })
    })

})