/**
 * Created by User on 30.10.2016 г..
 */
function fibonacci(n) {
    let fib = (function () {
        let f0 = 0;
        let f1 = 1;
        return function () {
            let oldF0 = f0;
            let oldF1 = f1;
            f0 = oldF1;
            f1 = oldF0 + oldF1;
            return f0;
        }
    })();
    let nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(fib());
    }
    return nums;
}

console.log(fibonacci(15));