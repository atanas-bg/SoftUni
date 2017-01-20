/**
 * Created by User on 4.10.2016 г..
 */
// input : 5
// output :
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function drawTriangle([size]) {
    for (let i = 1; i <= size; i++) {
        printStars(i);
    }

    for (let p = size - 1; p >= 1; p--) {
        printStars(p);
    }

    function printStars(count) {
        console.log('*'.repeat(count));
    }
}

drawTriangle([15]);