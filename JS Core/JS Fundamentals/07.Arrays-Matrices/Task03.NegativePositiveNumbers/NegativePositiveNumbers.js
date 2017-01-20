/**
 * Created by User on 12.10.2016 г..
 */
// input : ['7', '-2', '8', '9']
// output :
// -2
// 7
// 8
// 9

function arrangeNumbers(input) {
    input = input.map(Number);
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 0) {
            result.push(input[i]);
        } else {
            result.unshift(input[i]);
        }
    }
    console.log(result.join('\n'));
}

arrangeNumbers(['7', '-2', '8', '9']);
arrangeNumbers(['3', '-2', '0', '-1']);