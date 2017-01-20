/**
 * Created by User on 14.10.2016 г..
 */
// input : ['add', 'add', 'remove', 'add', 'add']
// output :
// 1
// 4
// 5

function addRemoveElements(input) {
    let initialNumber = 1;
    let result = [];
    for (let command of input) {
        if (command == 'add') {
            result.push(initialNumber);
        } else if (command == 'remove') {
            result.pop();
        }
        initialNumber += 1;
    }
    if (result.length > 0) {
        result.map(el => console.log(el));
    } else {
        console.log('Empty');
    }
}

addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['add', 'remove', 'remove']);