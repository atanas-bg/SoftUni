/**
 * Created by User on 2.11.2016 г..
 */
let processCommands = (function () {
    let makeBreakfast = (function () {
        let microElements = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        };

        let meals = {
            apple: [['carbohydrate', 1], ['flavour', 2]],
            coke: [['carbohydrate', 10], ['flavour', 20]],
            burger: [['carbohydrate', 5], ['fat', 7], ['flavour', 3]],
            omelet: [['protein', 5], ['fat', 1], ['flavour', 1]],
            cheverme: [['protein', 10], ['carbohydrate', 10], ['fat', 10], ['flavour', 10]],
        };

        return {
            restock: (mElement, quantity)=> {
                microElements[mElement] += quantity;
                return 'Success';
            },
            prepare: (recipe, mealQuantity)=> {
                let mealRecipe = meals[recipe];
                for (let [element, neededQuantity] of mealRecipe) {
                    let quantityInStock = microElements[element];
                    if (quantityInStock < neededQuantity * mealQuantity) {
                        return `Error: not enough ${element} in stock`;
                    }
                }
                for (let [element, neededQuantity] of mealRecipe) {
                    microElements[element] -= mealQuantity * neededQuantity;
                }
                return 'Success';
            },
            report: ()=> {
                let result = `protein=${microElements['protein']} carbohydrate=${microElements['carbohydrate']} fat=${microElements['fat']} flavour=${microElements['flavour']}`;
                return result;
            }
        };
    })();

    return function (input) {
        let cmdParts = input.trim().split(' ');
        let command = cmdParts.shift();
        let microElement, quantity, recipe, result;
        switch (command) {
            case 'restock' :
                microElement = cmdParts[0];
                quantity = Number(cmdParts[1]);
                result = makeBreakfast.restock(microElement, quantity);
                break;
            case 'prepare':
                recipe = cmdParts[0];
                quantity = Number(cmdParts[1]);
                result = makeBreakfast.prepare(recipe, quantity);
                break;
            case 'report':
                result = makeBreakfast.report();
                break;
        }
        return result;
    }
})();

console.log(processCommands('prepare cheverme 1'));
console.log(processCommands('restock protein 10'));
console.log(processCommands('prepare cheverme 1'));
console.log(processCommands('restock carbohydrate 10'));
console.log(processCommands('prepare cheverme 1'));
console.log(processCommands('restock fat 10'));
console.log(processCommands('prepare cheverme 1'));
console.log(processCommands('restock flavour 10'));
console.log(processCommands('prepare cheverme 1'));
console.log(processCommands('report'));
// Error: not enough protein in stock
// Success
// Error: not enough carbohydrate in stock
// Success
// Error: not enough fat in stock
// Success
// Error: not enough flavour in stock
// Success
// Success
// protein=0 carbohydrate=0 fat=0 flavour=0

