/**
 * Created by User on 6.11.2016 г..
 */
let mathEnforcer = require('../MathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe("mathEnforcer",function(){
    describe("mathEnforcer.addFive(num)",function(){
        it("mathEnforcer.addFive(1.999) should be close to 6.999",function(){
            expect(mathEnforcer.addFive(1.5)).equal(1.5 + 5,"Numbers are close");
        });
        it("mathEnforcer.addFive(4) should return 9",function(){
            expect(mathEnforcer.addFive(4)).to.equal(9);
        });
        it("mathEnforcer.addFive(-4) should return 1",function(){
            expect(mathEnforcer.addFive(-4)).to.equal(1);
        });
        it("mathEnforcer.addFive(0) should return 5",function(){
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });
        it("mathEnforcer.addFive() should return undefined",function(){
            expect(mathEnforcer.addFive()).to.equal(undefined);
        });
        it("mathEnforcer.addFive('Pesho') should return undefined",function(){
            expect(mathEnforcer.addFive('pesho')).to.equal(undefined);
        });
        it("mathEnforcer.addFive('5') should return undefined",function(){
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });
        it("mathEnforcer.addFive([5]) should return undefined",function(){
            expect(mathEnforcer.addFive([5])).to.equal(undefined);
        });
        it("mathEnforcer.addFive({pesho:5}) should return undefined",function(){
            expect(mathEnforcer.addFive({pesho:5})).to.equal(undefined);
        });
    });

    describe("mathEnforcer.subtractTen(num)",function(){
        it("mathEnforcer.subtractTen(4) should return -6",function(){
            expect(mathEnforcer.subtractTen(4)).to.equal(-6);
        });
        it("mathEnforcer.subtractTen(-4) should return -14",function(){
            expect(mathEnforcer.subtractTen(-4)).to.equal(-14);
        });
        it("mathEnforcer.subtractTen(0) should return -10",function(){
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });
        it("mathEnforcer.subtractTen(10) should return 0",function(){
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it("mathEnforcer.subtractTen(5) should return -5",function(){
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it("mathEnforcer.subtractTen() should return undefined",function(){
            expect(mathEnforcer.subtractTen()).to.equal(undefined);
        });
        it("mathEnforcer.subtractTen('Pesho') should return undefined",function(){
            expect(mathEnforcer.subtractTen('pesho')).to.equal(undefined);
        });
        it("mathEnforcer.subtractTen(10.001) should be close to 0.001",function(){
            expect(mathEnforcer.subtractTen(10.5)).equal(10.5 - 10,"Numbers are close");
        });
        it("mathEnforcer.subtractTen('5') should return undefined",function(){
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
        });
        it("mathEnforcer.subtractTen([5]) should return undefined",function(){
            expect(mathEnforcer.subtractTen([5])).to.equal(undefined);
        });
        it("mathEnforcer.subtractTen({pesho:5}) should return undefined",function(){
            expect(mathEnforcer.subtractTen({pesho:5})).to.equal(undefined);
        });

    });

    describe("mathEnforcer.sum(num1,num2)",function(){
        it("mathEnforcer.sum(2,-8) should return -6",function(){
            expect(mathEnforcer.sum(2,-8)).to.equal(-6);
        });
        it("mathEnforcer.sum(2,3) should return 5",function(){
            expect(mathEnforcer.sum(2,3)).to.equal(5);
        });
        it("mathEnforcer.sum(-5,-5) should return -10",function(){
            expect(mathEnforcer.sum(-5,-5)).to.equal(-10);
        });
        it("mathEnforcer.sum(0,0) should return undefined",function(){
            expect(mathEnforcer.sum(0,0)).to.equal(0);
        });
        it("mathEnforcer.sum() should return undefined",function(){
            expect(mathEnforcer.sum()).to.equal(undefined);
        });
        it("mathEnforcer.sum('Pesho',3) should return undefined",function(){
            expect(mathEnforcer.sum('pesho',3)).to.equal(undefined);
        });
        it("mathEnforcer.sum('Pesho','pesho') should return undefined",function(){
            expect(mathEnforcer.sum('pesho','pesho')).to.equal(undefined);
        });
        it("mathEnforcer.sum(3,'pesho') should return undefined",function(){
            expect(mathEnforcer.sum(3,'pesho')).to.equal(undefined);
        });
        it("mathEnforcer.sum([-5],[-5]) should return undefined",function(){
            expect(mathEnforcer.sum([-5],[-5])).to.equal(undefined);
        });
        it("mathEnforcer.sum('-5','-5') should return undefined",function(){
            expect(mathEnforcer.sum('-5','-5')).to.equal(undefined);
        });
        it("mathEnforcer.sum([-5,-5]) should return undefined",function(){
            expect(mathEnforcer.sum([-5,-5])).to.equal(undefined);
        });
        it("mathEnforcer.sum(10.0001,1.009) should be close to 11.0091",function(){
            expect(mathEnforcer.sum(10.2,1.2)).equal(10.2 + 1.2,"Numbers are close");
        });
    });
});