/**
 * Created by User on 31.10.2016 г..
 */
function sortArray(inputArray, sortMethod) {
    "use strict";
    let ascending = (a, b)=> a - b;
    let descending = (a, b)=> b - a;
    let sortingMethods = {
        asc: ascending,
        desc: descending
    };
    return inputArray.sort(sortingMethods[sortMethod]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));