/**
 * Created by User on 31.10.2016 г..
 */
let add = (function () {
    let sum = 0;

    function calc(num) {
        sum += num;
        return calc;
    };
    calc.toString = function () {
        return sum;
    };
    // calc.valueOf = ()=> sum;

    return calc;
})();

console.log(add(34)(24)(45).toString());
console.log(add(1000).toString());

function solve(num) {
    let a = (x)=> solve(num + x);
    a.toString = ()=> num;
    a.valueOf = ()=> num;
    return a;
}
console.log(solve(34)(24)(45).toString());