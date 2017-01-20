/**
 * Created by User on 4.11.2016 г..
 */
let rgbToHexColor = require('../RGB-to-Hex').rgbToHexColor;
let expect = require('chai').expect;

describe('Tests rgbToHexColor(red, green, blue)', function () {
    describe('Tests with valid input', function () {
        it('should return #7D23FE for rgbToHexColor(125, 35, 254)', function () {
            expect(rgbToHexColor(125, 35, 254)).to.be.equal('#7D23FE');
        });
        it('should return #000000 for rgbToHexColor(0, 0, 0)', function () {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        });
        it('should return #FFFFFF for rgbToHexColor(255, 255, 255)', function () {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
        });
    });
    describe('Tests with invalid input', function () {
        it('should return undefined for rgbToHexColor(3.5, 255, 255)', function () {
            expect(rgbToHexColor(3.5, 255, 255)).to.be.equal(undefined);
        });
        it('should return undefined for rgbToHexColor(255, 45.67, 255)', function () {
            expect(rgbToHexColor(255, 45.67, 255)).to.be.equal(undefined);
        });
        it('should return undefined for rgbToHexColor(255, 255, 23.009)', function () {
            expect(rgbToHexColor(255, 255, 23.009)).to.be.equal(undefined);
        });
        it('should return undefined for rgbToHexColor(-35, 255, 255)', function () {
            expect(rgbToHexColor(-35, 255, 255)).to.be.equal(undefined);
        });
        it('should return undefined for rgbToHexColor(255, -45, 255)', function () {
            expect(rgbToHexColor(255, -45, 255)).to.be.equal(undefined);
        });
        it('should return undefined for rgbToHexColor(255, 255, -23)', function () {
            expect(rgbToHexColor(255, 255, -23)).to.be.equal(undefined);
        });
        it('should return undefined for rgbToHexColor(256, 255, 255)', function () {
            expect(rgbToHexColor(256, 255, 255)).to.be.equal(undefined);
        });
        it('should return undefined for rgbToHexColor(255, 256, 255)', function () {
            expect(rgbToHexColor(255, 256, 255)).to.be.equal(undefined);
        });
        it('should return undefined for rgbToHexColor(255, 255, 256)', function () {
            expect(rgbToHexColor(255, 255, 256)).to.be.equal(undefined);
        });
    });
});