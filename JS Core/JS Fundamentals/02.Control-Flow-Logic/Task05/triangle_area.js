/**
 * Created by user on 26.9.2016 г..
 */
// input : [2, 3.5, 4]
// output : 3.4994419198

function calcTriangleArea([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    let roundedArea = Math.round(area * 10000000000) / 10000000000;
    console.log(roundedArea);
}

calcTriangleArea([2, 3.5, 4]);