/**
 * Created by User on 12.10.2016 г..
 */
// input : ['SoftUni']
// output :
// str[0] -> S
// str[1] -> o
// str[2] -> f
// str[3] -> t
// str[4] -> U
// str[5] -> n
// str[6] -> i


function printLetters(input) {
    let str = '';
    if (Array.isArray(input)) {
        str = input[0];
    }
    for (let index in str) {
        console.log(`str[${index}] -> ${str[index]}`)
    }
}

printLetters(['SoftUni']);