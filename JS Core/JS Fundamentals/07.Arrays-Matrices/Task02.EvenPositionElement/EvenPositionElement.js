/**
 * Created by User on 12.10.2016 г..
 */
// input : ['20', '30', '40']
// output : 20 40

function printEvenPositionElements(input) {
    input = input.filter((el, i) => i % 2 == 0);
    console.log(input.join(' '));

    // second solution
    // let result = [];
    // for (let i = 0; i < input.length; i += 2) {
    //     result.push(input[i]);
    // }
    // console.log(result.join(' '));
}

printEvenPositionElements(['20', '30', '40']);