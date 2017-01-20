/**
 * Created by User on 30.10.2016 г..
 */
let a = 123;
let b = 'Ivan';
let c = [a, b];
console.log(c);  // [ 123, 'Ivan' ]
let d = {a, b};
console.log(d);  // { a: 123, b: 'Ivan' }

// module pattern
let rect = {
    width: 10,
    height: 4,
    grow: function (w, h) {
        this.width += w;
        this.height += h;
    },
    print: function () {
        console.log(`[${this.width} x ${this.height}]`);
    },
    toString: function () {
        return `rect[${this.width} x ${this.height}]`;
    }

};
rect.grow(2, 3);
rect.print(); // [12 x 7]

//------------------------------
// module pattern with closure

let rect2 = (function () {
    let width = 10;
    let height = 4;
    return {
        grow: function(w, h) {
            width += w;
            height += h;
        },
        print: function() {
            console.log(`[${width} x ${height}]`);
        }
    }
})();
rect2.grow(2, 3);
rect2.print(); // [12 x 7]
//-------------------------------------
// revealing module with closure

let rect3 = (function () {
    let width = 10;
    let height = 4;

    function grow(w, h) {
        width += w;
        height += h;
    }

    function print() {
        console.log(`[${width} x ${height}]`);
    }

    return {grow, print};
})();
rect3.grow(2, 3);
rect3.print(); // [12 x 7]