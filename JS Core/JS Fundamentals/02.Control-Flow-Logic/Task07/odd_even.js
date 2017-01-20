/**
 * Created by user on 26.9.2016 г..
 */
// input : 5
// output: odd
// input : 8
// output: even
// input : 2.3
// output: invalid

function printIfNumberIsOddEvenInvalid([num]) {
    let result;
    if (num % 2 == 0) {
        result = "even";
    } else if (num % 1 == 0) {   // let rem = num % 2; if (rem == Math.round(rem)
        result = "odd";
    } else {
        result = "invalid";
    }
    console.log(result);
}

printIfNumberIsOddEvenInvalid([5]);
printIfNumberIsOddEvenInvalid([6]);
printIfNumberIsOddEvenInvalid([2.568]);
printIfNumberIsOddEvenInvalid(["Ivan"]);
