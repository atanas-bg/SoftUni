/**
 * Created by User on 12.10.2016 г..
 */
// input : ['20', '30', '40']
// output : 60

function sumFirstLastNumber(input) {
    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[input.length - 1]);
    let sum = firstNumber + lastNumber;
    return sum;
}

console.log(sumFirstLastNumber(['20', '30', '40']));
console.log(sumFirstLastNumber(['10', '30', '8']));