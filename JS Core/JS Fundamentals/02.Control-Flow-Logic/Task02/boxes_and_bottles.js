/**
 * Created by user on 24.9.2016 г..
 */
// input : [15, 7]
// output : 3
function calcBoxesNumber([bottles, boxCapacity]) {
    let boxesNumber = Math.ceil(bottles / boxCapacity);
    return boxesNumber;
}

console.log(calcBoxesNumber([15, 7]));