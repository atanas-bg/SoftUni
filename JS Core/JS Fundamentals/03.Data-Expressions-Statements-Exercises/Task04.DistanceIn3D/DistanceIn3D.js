/**
 * Created by User on 30.9.2016 г..
 */
// input : [1, 1, 0, 5, 4, 0]
// output : 5

function calcDistanceBetweenPointsIn3D([xa, ya, za, xb, yb, zb]) {
    [xa, ya, za, xb, yb, zb] = [xa, ya, za, xb, yb, zb].map(Number);
    let distance = Math.sqrt(Math.pow(xa - xb, 2) + Math.pow(ya - yb, 2) + Math.pow(za - zb, 2));
    console.log(distance);
}

calcDistanceBetweenPointsIn3D([1, 1, 0, 5, 4, 0]);
calcDistanceBetweenPointsIn3D([3.5, 0, 1, 0, 2, -1]);