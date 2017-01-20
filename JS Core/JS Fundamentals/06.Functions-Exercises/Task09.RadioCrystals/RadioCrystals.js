/**
 * Created by User on 7.10.2016 г..
 */
// input : [1000, 4000, 8100]
// output :
// Processing chunk 4000 microns
// Cut x1
// Transporting and washing
// Finished crystal 1000 microns
// Processing chunk 8100 microns
// Cut x1
// Transporting and washing
// Lap x3
// Transporting and washing
// Grind x1
// Transporting and washing
// Etch x8
// Transporting and washing
// Finished crystal 1000 microns
//
// •	Cut – cuts the crystal in 4
// •	Lap – removes 20% of the crystal’s thickness
// •	Grind – removes 20 microns of thickness
// •	Etch – removes 2 microns of thickness
// •	X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
// •	Transporting and washing – removes any imperfections smaller than 1 micron (round down the number); do this after every batch of operations that remove material

function radioCrystalOperations(input) {
    input = input.map(Number);
    let desiredThickness = input[0];
    let actions = ['Cut', 'Lap', 'Grind', 'Etch'];

    for (let i = 1; i < input.length; i++) {
        let crystalThickness = input[i];
        let currentThickness;
        let result = `Processing chunk ${crystalThickness} microns\n`;

        for (let q = 0; q < actions.length; q++) {
            let counter = 0;
            currentThickness = crystalOperation(actions[q], crystalThickness);
            while (currentThickness >= desiredThickness || parseInt(desiredThickness - currentThickness) === 1) {
                crystalThickness = currentThickness;
                counter += 1;
                currentThickness = crystalOperation(actions[q], crystalThickness);
            }
            if (counter > 0) {
                currentThickness = Math.floor(crystalThickness);
                result += `${actions[q]} x${counter}\n`;
                result += 'Transporting and washing\n';
            }
        }
        crystalThickness = Math.floor(crystalThickness);
        if (crystalThickness + 1 == desiredThickness) {
            result += `${'X-ray'} x1\n`;
            crystalThickness += 1;
        }
        result += `Finished crystal ${crystalThickness} microns`;
        console.log(result);
    }

    function crystalOperation(action, thicknessOfCrystal) {
        switch (action) {
            case 'Cut':
                return thicknessOfCrystal / 4;
            case 'Lap':
                return thicknessOfCrystal - 0.20 * thicknessOfCrystal;
            case 'Grind':
                return thicknessOfCrystal - 20;
            case 'Etch':
                return thicknessOfCrystal - 2;
        }
    }
}

radioCrystalOperations([1000, 4000, 8100]);
radioCrystalOperations([1375, 50000]);