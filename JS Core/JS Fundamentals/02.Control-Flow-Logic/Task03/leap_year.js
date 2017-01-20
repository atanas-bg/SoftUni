/**
 * Created by user on 24.9.2016 г..
 */
// input : [1900]
// output : no

function isLeapYear(input) {
    let year = Number(input);
    let isLeap = "no";
    if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
        isLeap = "yes";
    }

    return isLeap;
    // Second solution:
    // return ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) ? "yes" : "no"
}

console.log(isLeapYear(1999));
console.log(isLeapYear(2000));