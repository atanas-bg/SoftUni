/**
 * Created by User on 15.10.2016 г..
 */
// input :['JS devs use Node.js for server-side JS.-- JS for devs']
// output : {"JS":3,"devs":2,"use":1,"Node":1,"js":1,"for":2,"server":1,"side":1}

function wordsCounter([input]) {
    let words = input.match(/\b[a-zA-Z0-9_]+\b/g);
    // let words = input.split(/[^a-zA-Z0-9_]+/g)
    //     .filter(x => x != '');
    let wordsCount = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!wordsCount.hasOwnProperty(word)) {
            wordsCount[word] = 0;
        }
        wordsCount[word] += 1;
    }

    return JSON.stringify(wordsCount);

}

console.log(wordsCounter(['   JS devs use Node.js for server-side JS.-- JS for devs']));