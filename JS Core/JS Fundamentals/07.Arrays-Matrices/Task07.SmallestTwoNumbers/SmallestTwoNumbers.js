/**
 * Created by User on 12.10.2016 г..
 */
// input : ['30', '15', '50', '5']
// output : 5 15

function printTheSmallestTwoNumbers(input) {
    input = input.map(Number)
    let min1 = Math.min(...input);
    let index = input.indexOf(min1);
    input.splice(index, 1);
    let min2 = Math.min(...input);
    console.log(min1 + ' ' + min2);
}

printTheSmallestTwoNumbers(['30', '15', '50', '5']);