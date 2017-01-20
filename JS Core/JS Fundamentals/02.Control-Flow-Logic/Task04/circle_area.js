/**
 * Created by user on 26.9.2016 г..
 */
// input : [5]
// output : 78.53981633974483
// output : 78.54

function circleArea([radius]) {
    let area = Math.PI * radius * radius;
    console.log(area);
    let roundedArea = Math.round(area * 100) / 100;
    console.log(roundedArea);
}

circleArea(["5"]);
