/**
 * Created by User on 15.10.2016 г..
 */
// input : ['5 5', '2 2']
// output :
// c  0 1 2 3 4
// r
// 0  3 3 3 3 3
// 1  3 2 2 2 3
// 2  3 2 1 2 3
// 3  3 2 2 2 3
// 4  3 3 3 3 3

function createStarOrbit(input) {
    // gets matrix dimensions
    let [rowsCount, colsCount] = input[0].split(/\s+/).map(Number);

    // gets coordinates of the star
    let [starRow, starCol] = input[1].split(/\s+/).map(Number);

    // creates and fills the matrix
    let matrix = [];
    for (let r = 0; r < rowsCount; r++) {
        matrix[r] = [];
        for (let c = 0; c < colsCount; c++) {
            matrix[r][c] = 'empty';
        }
    }

    // creates the star
    let starValue = 1;
    matrix[starRow][starCol] = starValue;

    // creates the star orbit
    let actionsCount = 1;
    let step = 1;
    while (actionsCount > 0) {
        actionsCount = 0; // If no action is done, the matrix is full and the cycle will stop.
        let cellValue = starValue + step;

        // fills right side
        let rightCol = starCol + step;
        if (rightCol < colsCount) {  // checks if the right side exists
            let bottomRow = Math.min(rowsCount - 1, starRow + step);
            let topRow = Math.max(0, starRow - step);
            for (let i = topRow; i <= bottomRow; i++) {
                matrix[i][rightCol] = cellValue;
            }
            actionsCount = 1;
        }

        // fills bottom side
        let bottomRow = starRow + step;
        if (bottomRow < rowsCount) {  // checks if the bottom side exists
            let leftCol = Math.max(0, starCol - step);
            let rightCol = Math.min(colsCount - 1, starCol + step);
            for (let b = leftCol; b <= rightCol; b++) {
                matrix[bottomRow][b] = cellValue;
            }
            actionsCount = 1;
        }

        // fills left side
        let leftCol = starCol - step;
        if (leftCol >= 0) {  //  checks if the left side exists
            let topRow = Math.max(0, starRow - step);
            let bottomRow = Math.min(rowsCount - 1, starRow + step);
            for (let l = topRow; l <= bottomRow; l++) {
                matrix[l][leftCol] = cellValue;
            }
            actionsCount = 1;
        }

        // fills top side
        let topRow = starRow - step;
        if (topRow >= 0) {  // checks if the top side exists
            let leftCol = Math.max(0, starCol - step);
            let rightCol = Math.min(colsCount - 1, starCol + step);
            for (let t = leftCol; t <= rightCol; t++) {
                matrix[topRow][t] = cellValue;
            }
            actionsCount = 1;
        }

        step += 1; // Increases the step on every cycle. Without this row, you will have an eternal cycle.
    }

    // prints the matrix
    matrix.map(row => console.log(row.join(' ')));
}

createStarOrbit(['5 5', '3 2']);