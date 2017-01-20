/**
 * Created by User on 12.10.2016 г..
 */
// input : ['10', '15', '20', '25']
// output : 50 30

function processOddNumbers(input) {
    let result = input.map(Number);
    result = result
        .filter((num, index) => index % 2 != 0)
        .map(a => 2 * a)
        .reverse();
    console.log(result.join(' '));
}

processOddNumbers(['10', '15', '20', '25']);
processOddNumbers(['3', '0', '10', '4', '7', '3']);