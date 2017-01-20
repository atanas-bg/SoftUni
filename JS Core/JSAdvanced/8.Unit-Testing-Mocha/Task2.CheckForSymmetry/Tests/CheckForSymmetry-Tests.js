/**
 * Created by User on 4.11.2016 г..
 */
let isSymmetric = require('../CheckForSymmetry').isSymmetric;
let expect = require('chai').expect;

describe('Tests isSymmetric(arr)', function () {
    describe('Check with valid input', function () {
        it('should return true for isSymmetric([1,2,3,2,1])', function () {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.be.equal(true);
        });
        it('should return true for isSymmetric([1,2,3,3,2,1])', function () {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.equal(true);
        });
        it('should return false for isSymmetric([1,2,3,3,2,1])', function () {
            expect(isSymmetric([1, 2, 3, 9, 2, 1])).to.be.equal(false);
        });
        it('should return true for isSymmetric([])', function () {
            expect(isSymmetric([])).to.be.equal(true);
        });
        it('should return true for isSymmetric([2, 2])', function () {
            expect(isSymmetric([2, 2])).to.be.equal(true);
        });
        it('should return true for isSymmetric([2])', function () {
            expect(isSymmetric([2])).to.be.equal(true);
        });
        it("should return true for isSymmetric(['ana', 'biob', 'biob', 'ana'])", function () {
            expect(isSymmetric(['ana', 'biob', 'biob', 'ana'])).to.be.equal(true);
        });
        it("should return true for isSymmetric([{a: 5}, {b: 45}, {b: 45}, {a: 5}])", function () {
            expect(isSymmetric([{a: 5}, {b: 45}, {b: 45}, {a: 5}])).to.be.equal(true);
        });
        it("should return true for isSymmetric([{a: 5}])", function () {
            expect(isSymmetric([{a: 5}])).to.be.equal(true);
        });

    });
    describe('Check with invalid input', function () {
        it('should return false for isSymmetric(1,2,3,2,1)', function () {
            expect(isSymmetric(1, 2, 3, 2, 1)).to.be.equal(false);
        });
        it('should return false for isSymmetric("abba")', function () {
            expect(isSymmetric('abba')).to.be.equal(false);
        });
    });
});