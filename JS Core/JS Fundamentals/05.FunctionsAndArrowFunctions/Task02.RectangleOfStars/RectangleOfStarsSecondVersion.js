/**
 * Created by User on 4.10.2016 г..
 */
// input : 4
// output :
// * * * *
// * * * *
// * * * *
// * * * *

function drawRectangleOfStars(size = 5) {
    for (let i = 1; i <= size; i++) {
        printStars(size);
    }

    function printStars(size) {
        console.log('*' + ' *'.repeat(size - 1));
    }
}

drawRectangleOfStars(4);