/**
 * Created by User on 30.9.2016 г..
 */
// input : 5
// output :
// 1
// 3
// 5

function printOddNumbersOneToN([num]) {
    for (let i = 1; i <= num; i += 2) {
        console.log(i);
    }
}

printOddNumbersOneToN([5]);
printOddNumbersOneToN([4]);
printOddNumbersOneToN([7]);