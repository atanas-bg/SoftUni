/**
 * Created by User on 12.10.2016 г..
 */
// input : ['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']
// output : Bulgarian brandy, alcoholic drink

function extractText(input) {
    let str = '';
    if (Array.isArray(input)) {
        str = input[0];
    }
    let leftP = '(';
    let rightP = ')';
    let startIndex = str.indexOf(leftP);
    let endIndex = str.indexOf(rightP, startIndex + 1);
    let result = [];
    while (startIndex != -1 && endIndex != -1) {
        let text = str.substring(startIndex + 1, endIndex);
        result.push(text);
        startIndex = str.indexOf(leftP, endIndex + 1);
        endIndex = str.indexOf(rightP, startIndex + 1);
    }
    return result.join(', ');
}

console.log(extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']));