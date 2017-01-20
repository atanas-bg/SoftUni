/**
 * Created by User on 14.10.2016 г..
 */
// input : ['1 1 1', '1 1 1' '1 1 0']
// output :
// 1 1 1
// 1 1 1
// 1 1 0

function diagonalAttack(input) {
    let matrix = input.map(row => row.split(/\s+/).map(Number));
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    let rowsCount = matrix.length;

    for (let row = 0; row < rowsCount; row++) {
        firstDiagonalSum += matrix[row][row];
        let colsCount = matrix[row].length;
        secondDiagonalSum += matrix[row][colsCount - 1 - row];
    }

    if (firstDiagonalSum == secondDiagonalSum) {
        // creates a new matrix with all values equal to diagonal sum of the first matrix
        let copyMatrix = [];
        for (let r = 0; r < rowsCount; r++) {
            copyMatrix[r] = [];
            for (let c = 0; c < matrix[r].length; c++) {
                copyMatrix[r][c] = firstDiagonalSum;
            }
        }

        // fill the diagonals values
        for (let rw = 0; rw < rowsCount; rw++) {
            copyMatrix[rw][rw] = matrix[rw][rw];
            let colsCount = copyMatrix[rw].length;
            copyMatrix[rw][colsCount - 1 - rw] = matrix[rw][colsCount - 1 - rw];
        }

        // prints the matrix
        copyMatrix.map(row => console.log(row.join(' ')));
    } else {
        matrix.map(row => console.log(row.join(' ')));
    }
}

diagonalAttack(['5 3  12 3 1', '11  4  23 2 5', '101 12 3 21 10', '1   4  5  2 2', '5   22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);