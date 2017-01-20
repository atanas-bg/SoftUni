/**
 * Created by User on 6.10.2016 г..
 */
// input : [32, chop, chop, chop, chop, chop]
// output : 
// 16
// 8
// 4
// 2
// 1
// •	chop – divide the number by two
// •	dice – square root of number
// •	spice – add 1 to number
// •	bake – multiply number by 3
// •	fillet – subtract 20% from number


function cookByNumbers(input) {
    let num = Number(input[0]);
    for (let  i = 1; i < input.length; i++) {
        num = calculate(num, input[i]);
        console.log(Math.round(num * 10) / 10);
    }

    function calculate(val, action) {
        switch (action) {
            case 'chop' :
                return val / 2;
            case 'dice' :
                return Math.sqrt(val);
            case 'spice' :
                return val + 1;
            case 'bake' :
                return val * 3;
            case 'fillet' :
                return val - val * 0.20;
        }
    }
}

cookByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);