/**
 * Created by User on 5.10.2016 г..
 */
// input : ['Hi, how are you?']
// output : HI, HOW, ARE, YOU

function wordsUpperCase([str]) {
    let strUpper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != ''); // removes empty array elements
    return words.join(', ');

    function extractWords() {
        return strUpper.split(/\W+/);
    }
}

console.log(wordsUpperCase(['Hi, how are you?']));
console.log(wordsUpperCase(['Hello']));