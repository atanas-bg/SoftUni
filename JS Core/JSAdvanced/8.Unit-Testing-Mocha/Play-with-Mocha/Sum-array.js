/**
 * Created by User on 4.11.2016 г..
 */
function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}

module.exports = {sum};