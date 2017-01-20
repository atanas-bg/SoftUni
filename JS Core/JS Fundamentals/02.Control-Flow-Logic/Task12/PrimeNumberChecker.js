/**
 * Created by User on 29.9.2016 г..
 */
// input : [4]
// output :

function isPrime([num]) {
    let prime = true;
    for (let x = 2; x <= Math.sqrt(num); x++) {
        if (num % x == 0) {
            prime = false;
            break;
        }
    }

    console.log(prime && (num > 1));
}

isPrime([6]);

function isPrime3(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    if (n % 2 == 0) return (n == 2);
    if (n % 3 == 0) return (n == 3);
    var m = Math.sqrt(n);
    for (var i = 5; i <= m; i += 6) {
        if (n % i == 0)     return false;
        if (n % (i + 2) == 0) return false;
    }
    return true;
}