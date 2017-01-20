/**
 * Created by User on 12.10.2016 г..
 */
// input : ['20 50 10', '8 33 145']
// output : 145

function findBiggestElement(input) {
    let biggestNumber = Number.NEGATIVE_INFINITY;
    let matrix = input.map(row => row.split(' ').map(Number)); // read matrix from input
    matrix.forEach(
        element => element.forEach(
            num => biggestNumber = Math.max(biggestNumber, num)
        ));
    return biggestNumber;
}

console.log(findBiggestElement(['20 50 10', '8 33 145']));
console.log(findBiggestElement(['3 5 7 12', '-1 4 33 2', '8 3 0 4']));