/**
 * Created by User on 30.9.2016 г..
 */
// input : ["the wizard of oz", "tuesday"]
// output : 10

function printMoviePrices([title, day]) {
    title = title.toLowerCase();
    day = day.toLowerCase();
    let movieTicketPrices = {
        "the godfather": {
            'monday': 12,
            'tuesday': 10,
            'wednesday': 15,
            'thursday': 12.5,
            'friday': 15,
            'saturday': 25,
            'sunday': 30
        },
        "schindler's list": {
            'monday': 8.50,
            'tuesday': 8.50,
            'wednesday': 8.50,
            'thursday': 8.50,
            'friday': 8.50,
            'saturday': 15,
            'sunday': 15
        },
        "casablanca": {
            'monday': 8,
            'tuesday': 8,
            'wednesday': 8,
            'thursday': 8,
            'friday': 8,
            'saturday': 10,
            'sunday': 10
        },
        "the wizard of oz": {
            'monday': 10,
            'tuesday': 10,
            'wednesday': 10,
            'thursday': 10,
            'friday': 10,
            'saturday': 15,
            'sunday': 15
        }
    };

    let movieWeek = movieTicketPrices[title] || "";
    let price = movieWeek[day];

    if (price) {
        console.log(price);
    } else {
        console.log("error");
    }
}
// obj.data.map(x => console.log(x.name))
printMoviePrices(["the wizard of oz", "tuesday"])
printMoviePrices(["the godfather", "sunday"])