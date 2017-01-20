/**
 * Created by User on 30.9.2016 г..
 */
// input : ['name', 'Pesho', 'age', '23', 'gender', 'male']
// output : { name: 'Pesho', age: '23', gender: 'male' }
// {
// name: 'Pesho',
// age: '23',
// gender: 'male'
// }

function printObjectByProperties(input) {
    let result = {};
    for (let idx = 0; idx < input.length - 1; idx += 2) {
        let key = input[idx];
        let value = input[idx + 1];
        result[key] = value;
    }
    console.log(result);
    // console.log("{")
    // for (let el in result) {
    //     console.log(`  ${el}: '${result[el]}'`);
    // }
    // console.log("}")
}

printObjectByProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);


