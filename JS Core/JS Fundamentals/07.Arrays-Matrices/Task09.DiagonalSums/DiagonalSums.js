/**
 * Created by User on 12.10.2016 г..
 */
// input : ['3 5 17', '-1 7 14', '1 -8 89']
// output : 99 25

function matrixDiagonalsSum(input) {
    let matrix = input.map(row => row.split(/\s+/).map(Number));
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        firstDiagonalSum += matrix[row][row];
        secondDiagonalSum += matrix[row][matrix[row].length - 1 - row];
    }
    return firstDiagonalSum + ' ' + secondDiagonalSum;
}

console.log(matrixDiagonalsSum(['3 5 17', '-1 7 14', '1 -8 89']));
console.log(matrixDiagonalsSum(['20 40', '10 60']));