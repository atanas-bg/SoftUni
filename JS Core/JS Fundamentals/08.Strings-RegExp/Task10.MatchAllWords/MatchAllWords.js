/**
 * Created by User on 13.10.2016 г..
 */
// input : ['A Regular Expression needs to have the global flag in order to match all occurrences in the text']
// output : A|Regular|Expression|needs|to|have|the|global|flag|in|order|to|match|all|occurrences|in|the|text

function matchWords(input) {
    if (Array.isArray(input)) {
        let text = input[0];
    }

    let pattern = /[a-zA-Z0-9_]+/g;
    let words = input[0].match(pattern);
    return words.join('|');
};

console.log(matchWords(['A Regular Expression needs to have the global flag in order to match all occurrences in the text']));
console.log(matchWords(['_(Underscores) are also word characters']));