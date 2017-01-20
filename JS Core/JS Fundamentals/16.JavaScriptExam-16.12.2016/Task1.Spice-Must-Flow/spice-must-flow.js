/**
 * Created by User on 16.12.2016 г..
 */
function extractSpices(input) {
    let startingYield = Number(input[0]);
    let todayExtractedSpices = 0;
    let extractedSpicesInStorage = 0;
    let spicesForWorkersFood = 26;
    let spicesEatenWhileClosingTheMine = 26;
    let daysOperatedInMine = 0;
    let profitableSpicesLimitPerDay = 100;
    let decreaseInSpicesProductionPerDay = 10;

    while (startingYield >= profitableSpicesLimitPerDay) {
        extractedSpicesInStorage += startingYield - spicesForWorkersFood;
        startingYield -= decreaseInSpicesProductionPerDay;
        daysOperatedInMine += 1;
    }

    if (extractedSpicesInStorage >= spicesEatenWhileClosingTheMine) {
        extractedSpicesInStorage -= spicesEatenWhileClosingTheMine;
    } else {
        extractedSpicesInStorage = 0;
    }

    console.log(daysOperatedInMine + '\n' + extractedSpicesInStorage);
}

extractSpices(['450']);