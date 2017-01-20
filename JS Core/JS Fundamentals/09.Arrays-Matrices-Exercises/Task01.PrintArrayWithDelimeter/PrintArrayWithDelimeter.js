/**
 * Created by User on 14.10.2016 г..
 */
// input : ['One', 'Two', 'Three', 'Four', 'Five', '-']
// output : One-Two-Three-Four-Five

function printArrayWithDelimeter(input) {
    let delimeter = input.pop();
    return input.join(delimeter);
}

console.log(printArrayWithDelimeter(['One', 'Two', 'Three', 'Four', 'Five', '-']));
console.log(printArrayWithDelimeter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));