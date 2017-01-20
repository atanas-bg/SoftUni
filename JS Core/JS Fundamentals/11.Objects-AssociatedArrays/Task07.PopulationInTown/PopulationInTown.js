/**
 * Created by User on 16.10.2016 г..
 */
// input :[
// 'Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000'
// ]
// output :
// 'Istanbul : 101000',
// 'Honk Kong : 2100004',
// 'Jerusalem : 2352344',
// 'Mexico City : 23401925'

function printTownPopulation(input) {
    let townsPopulation = new Map();

    for (let i = 0; i < input.length; i++) {
        let townData = input[i].split(/\s*<->\s*/g);
        let town = townData[0];
        let population = Number(townData[1]);
        if (!townsPopulation.has(town)) {
            townsPopulation.set(town, 0);
        }
        let oldPopulation = townsPopulation.get(town);
        townsPopulation.set(town, oldPopulation + population)
    }
    for (let [tw, pop] of townsPopulation) {
         console.log(`${tw} : ${pop}`);
    }
}

printTownPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);