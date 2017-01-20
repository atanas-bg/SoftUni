/**
 * Created by User on 12.10.2016 г..
 */
// input : ['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']
// output : You purchased Beer Zagorka, Tripe soup, Lasagna for a total sum of 16.14

function printRestaurantBill(input) {
    let items = input.filter((x, i)=> i % 2 == 0);
    let sum = input
        .filter((x, i) => i & 2 != 0)
        .map(Number)
        .reduce((a, b) => a + b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
}

printRestaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);
printRestaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);