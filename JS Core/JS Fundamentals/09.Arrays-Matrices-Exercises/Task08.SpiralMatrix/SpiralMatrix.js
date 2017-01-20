/**
 * Created by User on 14.10.2016 г..
 */
// input : ['5 5']
// output :
// c  0  1  2  3  4
// r
// 0  1  2  3  4  5
// 1  16 17 18 19 6
// 2  15 24 25 20 7
// 3  14 23 22 21 8
// 4  13 12 11 10 9


function createSpiralMatrix([input]) {
    let dimensions = input.split(/\s+/);
    let rowsCount = dimensions[0];
    let columnsCount = dimensions[1];
    let matrix = [];
    // var a = (function(a){ while(a.push([]) < 9); return a})([]);

    // create and fill the matrix
    for (let row = 0; row < rowsCount; row++) {
        let rowArray = [];
        for (let col = 0; col < columnsCount; col++) {
            rowArray.push('empty');
        }
        matrix.push(rowArray);
    }

    let maxNumber = rowsCount * columnsCount;
    let rowNum = 0;
    let colNum = 0;
    let num = 1;

    while (num <= maxNumber) {
        // right
        while (matrix[rowNum][colNum] == 'empty' && num <= maxNumber) {
            matrix[rowNum][colNum] = num;
            colNum += 1;
            num += 1;
            if (rowNum == rowsCount || colNum == columnsCount) {
                break;
            }
        }
        rowNum += 1;
        colNum -= 1;

        // down
        while (matrix[rowNum][colNum] == 'empty' && num <= maxNumber) {
            matrix[rowNum][colNum] = num;
            rowNum += 1;
            num += 1;
            if (rowNum == rowsCount || colNum == columnsCount) {
                break;
            }
        }
        rowNum -= 1;
        colNum -= 1;

        // left
        while (matrix[rowNum][colNum] == 'empty' && num <= maxNumber) {
            matrix[rowNum][colNum] = num;
            colNum -= 1;
            num += 1;
            if (rowNum == rowsCount || colNum == columnsCount) {
                break;
            }
        }
        rowNum -= 1;
        colNum += 1;

        // up
        while (matrix[rowNum][colNum] == 'empty' && num <= maxNumber) {
            matrix[rowNum][colNum] = num;
            rowNum -= 1;
            num += 1;
            if (rowNum == rowsCount || colNum == columnsCount) {
                break;
            }
        }
        rowNum += 1;
        colNum += 1;
    }

    // print matrix
    matrix.map(row => console.log(row.join(' ')));
}

createSpiralMatrix(['5 5']);
createSpiralMatrix(['3 3']);
createSpiralMatrix(['5 3']);