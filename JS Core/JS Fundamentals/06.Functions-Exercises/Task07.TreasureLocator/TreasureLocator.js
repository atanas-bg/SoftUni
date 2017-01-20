/**
 * Created by User on 6.10.2016 г..
 */
// input : [4, 2, 1.5, 6.5, 1, 3]
// output :
// On the bottom of the ocean
// Tonga
// Tuvalu

function locateTreasure(input) {
    input = input.map(Number);

    for (let i = 0; i < input.length; i += 2) {
        let x = input[i];
        let y = input[i + 1];
        console.log(location(x, y));
    }

    function location(x, y) {
        switch (true) {
            case (x >= 8 && x <= 9 && y >= 0 && y <= 1):
                return 'Tokelau';
            case (x >= 1 && x <= 3 && y >= 1 && y <= 3):
                return 'Tuvalu';
            case (x >= 5 && x <= 7 && y >= 3 && y <= 6):
                return 'Samoa';
            case (x >= 0 && x <= 2 && y >= 6 && y <= 8):
                return 'Tonga';
            case (x >= 4 && x <= 9 && y >= 7 && y <= 8):
                return 'Cook';
            default:
                return 'On the bottom of the ocean';
        }
    }
}

locateTreasure([4, 2, 1.5, 6.5, 1, 3]);
locateTreasure([6, 4]);