/**
 * Created by User on 4.11.2016 г..
 */
let createCalculator = require('../Add-Substract').createCalculator;
let expect = require('chai').expect;

describe('Tests createCalculator()', function () {
    describe('Tests with valid input', function () {
        describe('Create calculator', function () {
            let calc;
            beforeEach(function () {
                calc = createCalculator();
            });
            // calc = createCalculator();
            it('should return 0 for and calc.get()', function () {
                expect(calc.get()).to.be.equal(0);
            });
            it('should return 56 for calc.add(56) and calc.get()', function () {
                calc.add(56);
                expect(calc.get()).to.be.equal(56);
            });
            it('should return 44 for calc.add(44) and calc.get()', function () {
                calc.add(44);
                expect(calc.get()).to.be.equal(44);
            });
            it('should return -25 for calc.subtract(25) and calc.get()', function () {
                calc.subtract(25);
                expect(calc.get()).to.be.equal(-25);
            });
            it('should return 49.45 for calc.subtract(25.55) and calc.get()', function () {
                calc.subtract(25.55);
                expect(calc.get()).to.be.equal(- 25.55);
            });
            it('should return 55 for calc.add("5.55") and calc.get()', function () {
                calc.add('5.55');
                expect(calc.get()).to.be.equal(5.55);
            });
            // it('should return 30 for calc.subtract("25") and calc.get()', function () {
            //     calc.subtract('25');
            //     expect(calc.get()).to.be.equal(75 - 25.55 + 5.55 - 25);
            // });
            it('should return -70 for calc.subtract("100") and calc.get()', function () {
                calc.subtract('100');
                expect(calc.get()).to.be.equal( - 100);
            });

        });
        describe('Tests with invalid input', function () {
            describe('Create calculator', function () {
                let calc;
                beforeEach(function () {
                    calc = createCalculator();
                });
                it('should return NaN for calc.subtract("Ivan") and calc.get()', function () {
                    calc.subtract('Ivan');
                    expect(calc.get()).to.be.NaN;
                });
                it('should return NaN for calc.add("Nasko") and calc.get()', function () {
                    calc.add('Nasko');
                    expect(calc.get()).to.be.NaN;
                });
                it('should return NaN for calc.add(NaN) and calc.get()', function () {
                    calc.add(NaN);
                    expect(calc.get()).to.be.NaN;
                });
                it('should return NaN for calc.subtract(NaN) and calc.get()', function () {
                    calc.subtract(NaN);
                    expect(calc.get()).to.be.NaN;
                });
                it('should return NaN for calc.add(undefined) and calc.get()', function () {
                    calc.add(undefined);
                    expect(calc.get()).to.be.NaN;
                });
                it('should return NaN for calc.subtract(undefined) and calc.get()', function () {
                    calc.subtract(undefined);
                    expect(calc.get()).to.be.NaN;
                });
            });
        });
    });
});