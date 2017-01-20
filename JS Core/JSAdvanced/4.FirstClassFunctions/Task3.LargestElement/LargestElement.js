/**
 * Created by User on 30.10.2016 г..
 */
function largestElement(nums) {
    "use strict";
    return Math.max.apply(null, nums);
}

console.log(largestElement([3, 5, 6, 2323, -12, 54, 789, 3213]));