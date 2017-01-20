/**
 * Created by User on 6.10.2016 г..
 */
// input : [0, 0, 2, 0, 4, 0]
// output : 1->2->3: 4

function calcTripLength([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);
    let distance1 = Math.sqrt(Math.pow(x1 - x2, 2) + (Math.pow(y1 - y2, 2)));
    let distance2 = Math.sqrt(Math.pow(x2 - x3, 2) + (Math.pow(y2 - y3, 2)));
    let distance3 = Math.sqrt(Math.pow(x1 - x3, 2) + (Math.pow(y1 - y3, 2)));
    let distances = [distance1, distance2, distance3].sort();
    let first = distances[0];
    let second = distances[1];
    let sum = first + second;
    if (first == distance1 && second == distance2) {
        console.log('1->2->3: ' + sum);
    } else if (first == distance1 && second == distance3) {
        console.log('2->1->3: ' + sum);
    } else if (first == distance2 && second == distance3) {
        console.log('1->3->2: ' + sum);
    }
}

calcTripLength([0, 0, 2, 0, 4, 0]);