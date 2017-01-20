/**
 * Created by User on 7.10.2016 г..
 */
// input : 4
// output :
// **AT**
// *C--G*
// T----T
// *A--G*

function drawDNA([length]) {
    length = Number(length);
    let symbols = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];


    // print DNA rows
    for (let i = 1; i <= length; i++) {
        let symbolsIndex = ((i - 1) * 2) % 10;
        let firstSymbol = symbols[symbolsIndex];
        let secondSymbol = symbols[symbolsIndex + 1];
        let rowIndex = i % 4;
        console.log(printRow(rowIndex, firstSymbol, secondSymbol));
    }

    function printRow(idx, firstSym, secondSym) {
        switch (idx) {
            case 1:
                return `**${firstSym}${secondSym}**`;
            case 2:
                return `*${firstSym}--${secondSym}*`;
            case 3:
                return `${firstSym}----${secondSym}`;
            case 0:
                return `*${firstSym}--${secondSym}*`;
        }
    }
}

drawDNA([12]);