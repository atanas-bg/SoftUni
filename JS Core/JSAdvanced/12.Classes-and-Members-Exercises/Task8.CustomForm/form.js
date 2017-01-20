/**
 * Created by User on 12.11.2016 г..
 */
let result = (function () {

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


    class Form {
        constructor() {
            for (let arg of this.arguments){
                if (arg.constructor.name != 'Textbox'){
                    throw new Error('Invalid argument');
                }
            }

            this._element = $('<div>');
            this._element.addClass('form');
            this._textboxes = [];
            for (let textbox of this.arguments){
                this._element.append(textbox.elements);
                this._textboxes.push(textbox);
            }
        }

        submit(){
            let result = true;
            for (textbox of this._textboxes){
                if(textbox.isValid()){
                    textbox.elements.css('border', '2px solid green')
                } else {
                    result = false;
                    textbox.elements.css('border', '2px solid red')
                }
            }
            return result;
        }

        attach(selector){
            let container = $(selector);
            container.append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");
