/**
 * Created by User on 15.10.2016 г..
 */
// input :['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']
// output : {"Sofia":25,"Varna":7}


function sumIncomeByTown(input) {
    let townsIncome = {};
    for (let i = 0; i < input.length; i += 2) {
        let [town, income] = [input[i], Number(input[i + 1])];
        if (!townsIncome.hasOwnProperty(town)) {
            townsIncome[town] = income;
        } else {
            townsIncome[town] += income;
        }
    }

    return JSON.stringify(townsIncome);
}

console.log(sumIncomeByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));
console.log(sumIncomeByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']));