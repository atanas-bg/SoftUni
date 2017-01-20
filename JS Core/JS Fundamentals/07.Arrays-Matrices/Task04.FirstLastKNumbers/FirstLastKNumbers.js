/**
 * Created by User on 12.10.2016 г..
 */
// input : ['2', '7', '8', '9']
// output : 7 8
//             8 9

function printFirstLastKNumbers(input) {
    let k = input.shift();
    let firstKNumbers = input.slice(0, k);
    let lastKNumbers = input.slice(input.length - k, input.length)
    console.log(firstKNumbers.join(' '));
    console.log(lastKNumbers.join(' '));
}

printFirstLastKNumbers(['2', '7', '8', '9']);
printFirstLastKNumbers(['3', '6', '7', '8', '9']);