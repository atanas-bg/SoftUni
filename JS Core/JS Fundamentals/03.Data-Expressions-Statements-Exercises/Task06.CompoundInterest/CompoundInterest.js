/**
 * Created by User on 30.9.2016 г..
 */
// input : [1500, 4.3, 3, 6]
// output : 1938.84


function calcCompoundInterest([period, interest, compoundingPeriod, time]) {
    [period, interest, compoundingPeriod, time] = [period, interest, compoundingPeriod, time].map(Number);
    let monthsPerYear = 12;
    let n = monthsPerYear / compoundingPeriod;
    interest = interest / 100; // convert from percent to real number
    let compoundInterest = period * Math.pow(1 + interest / n, n * time);
    console.log(compoundInterest.toFixed(2));
}

calcCompoundInterest([1500, 4.3, 3, 6]);