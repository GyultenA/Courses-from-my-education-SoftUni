const { assert } = require ("chai")
const { isOddOrEven } = require("./02.Even or Odd ex");


describe("test with incorrect input", () => {
    it("test with object", () => {
        assert.equal(isOddOrEven({prop: "City"}, undefined, "return value must be a undefine"))

    })

    it("test with array", () => {
        assert.equal(isOddOrEven(["City"], undefined, "return value must be a undefine"))

    })

    it("test with number", () => {
        assert.equal(isOddOrEven(10, undefined, "return value must be a undefine"))

    })

})

describe("test with correct input", () =>{
    it("test with even word", () =>{
        assert.equal(isOddOrEven("toto"), "even", "return value should be an even")
        assert.equal(isOddOrEven("2222"), "even", "return value must be an  even")
        assert.equal(isOddOrEven("[]"), "even", "return value must be an  even")

    })

    it("test with odd word", () =>{
        assert.equal(isOddOrEven("too"), "odd", "return value should be an odd")
        assert.equal(isOddOrEven("222"), "odd", "return value must be an  odd")
        assert.equal(isOddOrEven("[1]"), "odd", "return value must be an  odd")
    })
})