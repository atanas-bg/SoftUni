/**
 * Created by User on 29.9.2016 г..
 */
// input : [1, 3, 4]
// output:
// 0
// 1.584962500721156
// 2

function printBinaryLogarithm(input) {
    for (let num of input) {
        console.log(Math.log2(num));
    }
}

printBinaryLogarithm([1, 3, 4])