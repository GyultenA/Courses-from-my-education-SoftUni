const { expect } = require("chai");
const { createCalculator } = require("./07. Add_subtract");
//Return a module (object), containing the functions add(), subtract() and get() as properties
//Keep an internal sum that can’t be modified from the outside
//The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
//The function get() returns the value of the internal sum


describe("Tests to check the functionality ", () => {
    it('return object of type object', () => {
        const obj = createCalculator();
        expect(typeof obj === 'object').to.be.true;
    });
    it('return object that have properties add, subtract and get', () => {
        const obj = createCalculator();
        expect(typeof obj.add === 'function').to.be.true;
        expect(typeof obj.subtract === 'function').to.be.true;
        expect(typeof obj.get === 'function').to.be.true;
    });
    it('return internal sum that can be modified and get from outside', () => {
        const obj = createCalculator();
        let testingSum = obj.get();
        expect(testingSum === 0).to.be.true;
        obj.add(1);
        testingSum = obj.get();
        expect(testingSum).to.equal(1);
        obj.subtract(1);
        testingSum = obj.get();
        expect(testingSum).to.equal(0);
    });
    it('should be parsed to a number if received input string', () => {
        const obj = createCalculator();
        obj.add('1');
        expect(obj.get()).to.equal(1);
        obj.add('2');
        obj.subtract('1');
        expect(obj.get()).to.equal(2);
    });
    it('it should work with floating point numbers', () => {
        const obj = createCalculator();
        obj.add(1.2);
        obj.add(2.2);
        expect(Number(obj.get().toFixed(1))).to.equal(3.4);
        obj.subtract(1.1);
        expect(Number(obj.get().toFixed(1))).to.equal(2.3);
    });
    it('it should work with negative numbers', () => {
        const obj = createCalculator();
        obj.add(-2);
        obj.subtract(-1);
        expect(obj.get()).to.equal(-1);
    });


})



