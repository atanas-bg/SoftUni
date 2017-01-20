/**
 * Created by User on 30.9.2016 г..
 */
// input : ["the wizard of oz", "tuesday"]
// output : 10

function printMoviePrices([title, day]) {
    title = title.toLowerCase();
    day = day.toLowerCase();
    if (title == 'the godfather') {
        switch (day) {
            // The Godfather	12	10	15	12.50	15	25	30
            case 'monday':
                return 12;
            case 'tuesday':
                return 10;
            case 'wednesday':
                return 15;
            case 'thursday':
                return 12.50;
            case 'friday':
                return 15;
            case 'saturday':
                return 25;
            case 'sunday':
                return 30;
            default:
                return "error";
        }
    } else if (title == "schindler's list") {
        switch (day) {
            // Schindler's List	8.50	8.50	8.50	8.50	8.50	15	15
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                return 8.50;
            case 'saturday':
                return 15;
            case 'sunday':
                return 15;
            default:
                return "error";
        }
    } else if (title == "casablanca") {
        switch (day) {
            // Casablanca	8	8	8	8	8	10	10
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                return 8;
            case 'saturday':
                return 10;
            case 'sunday':
                return 10;
            default:
                return "error";
        }
    } else if (title == "the wizard of oz") {
        switch (day) {
            // The Wizard of Oz	10	10	10	10	10	15	15
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                return 10;
            case 'saturday':
                return 15;
            case 'sunday':
                return 15;
            default:
                return "error";
        }
    } else {
        return "error";
    }
}

console.log(printMoviePrices(["the wizard of oz", "tuesday"]));
console.log(printMoviePrices(["softuni", "nineday"]));