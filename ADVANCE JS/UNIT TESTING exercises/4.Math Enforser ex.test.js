const { expect }  = require ("chai").expect;
const { assert } = require("chai");
const { mathEnforcer } =  require("./4. Math Enforcer")

describe("addFive", () => {
    describe("incorrect value", ()=>{
        it("test with string", () =>{
            //expect
            assert.equal(mathEnforcer.addFive("pecho", undefined, "return value must be an undefined"))
        })

        it ("test with Object", () => {
            //expect
            assert.ok(!mathEnforcer.addFive(({name: "Some", age: 23}), undefined, "return value must be an undefined"))
        })

        it ("test with Array", () => {
            //expect
            assert.notOk(mathEnforcer.addFive(({name: "Some", age: 23}), undefined, "return value must be an undefined"))
        })


    })
})

describe("correct value", () =>{
    it("with negative value", () =>{
        assert.equal(mathEnforcer.addFive(-55), -50), "return value to be 50"
        assert.equal(mathEnforcer.addFive(-3), 2, "return value to be 2")
        assert.equal(mathEnforcer.addFive(-5.1), -0.1, "return value to be -0.1")
    })

    it("with positive value", () => {
        assert.equal(mathEnforcer.addFive(0), 5, "return value to be 5")
        assert.equal(mathEnforcer.addFive(10), 5, "return value to be 15")
        assert.equal(mathEnforcer.addFive(0.01), 5.01, "return value to be 15")
    })
})

describe("subtractTen", () =>{
    describe("incorrect value", ()=>{
        it("test with string", () =>{
            expect
            assert.equal(mathEnforcer.subtractTen("pecho","return value must be an undefined"))
        })

        it ("test with Object", () => {
            //expect
            assert.ok(!mathEnforcer.subtractTen(({name: "Some", age: 23}), "return value must be an undefined"))
        })

        it ("test with Array", () => {
           // expect
            assert.notOk(mathEnforcer.subtractTen([]), undefined, "return value must be an undefined")
        })

    })
    describe ("correct value", () => {
        it ("with negative number", () =>{
            assert.equal(mathEnforcer.subtractTen(-10), -20, "return value to be -20")
        assert.equal(mathEnforcer.subtractTen(0), -10, "return value to be -10")
        assert.equal(mathEnforcer.subtractTen(-9.9), -19.9, "return value to be -19.9")
        })
        it("with positive value", () => {
            assert.equal(mathEnforcer.subtractTen(10), 0, "return value to be 10")
            assert.equal(mathEnforcer.subtractTen(20), 10, "return value to be 10")
            assert.equal(mathEnforcer.subtractTen(15.5), 5.5, "return value to be 5.5")
        })
    })
})

describe("sum", ()=>{
    it ("with incorrect value", () =>{
        assert.equal(mathEnforcer.sum("sum", 10), undefined, "return")
        assert.equal(mathEnforcer.sum(0.5, 0.5),5, undefined, "return")
    })
    it("with positive value", () => {
        assert.equal(mathEnforcer.sum(10), 0, "return value to be 10")
        assert.equal(mathEnforcer.sum(20), 10, "return value to be 10")
        assert.equal(mathEnforcer.sum(15.5, 15.5), 31, "return value to be 31")
    })
})