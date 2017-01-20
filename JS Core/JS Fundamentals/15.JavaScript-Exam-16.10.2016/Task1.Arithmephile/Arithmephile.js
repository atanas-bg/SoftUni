/**
 * Created by User on 16.10.2016 г..
 */
// input : ['10', '20', '2', '30', '44', '123', '3', '56', '20', '24']
//output : 26880


function findBiggestNumInterval(input) {
    let numbers = input.map(Number);
    let s = 0;
    let biggestProduct = Number.NEGATIVE_INFINITY;
    let currentProduct = undefined;
    let numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++) {
        if (numbers[i] >= 0 && numbers[i] <= 9) {
            s = numbers[i];
            for (let p = i + 1; p <= i + s; p++) {
                if (p < numbersLength) {
                    if (currentProduct == undefined) {
                        currentProduct = numbers[p];
                    } else {
                        currentProduct *= numbers[p];
                    }
                } else {
                    currentProduct = undefined;
                    break;
                }
            }
            if (currentProduct && biggestProduct < currentProduct) {
                biggestProduct = currentProduct;
            }
        }
        currentProduct = undefined;
    }
    console.log(biggestProduct)
}

findBiggestNumInterval(['10', '20', '2', '30', '44', '123', '3', '56', '20', '24']);