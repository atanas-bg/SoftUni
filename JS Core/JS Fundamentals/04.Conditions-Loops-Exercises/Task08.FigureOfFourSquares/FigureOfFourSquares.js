/**
 * Created by User on 1.10.2016 г..
 */

function drawSquare([lines]) {
    lines = Number(lines);
    let lineLength = 2 * lines - 1;
    if (lines % 2 == 0) {
        lines = lines - 1;
    }
    let dashesLength = (lineLength - 3) / 2;
    let spacesLength = dashesLength;
    let middleRow = Math.ceil(lines / 2);
    let middleCol = Math.ceil(lineLength / 2);

    for (let row = 1; row <= lines; row++) {
        let line = '';

        if (row == 1 || row == middleRow || row == lines) {
            line += '+';
            line += '-'.repeat(dashesLength);
            line += '+';
            line += '-'.repeat(dashesLength);
            line += '+';
        } else {
            line += '|';
            line += ' '.repeat(spacesLength);
            line += '|';
            line += ' '.repeat(spacesLength);
            line += '|';
        }
        console.log(line);
    }
}

drawSquare([4]);