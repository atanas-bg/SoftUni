/**
 * Created by User on 8.10.2016 г..
 */
// input :
// output :

let d = [12, 3, 54, 6, 89, 19];
d.reverse();
console.log(d);
d.sort(); // sort by string value
console.log(d);
d.sort((a, b) => a - b);
console.log(d);
d.sort((a, b) => b - a);
console.log(d);
d.pop();
console.log(d);
d.shift();
console.log(d);
d.push(123);
console.log(d);
d.unshift(432);
console.log(d);
d = d.slice(2, 4);
console.log(d);
d.splice(1, 2);
console.log(d);
d.splice(1, 0, 15);
console.log(d);
let m = Math.min.apply(Math, d);
console.log(m);
let arr = [1, 2, 3, 4, 5, -89];
console.log(Math.min(...arr));
console.log(Math.max(...arr));

let matrix = [
    [0.0, 0.1, 0.2],
    [1.0, 1.1, 1.2],
    [2.0, 2.1, 2.2]
];

console.log(matrix.map(row => row.join(' ')).join('\n'));
console.log('*'.repeat(20));
for (let row in matrix) {
    console.log(matrix[row].join(' '));
}

let matrixRows = ['23 34 50', '70 12 43'];
function biggestElement(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(c => c.forEach(
        p => biggestNum = Math.max(biggestNum, p))
    );
    console.log(biggestNum);
}

biggestElement(matrixRows);

let s = [[1], [2], [3]];
let g = [...s];
console.log(g.shift());
console.log(g.shift().shift());
console.log(s);
console.log(g);

s = [[1], [2], [3]];
g = [];
g.push(...s);
console.log(g);
console.log(g.shift());
console.log(g.shift().shift());
console.log(s);
console.log(g);