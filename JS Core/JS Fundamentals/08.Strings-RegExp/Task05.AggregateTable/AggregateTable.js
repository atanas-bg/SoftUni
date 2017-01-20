/**
 * Created by User on 12.10.2016 г..
 */
// input : ['| Sofia           | 300', '| Veliko Tarnovo  | 500',     '| Yambol          | 275']
// output : Sofia, Veliko Tarnovo, Yambol
// 1075


function aggregateTable(input) {
    let incomeSum = 0;
    let towns = [];
    for (let pair of input) {
        [town, income] = pair
            .split('|')
            .map(el => el.trim())
            .filter(s => s != '');
        towns.push(town);
        incomeSum += Number(income);
    }
    console.log(towns.join(', '));
    console.log(incomeSum);
}

// second solution
// function aggregateTable(lines) {
//     let sum = 0, list = [];
//     for (let line of lines) {
//         let townData = line.split('|'),
//             townName = townData[1].trim(),
//             income = Number(townData[2].trim());
//         list.push(townName);
//         sum += income;
//     }
//     console.log(list.join(', ') + '\n' + sum);
// }

aggregateTable(['| Sofia           | 300', '| Veliko Tarnovo  | 500',     '| Yambol          | 275']);