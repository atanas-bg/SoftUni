/**
 * Created by User on 16.10.2016 г..
 */
// input : [
// [   '2',
//     '59 36',
//     '82 52',
//     '4 18 25 19 8',
//     '4 2 8 2 18',
//     '23 14 22 0 22',
//     '2 17 13 19 20',
//     '0 9 0 22 22'
// ]

//output : I CAME I SAW I CONQUERED


function decodeOlmecsCypher(input) {
    let decoderkey = {0: ' ', 1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H', 9: 'I', 10: 'J',  11: 'K', 12: 'L',  13: 'M',
        14: 'N', 15: 'O', 16: 'P', 17: 'Q',  18: 'R', 19: 'S', 20: 'T', 21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y', 26: 'Z'};
    let allDecoderKeys = 27;

    // takes the templateMatrixSize
    let templateMatrixHeight = Number(input.shift());

    // creates and fills the templateMatrix
    let templateMatrix = [];
    for (let i = 0; i < templateMatrixHeight; i++) {
        let line = input.shift().trim();
            line = line.split(/\s+/);
        line = line.map(Number);
        templateMatrix.push(line);
    }

    let templateMatrixWidth = templateMatrix[0].length;

    // creates and fills the matrix with coded message
    let matrixWithCodedMessage = input.map(row => row.trim().split(/\s+/).map(Number));

    // decode matrix
    let startRow = 0;
    let startCol = 0;
    while (startRow < matrixWithCodedMessage.length) {
        while (startCol < matrixWithCodedMessage[0].length){
            for (let row = startRow; row < (startRow + templateMatrixHeight); row++) {
                for (let col = startCol; col < (startCol + templateMatrixHeight); col++) {
                    if (isInMatrix(matrixWithCodedMessage, row, col)) {
                        let r = row % templateMatrixWidth;
                        let c = col % templateMatrixWidth;
                        let num = matrixWithCodedMessage[row][col] + templateMatrix[r][c];
                        num = num % allDecoderKeys;
                        matrixWithCodedMessage[row][col] = decoderkey[num];
                    }
                }
            }
            startCol += templateMatrixWidth;
        }
        startRow += templateMatrixHeight;
        startCol = 0;
    }

    // // filter spaces in message
    // matrixWithCodedMessage = matrixWithCodedMessage.map(row => row.filter(x => x != ' '));

    // join the message
    for (let i = 0; i < matrixWithCodedMessage.length; i++) {
        matrixWithCodedMessage[i] = matrixWithCodedMessage[i].join('');
    }
    let decodedMessage = matrixWithCodedMessage.join('');
    decodedMessage = decodedMessage.split(/\s+/);
    decodedMessage = decodedMessage.join(' ');


    function isInMatrix(matrix, row, col) {
        if (row >= 0 && row < matrix.length){
            if (col >= 0 && col < matrix[row].length){
                return true;
            }
        }
        return false;
    }
    console.log(decodedMessage);
}

decodeOlmecsCypher([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
]);