/**
 * Created by User on 4.10.2016 г..
 */
// input : ['Wednesday']
// output : 3

function dayNumber([day]) {
    let week = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }
    let dayNumber = week[day] || 'error';
    return dayNumber;
}

console.log(dayNumber(['Wednesday']));
console.log(dayNumber(['ghhg']));
