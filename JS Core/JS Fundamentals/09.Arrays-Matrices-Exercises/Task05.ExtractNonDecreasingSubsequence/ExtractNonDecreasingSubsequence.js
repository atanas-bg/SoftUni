/**
 * Created by User on 14.10.2016 г..
 */
// input : ['1', '3', '8', '4', '10', '12', '3', '2', '24']
// output :
// 1
// 3
// 8
// 10
// 12
// 24

function extractNonDecreasingSubsequence(array) {
    array = array.map(Number);
    let maxNumber = array[0];
    let result = [maxNumber];
    for (let i = 1; i < array.length; i++) {
        let currentNum = array[i];
        if (maxNumber <= currentNum) {
            result.push(currentNum);
            maxNumber = currentNum;
        }
    }
    return result.join('\n');

    // second solution
    // let maxNumber = Number.NEGATIVE_INFINITY;
    // array = array.filter(num => {
    //     if(num >= maxNumber)
    //     {
    //         maxNumber = num;
    //         return true;
    //     }
    //         return false;
    // });
    // return array.join('\n');
}

console.log(extractNonDecreasingSubsequence(['1', '3', '8', '4', '10', '12', '3', '2', '24']));
console.log(extractNonDecreasingSubsequence(['20', '3', '2', '15', '6', '1']));