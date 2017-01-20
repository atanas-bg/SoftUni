/**
 * Created by User on 4.11.2016 г..
 */
let sum = require("../Sum-array").sum;
let expect = require("chai").expect;

describe("Test sum(arr)", function () {
    describe('New group', function () {
        it("should return 3 for [1, 2]", function () {
            let expectedSum = 3;
            let actualSum = sum([1, 2]);
            expect(actualSum).to.be.equal(expectedSum);
        });
    });
    it("should return 3 for [1, 2]", function () {
        let expectedSum = 5;
        let actualSum = sum([2, 3]);
        expect(actualSum).to.be.equal(expectedSum);
    })

    it("should return NaN for ['Pesho']", function () {
        let expectedSum = 5;
        let actualSum = sum(['Pesho']);
        expect(actualSum).to.be.NaN;
    })
});


console.log(sum([2, 3]));