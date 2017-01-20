/**
 * Created by User on 30.9.2016 г..
 */
// input : 2
// output :
// $
// $$

function printTriangleOfDollars([num]) {
    num = Number(num);
    for (let row = 1; row <= num; row++) {
        // console.log(new Array(row).join('$'));
        // console.log('$'.repeat(row));

        let line = '';
        for (let col = 1; col <= row; col++) {
            line += '$'
        }
        console.log(line);
    }


}

printTriangleOfDollars([5]);