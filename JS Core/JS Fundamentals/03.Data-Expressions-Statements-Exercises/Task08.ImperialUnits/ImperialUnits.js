/**
 * Created by User on 30.9.2016 г..
 */
// input : [36]
// output : 3'-0"

function convertInchesToFoot([inches]) {
    inches = Number(inches);
    let inchesPerFoot = 12;
    let foots = Math.floor(inches / inchesPerFoot);
    let leftInches = inches % inchesPerFoot;
    console.log(`${foots}'-${leftInches}"`);
}

convertInchesToFoot([36]);
convertInchesToFoot([55]);
convertInchesToFoot([11]);
