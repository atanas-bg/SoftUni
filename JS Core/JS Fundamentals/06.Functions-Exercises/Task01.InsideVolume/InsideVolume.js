/**
 * Created by User on 5.10.2016 г..
 */
// input : [13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]
// output :
// inside
// inside
// outside


function isPointInVolume(input) {
    "use strict";
    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];
        if (inBoxVolume(x, y, z)) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }

    function inBoxVolume(x, y, z) {
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;
        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true;
                }
            }
        }
        return false;
    }
}

isPointInVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);