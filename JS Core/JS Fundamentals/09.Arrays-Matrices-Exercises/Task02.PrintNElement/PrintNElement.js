/**
 * Created by User on 14.10.2016 г..
 */
// input : ['5', '20', '31', '4', '20', '2']
// output :
// 5
// 31
// 20

function printNElement(input) {
    let step = Number(input.pop());
    for (let i = 0; i < input.length; i += step) {
        console.log(input[i]);
    }
}

printNElement(['5', '20', '31', '4', '20', '2']);
printNElement(['dsa', 'asd', 'test', 'tset', '2']);