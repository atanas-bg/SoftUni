/**
 * Created by User on 29.9.2016 г..
 */
// input : 10
// output:
// <ul>
// <li><span style='color:green'>1</span></li>
//     <li><span style='color:blue'>2</span></li>
//     <li><span style='color:green'>3</span></li>
//     <li><span style='color:blue'>4</span></li>
//     <li><span style='color:green'>5</span></li>
//     <li><span style='color:blue'>6</span></li>
//     <li><span style='color:green'>7</span></li>
//     <li><span style='color:blue'>8</span></li>
//     <li><span style='color:green'>9</span></li>
//     <li><span style='color:blue'>10</span></li>
//     </ul>

function colorfulNumbers([num]) {
    let result = "<ul>\n";
    for (let i = 1; i <= num; i++) {
        let color = (i % 2 == 0) ? "blue" : "green";
        result += `\t<li><span style='color:${color}'>${i}</span></li>\n`;
    }
    result += "</ul>";
    return result;
}

console.log(colorfulNumbers([10]));