/**
 * Created by User on 11.11.2016 г..
 */
/*
 Textbox elements created from the class should have:
 •	public property value (has getters and setters)
 •	private property _elements containing the set of elements matching the selector
 •	public getter elements for the private _elements property
 •	private property _invalidSymbols - a regex used for validating the textbox value
 •	method isValid() - if the _invalidSymbols regex can be matched in the current textbox value return false, otherwise return true.
 All _elements values and the value property should be linked.
 If the value of an element from _elements changes all other elements' values and the value property should instantly reflect it,
 likewise should happen if the value property changes.

 */

class Textbox {
    constructor(selector, regex) {
        this._elements = $(selector);
        this._invalidSymbols = regex;
        // this._elements.on('input', $.proxy(function () {
        //     console.log(this);
        // }, this));
        // this._elements.on('input', function () {
        //     let inputValue = $(this).val();
        // }).bind(this);
        let that = this;
        this._elements.on('input', function () {
            that.value = $(this).val();
        });
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }

    get value() {
        return this._value;
    }

    set value(text) {
        this.elements.val(text);
        this._value = text;
    }

    get elements() {
        return this._elements;
    }
}


let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = $('.textbox');
textbox.value = 'Nasko';
inputs.on('input', function () {
    console.log(textbox.value);
});
