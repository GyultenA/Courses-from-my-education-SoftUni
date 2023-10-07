const { expert, expect } = require ("chai");
const { rgbToHexColor } = require("./06. RGB to NEX");

//function named 'rgbToHexColor()', which takes three arguments. It should meet the following requirements:
//Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
//Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
//Return undefined if any of the input parameters are of an invalid type or not in the expected range


describe ("Test Color", () => {

    it('fails if some of the integers is over 255', () => {
        let num1 = 256
        let num2 = 256
        let num3 = 256
        let result  = rgbToHexColor(num1, num2, num3);

       expect(result).to.undefined;
       
    });

    it("valid input integers", () => {
        let num1 = 60;
        let num2 = 145;
        let num3 = 254;
        let result = rgbToHexColor(num1, num2, num3);
        expect(result).to.be.equals("#3C91FE")
    })

    //it(`fails if has more than 3 parameters -> (0, 0, 0, 0) -> undefined`, () => {
       // let num = 65;
        //let num1 = 125
        //let num2 = 150;
        //let num3 = 200;
        ///let result = rgbToHexColor(num, num1, num2, num3)
        //expect(result).to.be.NaN
    //})
    it(`invalid range red -> (-1, 0, 0) -> undefined`, () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equals(undefined)
    })
    it(`invalid range green -> (0, -1, 0) -> undefined`, () => {
        expect(rgbToHexColor(0, 256, 0)).to.equals(undefined)
    })
    it(`invalid range blue -> (0, 0, -1) -> undefined`, () => {
        expect(rgbToHexColor(0, 0, -1)).to.equals(undefined)
    })
    it(`invalid range above 255 -> (256, 0, 0) -> undefined`, () => {
        expect(rgbToHexColor(256, 0, 0)).to.equals(undefined)
    })

    it('fails if some param is missing', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0,)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });

})