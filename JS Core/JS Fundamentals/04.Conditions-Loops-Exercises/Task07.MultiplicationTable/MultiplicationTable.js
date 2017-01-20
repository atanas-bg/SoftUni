/**
 * Created by User on 30.9.2016 г..
 */
// input : 5
// output :
// <table border="1">
//     <tr><th>x</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
//     <tr><th>1</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
//     <tr><th>2</th><td>2</td><td>4</td><td>6</td><td>8</td><td>10</td></tr>
//     <tr><th>3</th><td>3</td><td>6</td><td>9</td><td>12</td><td>15</td></tr>
//     <tr><th>4</th><td>4</td><td>8</td><td>12</td><td>16</td><td>20</td></tr>
//     <tr><th>5</th><td>5</td><td>10</td><td>15</td><td>20</td><td>25</td></tr>
//     </table>


function printMultiplicatedTable([size]) {
    console.log('<table border="1">');
    for (let row = 0; row <= size; row++) {
        let line = ' <tr>';
        if (row == 0) {
            line += '<th>x</th>';
            for (let col = 1; col <= size; col++) {
                line += `<th>${col}</th>`;
            }
        } else {
            line += `<th>${row}</th>`;
            for (let col = row; col <= size * row; col += row) {
                line += `<td>${col}</td>`;
            }

        }

        line += '</tr>';
        console.log(line);
    }
    console.log('</table>')
}

printMultiplicatedTable([5]);