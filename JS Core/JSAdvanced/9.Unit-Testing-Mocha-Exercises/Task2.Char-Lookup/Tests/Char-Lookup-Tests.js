/**
 * Created by User on 6.11.2016 г..
 */
let lookupChar = require('../Char-Lookup').lookupChar;
let expect = require('chai').expect;

describe('Test lookupChar(string, index)', function () {
    describe('Tests with valid input', function () {
        it('should return r for lookupChar("Spiro", 3)', function () {
            expect(lookupChar('Spiro', 3)).equal('r');
        });
        it('should return S for lookupChar("Spiro", 0)', function () {
            expect(lookupChar('Spiro', 0)).equal('S');
        });
        it('should return o for lookupChar("Spiro", 4)', function () {
            expect(lookupChar('Spiro', 4)).equal('o');
        });
        it('should return " " for lookupChar("Spiro", 8)', function () {
            expect(lookupChar('Spiro is alone in the room.', 8)).equal(' ');
        });
    });
    describe('Tests with invalid input', function () {
        it('should return undefined for lookupChar("Spiro")', function () {
            expect(lookupChar('Spiro')).equal(undefined);
        });
        it('should return undefined for lookupChar(4)', function () {
            expect(lookupChar(4)).equal(undefined);
        });
        it('should return undefined for lookupChar("Spiro", "4")', function () {
            expect(lookupChar('Spiro', '4')).equal(undefined);
        });
        it('should return undefined for lookupChar(4, 5)', function () {
            expect(lookupChar(4, 5)).equal(undefined);
        });
        it('should return undefined for lookupChar(4, "Spiro")', function () {
            expect(lookupChar(4, 'Spiro')).equal(undefined);
        });
        it('should return undefined for lookupChar()', function () {
            expect(lookupChar()).equal(undefined);
        });
        it('should return "Incorrect index" for lookupChar("Spiro", -1)', function () {
            expect(lookupChar('Spiro', -1)).equal('Incorrect index');
        });
        it('should return "Incorrect index" for lookupChar("Spiro", 5)', function () {
            expect(lookupChar('Spiro', 5)).equal('Incorrect index');
        });
        it('should return "Incorrect index" for lookupChar("Spiro", 56)', function () {
            expect(lookupChar('Spiro', 56)).equal('Incorrect index');
        });
        it('should return "Incorrect index" for lookupChar("Spiro", NaN)', function () {
            expect(lookupChar('Spiro', NaN)).equal(undefined);
        });
        it('should return "Incorrect index" for lookupChar("Spiro", null)', function () {
            expect(lookupChar('Spiro', null)).equal(undefined);
        });
        it('should return "Incorrect index" for lookupChar("Spiro", undefined)', function () {
            expect(lookupChar('Spiro', undefined)).equal(undefined);
        });
        it('should return "Incorrect index" for lookupChar("", 0)', function () {
            expect(lookupChar('', 0)).equal('Incorrect index');
        });
    });
});