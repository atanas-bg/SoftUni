/**
 * Created by User on 4.10.2016 г..
 */
let f = (function () {
    let count = 0;
    return function () {
        console.log(++count);
    }
})();

f();
f();
f();
f();

let d = (function (x) {
    return function (x) {
        console.log(2 * x);
    }
})();
d(6);

(function (x) {
    for (let i; i <= x; i++) {
        console.log(i);
    }
})(4);

let g = function (a, b) {
    console.log(a + b);
};
g(4, 6);

let q = (a, b) => (a + b);
console.log(q(4, 5));

let increment = x => ++x;
console.log(increment(5));

let w = () => console.log('Hi!');
w();

console.log([2, 23, 43].map(a => a * 2));
console.log([2, 23, 43].filter(a => a > 12));

function aggregateElements(input) {
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++)
            val = func(val, arr[i]);
        console.log(val);
    }
}
aggregateElements([10, 20, 30]);

(function (count) {
    for (let i = 1; i <= count; i++)
        console.log('+'.repeat(i));
})(4);
