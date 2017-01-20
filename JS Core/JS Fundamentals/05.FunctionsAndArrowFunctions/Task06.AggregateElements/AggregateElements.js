/**
 * Created by User on 5.10.2016 г..
 */
// input : ['1', '2', '3']
// output :
// 6
// 1.8333
// 123

/**
 *
 * @param input
 */

function aggregateElements(input) {
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(arr, initValue, func) {
        let val = initValue;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(Math.round(val * 10000) / 10000);
    }
}

aggregateElements(['1', '2', '3']);
aggregateElements(['2', '4', '8', '16']);