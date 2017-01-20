/**
 * Created by User on 12.10.2016 г..
 */
// input :
   ['2 3 4 7 0',
    '4 0 5 3 4',
    '2 3 5 4 2',
    '9 8 7 5 4']

// output : 1

function getNumberOfEqualPairs(input) {
    let matrix = input.map(row => row.split(/\s+/));
    let pairsCount = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            if (matrix[row][col] == matrix[row][col + 1]) {
                pairsCount += 1;
            }
            if (matrix[row][col] == matrix[row + 1][col]) {
                pairsCount += 1;
            }
        }
    }
    return pairsCount;
}

console.log(getNumberOfEqualPairs(['2 3 4 7 0', '4 0 5 3 4', '2 3 5 4 2', '9 8 7 5 4']));
console.log(getNumberOfEqualPairs(['test yes yo ho', 'well done yo 6', 'not done yet 5']));
