/**
 * Created by User on 30.9.2016 г..
 */
// input : [10.5, 3]
// output : 10.5

function roundNumber([num, precision]) {
    [num, precision] = [num, precision].map(Number);
    precision = (precision > 15) ? 15 : precision;
    let precisionLength = Math.pow(10, precision);
    let result = Math.round(num * precisionLength) / precisionLength;
    console.log(result);
}

roundNumber([3.1415926535897932384626433832795, 2]);
roundNumber([10.5, 3]);
roundNumber([3.1415926535897932384626433832795, 17]);