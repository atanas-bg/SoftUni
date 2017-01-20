/**
 * Created by User on 30.9.2016 г..
 */
// input : [5, -2, 7]
// output : 7

function printMaxNumber([a, b, c]) {
    let result;
    [a, b, c] = [a, b, c].map(Number);
    if (a > b) {
        if (a > c) {
            result = a;
        } else {
            result = c;
        }
    } else if (b > c) {
        result = b;
    } else {
        result = c;
    }

    // result = Math.max([a, b, c]);  Съкратено решение
    console.log(result);
}

printMaxNumber([5, -2, 7]);
printMaxNumber([130, 5, 99]);