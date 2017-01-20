/**
 * Created by User on 7.11.2016 г..
 */
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML =
    `<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
    </div>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


describe('Test object sharedObject', function () {
    it('should return null for sharedObject.name', function () {
        expect(sharedObject.name).equal(null);
    });
    it('should return null for sharedObject.income', function () {
        expect(sharedObject.income).equal(null);
    });

    describe('Tests with invalid input', function () {
        describe('changeName', function () {
            it('should return TypeError for sharedObject.changeName()', function () {
                expect(function () {
                    sharedObject.changeName();
                    let objectName = sharedObject.name
                }).to.throw(TypeError);
            });
            it('should return TypeError for sharedObject.changeName()', function () {
                expect(function () {
                    sharedObject.changeName();
                    let textboxName = $('#name').val();
                }).to.throw(TypeError);
            });
            it('should return TypeError for sharedObject.changeName(undefined)', function () {
                expect(function () {
                    sharedObject.changeName(undefined);
                    let objectName = sharedObject.name
                }).to.throw(TypeError);
            });
            it('should return TypeError for sharedObject.changeName(undefined)', function () {
                expect(function () {
                    sharedObject.changeName(undefined);
                    let textboxName = $('#name').val();
                }).to.throw(TypeError);
            });
            it('with empty string should not change textbox name property for sharedObject.changeName("")', function () {
                let textboxName = $('#name');
                textboxName.val('Ivan');
                sharedObject.changeName("");
                expect(textboxName.val()).to.be.equal('Ivan');
            });
            it('with empty string should not change object name property for sharedObject.changeName("")', function () {
                sharedObject.name = 'Pesho';
                sharedObject.changeName("");
                let objectName = sharedObject.name;
                expect(objectName).to.be.equal('Pesho');
            });
        });

        describe('change income', function () {
            it('should not change object property for sharedObject.changeIncome()', function () {
                sharedObject.income = 90;
                sharedObject.changeIncome();
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(90);
            });
            it('should not change textbox property income for sharedObject.changeIncome()', function () {
                let textboxIncome = $('#income');
                textboxIncome.val(50);
                sharedObject.changeIncome();
                expect(textboxIncome.val()).equal('50');
            });
            it('should not change object property sharedObject.changeIncome(undefined)', function () {
                sharedObject.income = 46;
                sharedObject.changeIncome(undefined);
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(46);
            });
            it('should not change object property for sharedObject.changeIncome(undefined)', function () {
                let textboxIncome = $('#income');
                textboxIncome.val(34);
                sharedObject.changeIncome(undefined);
                expect(textboxIncome.val()).equal('34');
            });
            it('should not change object for sharedObject.changeIncome(NaN)', function () {
                sharedObject.income = 23;
                sharedObject.changeIncome(NaN);
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(23);
            });
            it('should not change textbox property for sharedObject.changeIncome(NaN)', function () {
                let textboxIncome = $('#income');
                textboxIncome.val(99);
                sharedObject.changeIncome(NaN);
                expect(textboxIncome.val()).equal('99');
            });
            it('should not change object property income for sharedObject.changeIncome(0)', function () {
                sharedObject.income = 66;
                sharedObject.changeIncome(0);
                let objectIncome = sharedObject.income;
                expect(objectIncome).to.be.equal(66);
            });
            it('should not change textbox property income for sharedObject.changeIncome(-120)', function () {
                let textboxIncome = $('#income');
                textboxIncome.val(44);
                sharedObject.changeIncome(-120);
                expect(textboxIncome.val()).to.be.equal('44');
            });
            it('should not change object property income for sharedObject.changeIncome(7.5)', function () {
                sharedObject.income = 77;
                sharedObject.changeIncome(7.5);
                let objectIncome = sharedObject.income;
                expect(objectIncome).to.be.equal(77);
            });
            it('should not change textbox property income for sharedObject.changeIncome(7.5)', function () {
                let textboxIncome = $('#income');
                textboxIncome.val(12);
                sharedObject.changeIncome(7.5);
                expect(textboxIncome.val()).to.be.equal('12');
            });
            it('should not change object property income for sharedObject.changeIncome("5")', function () {
                sharedObject.income = 78;
                sharedObject.changeIncome("5");
                let objectIncome = sharedObject.income;
                expect(objectIncome).to.be.equal(78);
            });
            it('should not change textbox property income for sharedObject.changeIncome("5")', function () {
                let textboxIncome = $('#income');
                textboxIncome.val(9);
                sharedObject.changeIncome("5");
                expect(textboxIncome.val()).to.be.equal('9');
            });
        });

        describe('updateName', function () {
            it('should not change object property name for sharedObject.updateName() with empty string', function () {
                sharedObject.name = 'gosho';
                $('#name').val('');
                sharedObject.updateName();
                let objectName = sharedObject.name;
                expect(objectName).equal('gosho');
            });
        });

        describe('updateIncome', function () {
            it('should not change object property income for sharedObject.updateIncome()', function () {
                sharedObject.income = 25;
                $('#income').val(null);
                sharedObject.updateIncome();
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(25);
            });
            it('should  not change object property income for sharedObject.updateIncome()', function () {
                sharedObject.income = 9;
                $('#income').val(0);
                sharedObject.updateIncome();
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(9);
            });
            it('should not change object property income for sharedObject.updateIncome()', function () {
                sharedObject.income = 8;
                $('#income').val(-5);
                sharedObject.updateIncome();
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(8);
            });
            it('should not change object property income for sharedObject.updateIncome()', function () {
                sharedObject.income = 7;
                $('#income').val(5.2);
                sharedObject.updateIncome();
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(7);
            });
            it('should not change object property income for sharedObject.updateIncome()', function () {
                sharedObject.income = 711;
                $('#income').val(undefined);
                sharedObject.updateIncome();
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(711);
            });
            it('should not change object property income for sharedObject.updateIncome()', function () {
                sharedObject.income = 47;
                $('#income').val(NaN);
                sharedObject.updateIncome();
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(47);
            });
            it('should not change object property income for sharedObject.updateIncome()', function () {
                sharedObject.income = 47;
                $('#income').val('');
                sharedObject.updateIncome();
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(47);
            });
        });
    });

    describe('Tests with valid input', function () {
        describe('changeName', function () {
            it('should return object property name "Nasko" for sharedObject.changeName("Nasko")', function () {
                sharedObject.name = 'Petar';
                sharedObject.changeName('Nasko');
                let objectName = sharedObject.name;
                expect(objectName).equal('Nasko');
            });
            it('should return textbox property name "Nasko" for sharedObject.changeName("Nasko")', function () {
                let textboxName = $('#name');
                textboxName.val('Ivan');
                sharedObject.changeName('Nasko');
                expect(textboxName.val()).equal('Nasko');
            });
        });
        describe('changeIncome', function () {
            it('should return object property income 120 for sharedObject.changeIncome(120)', function () {

                sharedObject.changeIncome(120);
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(120);
            });
            it('should return textbox property income 120 for sharedObject.changeIncome(120)', function () {
                sharedObject.changeIncome(120);
                let textboxIncome = $('#income').val();
                expect(textboxIncome).equal('120');
            });
        });

        describe('updateName', function () {
            it('should update object property name to "Nasko" for sharedObject.updateName()', function () {
                sharedObject.name = 'Mimi';
                let textbox = $('#name');
                textbox.val('Nasko');
                sharedObject.updateName();
                expect(sharedObject.name).equal('Nasko');
            });
        });
        describe('updateIncome', function () {
            it('should update object property income to 32 for sharedObject.updateIncome()', function () {
                sharedObject.income = 87;
                let textbox = $('#income');
                textbox.val(32);
                sharedObject.updateIncome();
                let objectIncome = sharedObject.income;
                expect(objectIncome).equal(32);
            });
        });
    });
});