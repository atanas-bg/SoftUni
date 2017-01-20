/**
 * Created by User on 12.10.2016 г..
 */

let str = "I am JavaScript developer";
let f = str.substr(5);
let fa = str.substr(5, 10);
let g = str.substring(5, 8);
console.log(f, '|', fa, '|', g);

let text = 'I love all people!';
let word = ' love';
text = text.replace(word, '-'.repeat(word.length));
console.log(text);

let a = [1, 2, 3, 4];
a.forEach(function (item, index, array) {
    console.log(item, index, array);
});

a.map((val, idx, arr) => console.log(val, idx, arr));

let fr = '1, 2, 3, 4, 5, 6';
fr = fr.replace(2, 12);
console.log(fr);
