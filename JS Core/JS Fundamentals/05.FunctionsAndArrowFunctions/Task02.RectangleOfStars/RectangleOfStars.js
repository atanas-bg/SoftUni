/**
 * Created by User on 4.10.2016 г..
 */
// input : 3
// output :
// ***
// ***
// ***

function drawRectangleOfStars(size = 5) {
    for (let i = 1; i <= size; i++) {
        console.log('*'.repeat(size));
    }
}

drawRectangleOfStars(3);

