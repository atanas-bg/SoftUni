/**
 * Created by User on 6.10.2016 г..
 */
// input : ['2','1','1','1']
// output :
// {2, 1} to {0, 0} is invalid
// {1, 1} to {0, 0} is invalid
// {2, 1} to {1, 1} is valid


function validityChecker([x1, y1, x2, y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);
    let distance = calcDistanceBetweenPoints(x1, y1, 0, 0);
    printResult(x1, y1, 0, 0, distance);
    distance = calcDistanceBetweenPoints(x2, y2, 0, 0);
    printResult(x2, y2, 0, 0, distance);
    distance = calcDistanceBetweenPoints(x1, y1, x2, y2);
    printResult(x1, y1, x2, y2, distance);

    function printResult(a1, b1, a2, b2, dist) {
        if (isNumberInteger(dist)) {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is valid`)
        } else {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is invalid`)
        }
    }

    function isNumberInteger(num) {
        return num % 1 == 0;
    }

    function calcDistanceBetweenPoints(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }
}

validityChecker(['2','1','1','1']);