/**
 * Created by User on 14.10.2016 г..
 */
// input : [My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).]
// output : My bill: 5 (beer); 2.4 (kepab); -1 (deposit).

function multiplicateMatchNumbers([text]) {
    let pattern = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;
    let match = pattern.exec(text);
    while (match) {
        let [num1, num2] = [match[1], match[2]];
        let sum = num1 * num2;
        text = text.replace(match[0], sum);
        match = pattern.exec(text);
    }
    return text;
}

// second solution
function performMultiplications([text]) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => Number(num1) * Number(num2));
    console.log(text);
}


console.log(multiplicateMatchNumbers(['My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).']));
console.log(performMultiplications(['My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).']));