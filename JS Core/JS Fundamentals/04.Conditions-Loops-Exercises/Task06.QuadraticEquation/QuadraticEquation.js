/**
 * Created by User on 30.9.2016 г..
 */
// input : [6, 11, -35]
// output :
// -3.5
// 1.66667

function calcQuadraticEquation([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        x1 = Math.round(x1 * 100000) / 100000;
        x2 = Math.round(x2 * 100000) / 100000;
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    } else if (discriminant == 0) {
        let x = -b / (2 * a);
        console.log(x);
    } else {
        console.log("No");
    }
}

calcQuadraticEquation([6, 11, -35]);
calcQuadraticEquation([1, -12, 36]);
calcQuadraticEquation([5, 2, 1]);