/**
 * Created by User on 20.9.2016 г..
 */

function sumNumbers(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let sum = num1 + num2 + num3;
    return sum;
}

console.log(sumNumbers(['2', '4', '6']))
