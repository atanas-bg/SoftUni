/**
 * Created by User on 30.9.2016 г..
 */
// input : [0, 60, 3600]
// output : 60000

function calcDistanceBetweenObjects([speedA, speedB, time]) {
    [speedA, speedB, time] = [speedA, speedB, time].map(Number);
    speedA = speedA * 1000 / 3600; // converts the speed from km/h to m/s
    speedB = speedB * 1000 / 3600;
    let s1 = speedA * time;
    let s2 = speedB * time;
    let distance = Math.abs(s1 - s2);
    distance = Math.round(distance * 100000000000000) / 100000000000000;
    console.log(distance);
}

calcDistanceBetweenObjects([11, 10, 120]);
calcDistanceBetweenObjects([5, -5, 40]);
calcDistanceBetweenObjects([0, 60, 3600]);