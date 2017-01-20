/**
 * Created by User on 12.10.2016 г..
 */
// input : ['I', 'am', 'student']
// output : tnedutsmaI

function concatenateStringsInReverseOrder(input) {
    input = input.join('');
    let result = [];
    for (let i = input.length - 1; i >= 0; i--) {
        result.push(input[i]);
    }
    return result.join('');

    //second solution
    // let allStrings = arr.join('');
    // let chars = Array.from(allStrings);
    // let revChars = chars.reverse();
    // let revStr = revChars.join('');
    // return revStr;
}

console.log(concatenateStringsInReverseOrder(['I', 'am', 'student']));
console.log(concatenateStringsInReverseOrder(['race', 'car']));