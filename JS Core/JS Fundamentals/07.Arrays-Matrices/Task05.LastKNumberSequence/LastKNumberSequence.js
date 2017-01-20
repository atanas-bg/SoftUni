/**
 * Created by User on 12.10.2016 г..
 */
// input : ['6', '3']
// output : 1 1 2 4 7 13

function getLastKNumbersSequence([n, k]) {
    [n, k] = [n, k].map(Number);
    let result = [1];
    let sum = 0;
    for (let i = 1; i < n; i++) {
        let start = i - k;         // Math.max(0, i - k)
        if ( start < 0) start = 0;
        sum = result.slice(start, i).reduce((a, b) => a + b);
        result[i] = sum;
        sum = 0;
    }
    console.log(result.join(' '));
}

getLastKNumbersSequence(['6', '3']);
getLastKNumbersSequence(['8', '2']);