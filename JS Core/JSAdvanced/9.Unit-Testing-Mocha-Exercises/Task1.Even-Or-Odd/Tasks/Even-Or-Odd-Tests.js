/**
 * Created by User on 6.11.2016 г..
 */
let isOddOrEven = require('../Even-Or-Odd').isOddOrEven;
let expect = require('chai').expect;


describe('Test isOddOrEven(string)', function () {
    describe('Tests with valid input', function () {
        it('should return even for isOddOrEven("mimi")', function () {
            expect(isOddOrEven('mimi')).to.be.equal('even');
        });
        it('should return odd for isOddOrEven("Nasko")', function () {
            expect(isOddOrEven('Nasko')).to.be.equal('odd');
        });
        it('should return odd for isOddOrEven("")', function () {
            expect(isOddOrEven("")).to.be.equal('even');
        });
    });
    describe('Tests with invalid input', function () {
        it('should return undefined for isOddOrEven(23)', function () {
            expect(isOddOrEven(23)).to.be.equal(undefined);
        });
        it('should return undefined for isOddOrEven(["Ivan"])', function () {
            expect(isOddOrEven(['Ivan'])).to.be.equal(undefined);
        });
        it('should return undefined for isOddOrEven()', function () {
            expect(isOddOrEven()).to.be.equal(undefined);
        });
    });
});