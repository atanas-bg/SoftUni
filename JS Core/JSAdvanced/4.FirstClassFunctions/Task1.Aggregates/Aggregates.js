/**
 * Created by User on 28.10.2016 г..
 */
function calcAggregates(arr) {
    "use strict";
    console.log('Sum = ' + reduce(arr, (a, b)=> a + b));
    console.log('Min = ' + reduce(arr, (a, b)=> Math.min(a, b)));
    console.log('Max = ' + reduce(arr, (a, b)=> Math.max(a, b)));
    console.log('Product = ' + reduce(arr, (a, b)=> a * b));
    console.log('Join = ' + reduce(arr, (a, b)=> '' + a + b));

    function reduce(arr, func) {
        let result = arr[0];
        arr = arr.slice(1);
        for (let el of arr) {
            result = func(result, el);
        }
        return result;
    }
}

calcAggregates([2, 3, 10, 5]);
calcAggregates([5, -3, 20, 7, 0.5]);