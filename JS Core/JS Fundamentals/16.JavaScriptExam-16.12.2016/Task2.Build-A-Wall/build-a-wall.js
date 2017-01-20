/**
 * Created by User on 16.12.2016 г..
 */
function calculateUsedConcreteForWallAndCost(input) {
    let maxWallHeightInFoots = 30;
    let cubicYardsOfConcretePerFoot = 195;
    let costOfOneCubicYardOfConcrete = 1900;
    let increasedWallHeightPerDayInFoots = 1;
    let usedQuantityOfConcretePerDay = [];
    let wallSectionsHeights = input.map(Number);

    let doesWorkSectionsExist = true;
    while (doesWorkSectionsExist) {
        let todayUsedQuantityOfConcrete = 0;
        doesWorkSectionsExist = false;
        for (let i = 0; i < wallSectionsHeights.length; i++) {
            let sectionHeight = wallSectionsHeights[i];
            if (sectionHeight < maxWallHeightInFoots) {
                wallSectionsHeights[i] += increasedWallHeightPerDayInFoots;
                todayUsedQuantityOfConcrete += cubicYardsOfConcretePerFoot;
                doesWorkSectionsExist = true;
            }
        }
        if (doesWorkSectionsExist) {
            usedQuantityOfConcretePerDay.push(todayUsedQuantityOfConcrete);
        }
    }

    console.log(usedQuantityOfConcretePerDay.join(', '));
    let totalUsedQuantityOfConcrete = usedQuantityOfConcretePerDay.reduce((a, b) => a + b);
    let totalWallSectionsCost = totalUsedQuantityOfConcrete * costOfOneCubicYardOfConcrete;
    console.log(`${totalWallSectionsCost} pesos`);
}

calculateUsedConcreteForWallAndCost([17, 22, 17, 19, 17]);