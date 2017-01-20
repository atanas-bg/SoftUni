/**
 * Created by User on 5.10.2016 г..
 */
// input : ['2', '4', '+']
// output : 6

function calculator([a, b, op]) {
    [a, b] = [a, b].map(Number);

    let add = function (a, b) {
        console.log(a + b);
    };
    let substract = function (a, b) {
        console.log(a - b);
    };
    let multiply = function (a, b) {
        console.log(a * b);
    };
    let divide = function (a, b) {
        console.log(a / b);
    };

    let calc = function (a, b, op) {
        switch (op) {
            case '+':
                return add(a, b);
            case '-':
                return substract(a, b);
            case '*':
                return multiply(a, b);
            case '/':
                return divide(a, b);
        }
    };

    return calc(a, b, op);
}

calculator([2, 3, '*']);
