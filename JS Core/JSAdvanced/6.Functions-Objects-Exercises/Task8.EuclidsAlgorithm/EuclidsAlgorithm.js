/**
 * Created by User on 3.11.2016 г..
 */
function gcd(a, b) {
    while (b != 0) {
        if (a < b) {
            let c = a;
            a = b;
            b = c;
        }
        let r = a % b;
        if (r == 0) {
            return b;
        } else {
            a = b;
            b = r;
        }
    }
    return a;
}

console.log(gcd(252, 105));