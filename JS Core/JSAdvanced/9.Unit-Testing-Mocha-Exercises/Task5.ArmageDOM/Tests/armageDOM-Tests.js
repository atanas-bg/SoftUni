/**
 * Created by User on 8.11.2016 г..
 */
let nuke = require('../armageDOM').nuke;
let expect = require('chai').expect;
let jsdom = require('jsdom-global');
let $ = require('jquery');


document.body.innerHTML =
    `<div id="target">
        <div class="nested target">
            <p>This is some text</p>
        </div>
        <div class="target">
            <p>Empty div</p>
        </div>
        <div class="inside">
            <span class="nested">Some more text</span>
            <span class="target">Some more text</span>
        </div>
    </div>`;
/*
 Your tests will be supplied a function named 'nuke'. It needs to meet the following:
 •	Operates inside an HTML document
 •	Takes two string arguments, each argument is a jQuery selector
 •	Upon execution, deletes all nodes that match both selectors
 •	Does nothing if either selector is invalid or omitted
 •	Does nothing if the two selectors are the same
 When testing, note that if the selector is an ID, jQuery will always return only the first element that is a match,
 as opposed to a collection of all elements with that ID.
 */


describe('Test nuke(selector1, selector2)', function () {
    describe("sharedObject", function () {
        before(()=> global.$ = $);
        describe('Test with valid input', function () {
            it('should delete all sel2 in sel1', function () {
                let sel1 = $('#target .nested');
                let sel2 = 'p';
                $(sel1).filter(sel2).remove();
                let target = $('#target .nested p');
                expect(target).equal(undefined);
            });
        });
        describe('Test with invalid input', function () {

        });
    });
});