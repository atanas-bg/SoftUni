/**
 * Created by User on 6.10.2016 г..
 */
// input : [101]
// output : 1019999

function modifyNumber([strNumber]) {
    let result = calcDigits(strNumber);
    while ((result / strNumber.length) <= 5) {
        strNumber += '9';
        result = calcDigits(strNumber);
    }

    console.log(strNumber);

    function calcDigits(numberAsString) {
        let sum = 0;
        for (let i = 0; i < numberAsString.length; i++) {
            sum += Number(numberAsString[i]);
        }
        return sum;
    }
}

modifyNumber(['101']);
modifyNumber(['5835']);