/**
 * Created by user on 24.9.2016 г..
 */
// input : [3, 2]
// output : 6
function calcNumbers([num1, num2]){
    let result = Number(num1) * Number(num2);
    return result;
}

function calcNums(input){
    let result = Number(input[0]) * Number(input[1]);
    return result;
}

console.log(calcNumbers([2, 3]));
console.log(calcNums([2, 3]));