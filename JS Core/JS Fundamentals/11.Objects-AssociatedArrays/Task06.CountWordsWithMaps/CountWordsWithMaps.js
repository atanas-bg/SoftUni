/**
 * Created by User on 15.10.2016 г..
 */
// input :['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']
// output :
// 'devs' -> 3 times
// 'for' -> 2 times
// 'js' -> 6 times
// 'node' -> 1 times
// 'server' -> 1 times
// 'side' -> 1 times
// 'use' -> 2 times


function countWordsInText(input) {
    let text = input.join('\n');
    let words = text.match(/\b[0-9_a-zA-Z]+\b/g);
    let wordsCount = new Map();
    for (let word of words) {
        word = word.toLowerCase();
        if (!wordsCount.has(word)) {
            wordsCount.set(word, 0);
        }
        let count = wordsCount.get(word);
        wordsCount.set(word, count + 1);
    }

    let sortedWords = Array.from(wordsCount.keys()).sort();
    sortedWords.forEach(w => console.log(`'${w}' -> ${wordsCount.get(w)} times`));
}

countWordsInText(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);