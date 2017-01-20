/**
 * Created by User on 30.9.2016 г..
 */
// input : [2, 2]
// output : 4
// output : 8

function printRectangleAreaPerimeter([a, b]) {
    [a, b] = [a, b].map(Number);
    let area = a * b;
    let perimeter = 2 * (a + b);
    area = (area % 1 == 0) ? area : area.toFixed(2);
    perimeter = (perimeter % 1 == 0) ? perimeter : perimeter.toFixed(2);
    console.log(area);
    console.log(perimeter);
}

printRectangleAreaPerimeter([2, 2]);
printRectangleAreaPerimeter([2.5, 3.14]);