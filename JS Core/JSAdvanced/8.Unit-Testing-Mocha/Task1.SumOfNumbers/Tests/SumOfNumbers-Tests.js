/**
 * Created by User on 4.11.2016 г..
 */
let sum = require('../SumOfNumbers').sum;
let expect = require('chai').expect;

describe('Test sum(arr)', function () {
    describe('Valid input entries tests', function () {
        it('should return 3 for sum([1, 2])', function () {
            expect(sum([1, 2])).to.be.equal(3, 'Incorrect result for sum([1, 2])');
        });
        it('should return 0 for sum([])', function () {
            expect(sum([])).to.be.equal(0, 'Incorrect result for sum([])');
        });
        it('should return -11 for sum([-5, -6])', function () {
            expect(sum([-5, -6])).to.be.equal(-11, 'Incorrect result for sum([-5, -6])');
        });
        it('should return 143 for sum([143])', function () {
            expect(sum([143])).to.be.equal(143, 'Incorrect result for sum([143])');
        });
        it('should return 8 for sum([2.35, 5.65])', function () {
            expect(sum([2.35, 5.65])).to.be.equal(2.35 + 5.65, 'Incorrect result for sum([2.35, 5.65])');
        });
        it('should return 3.30 for sum([-2.35, 5.65])', function () {
            expect(sum([-2.35, 5.65])).to.be.equal(-2.35 + 5.65, 'Incorrect result for sum([-2.35, 5.65])');
        });
    });
    describe('Invalid input entries tests', function () {
        it('should return NaN for sum(["Nasko"])', function () {
            expect(sum(['Nasko'])).to.be.NaN;
        });
        it('should return TypeError for sum(3, 5)', function () {
            expect(function () {
                sum(3, 5)
            }).to.throw(TypeError);
        });
    })
});