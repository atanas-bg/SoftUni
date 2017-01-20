/**
 * Created by User on 14.10.2016 г..
 */
function generateSpiralMatrix([input]) {
    [rows, cols] = input.split(/\s+/).map(Number);

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    let topRow = 0;
    let bottomRow = rows - 1;
    let leftRow = 0;
    let rightRow = cols - 1;

    let index = 1;
    let direction = 0;
    while (topRow <= bottomRow && leftRow <= rightRow) {
        switch (direction % 4) {
            case 0:
                for (let col = leftRow; col <= rightRow; col++) {
                    matrix[topRow][col] = index++;
                }
                topRow++;
                direction++;
                break;
            case 1:
                for (let row = topRow; row <= bottomRow; row++) {
                    matrix[row][rightRow] = index++;
                }
                rightRow--;
                direction++;
                break;
            case 2:
                for (let col = rightRow; col >= leftRow; col--) {
                    matrix[bottomRow][col] = index++;
                }
                bottomRow--;
                direction++;
                break;
            default:
                for (let row = bottomRow; row >= topRow; row--) {
                    matrix[row][leftRow] = index++;
                }
                leftRow++;
                direction++;
                break;
        }
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

generateSpiralMatrix(['5 5']);