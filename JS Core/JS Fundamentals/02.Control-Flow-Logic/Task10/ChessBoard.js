/**
 * Created by User on 29.9.2016 г..
 */
//input :
// output :

function printChessBoard([boardSize]) {
    let result = '<div class="chessboard">\n';
    for (let row = 1; row <= boardSize; row++) {
        result += '\t<div>\n';
        let color = (row % 2 != 0) ? 'black' : 'white';
        for (let col = 0; col < boardSize; col++) {
            result += `\t\t<span class="${color}"></span>\n`;
            color = (color == 'black') ? 'white' : 'black';
        }
        result += '\t</div>\n'
    }
    result += '</div>';
    return result;
}

console.log(printChessBoard([4]));