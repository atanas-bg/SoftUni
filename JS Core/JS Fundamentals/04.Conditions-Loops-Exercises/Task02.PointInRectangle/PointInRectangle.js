/**
 * Created by User on 30.9.2016 г..
 */
// input : [8, -1, 2, 12, -3, 3]  // [x, y, xMin, xMax, yMin, yMax]
// output : inside

function isPointInside([x, y, xMin, xMax, yMin, yMax]) {
    [x, y, xMin, xMax, yMin, yMax] = [x, y, xMin, xMax, yMin, yMax].map(Number);
    if (xMin <= x && x <= xMax && yMin <= y && y <= yMax) {
        console.log("inside");
    } else {
        console.log("outside")
    }
}

isPointInside([8, -1, 2, 12, -3, 3]);
isPointInside([12.5, -1, 2, 12, -3, 3]);