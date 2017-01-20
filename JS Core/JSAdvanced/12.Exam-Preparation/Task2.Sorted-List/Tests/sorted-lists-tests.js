/**
 * Created by User on 12.11.2016 г..
 */
let SortedList = require('../sorted-list').SortedList;
let expect = require('chai').expect;

describe('Test SortedList class', function () {
    let sortedList;
    beforeEach(function () {
        sortedList = new SortedList();
    });
    it('checks SortedList for a constructor', function () {
        expect(typeof SortedList).to.be.equal('function');
    });
    it('checks if SortedList.add() exists', function () {
        expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true);
    });
    it('checks if SortedList.remove() exists', function () {
        expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true);
    });
    it('checks if SortedList.get() exists', function () {
        expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true);
    });
    it('checks if SortedList.size exists', function () {
        expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true);
    });
    describe('Test with valid inputs', function () {
        describe('Test SortedList.add(element)', function () {
            it('sortedList.add(23) should add 23 to inner collection', function () {
                sortedList.add(23);
                expect(sortedList.get(0)).to.be.equal(23);
            });
            it('sortedList.add(23) and sortedList.add(27) should add 23 and 27 to inner collection', function () {
                sortedList.add(23);
                sortedList.add(27);
                expect(sortedList.get(0)).to.be.equal(23);
                expect(sortedList.get(1)).to.be.equal(27);
            });
            it('sortedList.add(0) and sortedList.add(-1) should return -1 nad then 0 from a sorted inner collection', function () {
                sortedList.add(0);
                sortedList.add(-1);
                expect(sortedList.get(0)).to.be.equal(-1);
                expect(sortedList.get(1)).to.be.equal(0);
            });
            it('sortedList.add(2.5) and sortedList.add(3.6) should return elements in ascending order from the inner collection', function () {
                sortedList.add(2.5);
                sortedList.add(3.6);
                expect(sortedList.get(0)).to.be.equal(2.5);
                expect(sortedList.get(1)).to.be.equal(3.6);
            });
            it('sortedList.add(3.6) and sortedList.add(-2.5) should return elements in ascending order from the inner collection', function () {
                sortedList.add(3.6);
                sortedList.add(-2.5);
                expect(sortedList.get(0)).to.be.equal(-2.5);
                expect(sortedList.get(1)).to.be.equal(3.6);
            });
        });
        describe('Test SortedList.remove(index)', function () {
            it('sortedList.remove(3) should remove element on index 3 from the inner collection', function () {
                sortedList.add(2.5);
                sortedList.add(3.6);
                sortedList.add(10);
                sortedList.add(50);
                sortedList.add(150);
                expect(sortedList.get(3)).to.be.equal(50, 'Wrong index');
                sortedList.remove(3);
                expect(sortedList.get(3)).to.be.equal(150, 'Wrong element');
            });
            it('sortedList.remove(3) should remove element on index 3 from the inner collection', function () {
                sortedList.add(2.5);
                sortedList.add(3.6);
                sortedList.add(10);
                sortedList.add(50);
                sortedList.add(150);
                expect(sortedList.get(0)).to.be.equal(2.5, 'Wrong index');
                sortedList.remove(0);
                expect(sortedList.get(0)).to.be.equal(3.6, 'Wrong element');
            });
            it('sortedList.remove(4) should remove element on index 4 from the inner collection', function () {
                sortedList.add(2.5);
                sortedList.add(3.6);
                sortedList.add(10);
                sortedList.add(50);
                sortedList.add(150);
                expect(sortedList.get(4)).to.be.equal(150, 'Wrong index');
                sortedList.remove(4);
                expect(function () {
                    sortedList.get(4);
                }).to.throw(Error);
            });

        });
        describe('Test SortedList.get(index)', function () {
            it('sortedList.get(4) should return element on index 4 from the inner collection', function () {
                sortedList.add(2.5);
                sortedList.add(3.6);
                sortedList.add(10);
                sortedList.add(50);
                sortedList.add(150);
                expect(sortedList.get(4)).to.be.equal(150, 'Wrong index');
            });
            it('sortedList.get(0) should return element on index 0 from the inner collection', function () {
                sortedList.add(2.5);
                sortedList.add(3.6);
                sortedList.add(10);
                sortedList.add(50);
                sortedList.add(150);
                expect(sortedList.get(0)).to.be.equal(2.5, 'Wrong index');
            });
        });
        describe('Test SortedList.size', function () {
            it('sortedList.remove(0) should remove element on index 0 from the inner collection', function () {
                sortedList.add(2.5);
                sortedList.add(3.6);
                sortedList.add(10);
                sortedList.add(50);
                sortedList.add(150);
                expect(sortedList.size).to.be.equal(5, 'Wrong size');
                sortedList.remove(0);
                expect(sortedList.size).to.be.equal(4, 'Wrong size');
            });
            it('sortedList.size should should 0 size', function () {
                expect(sortedList.size).to.equal(0);
            });
        });
    });
    describe('Test with invalid inputs', function () {
        describe('Test SortedList.add(element)', function () {

        });
        describe('Test SortedList.remove(index)', function () {
            it('sortedList.remove(5) should throw an Error', function () {
                sortedList.add(2.5);
                sortedList.add(3.6);
                sortedList.add(10);
                sortedList.add(50);
                sortedList.add(150);
                expect(function () {
                    sortedList.remove(5);
                }).to.throw(Error);
            });
            it('sortedList.remove(-1) should should throw an Error', function () {
                sortedList.add(2.5);
                sortedList.add(3.6);
                sortedList.add(10);
                sortedList.add(50);
                sortedList.add(150);
                expect(function () {
                    sortedList.remove(-1);
                }).to.throw(Error);
            });
            it('sortedList.remove(0) for an empty collection should should throw an Error', function () {
                expect(function () {
                    sortedList.remove(0);
                }).to.throw(Error);
            });
        });
        describe('Test SortedList.get(index)', function () {
            it('sortedList.get(5) should throw an Error', function () {
                sortedList.add(2.5);
                sortedList.add(3.6);
                sortedList.add(10);
                sortedList.add(50);
                sortedList.add(150);
                expect(function () {
                    sortedList.get(5);
                }).to.throw(Error);
            });
            it('sortedList.get(-1) should should throw an Error', function () {
                sortedList.add(2.5);
                sortedList.add(3.6);
                sortedList.add(10);
                sortedList.add(50);
                sortedList.add(150);
                expect(function () {
                    sortedList.get(-1);
                }).to.throw(Error);
            });
            it('sortedList.get(0) for an empty collection should should throw an Error', function () {
                expect(function () {
                    sortedList.get(0);
                }).to.throw(Error);
            });
        });
        describe('Test SortedList.size', function () {

        });
    });
});