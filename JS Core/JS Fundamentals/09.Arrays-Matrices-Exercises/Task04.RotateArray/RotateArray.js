/**
 * Created by User on 14.10.2016 г..
 */
// input : [1, 2, 3, 4, 2]
// output : 3 4 1 2

function rotateArray(input) {
    let rotations = Number(input.pop());
    rotations = rotations % input.length;
    for (let i = 1; i <= rotations; i++) {
        let element = input.pop();
        input.unshift(element);
    }
    return input;
}

console.log(rotateArray([1, 2, 3, 4, 2]));