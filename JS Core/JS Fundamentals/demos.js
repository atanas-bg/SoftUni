/**
 * Created by User on 4.10.2016 г..
 */
// let d = new Date(2012, 11, 1, 10);
// d.setDate(d.getDate() - d.getDay());
// console.log(d);

function printName(firstName, lastName) {
    "use strict";
    let name = firstName;
    if (typeof (lastName) === 'number') {
        name += ' age: ' + lastName;
    } else if (lastName != undefined) {
        name += ' ' + lastName;
    }
    console.log(name);
}

printName('Ideal', 25);

function sum() {
    console.log('arguments: ' + arguments.length);
    console.log(arguments);
    let sum = 0;
    for (let x of arguments) {
        sum += x;
    }
    console.log(sum);
}

sum(1, 2, 3, '54');
let p = [3, 2, 1].sort()
console.log(p);
