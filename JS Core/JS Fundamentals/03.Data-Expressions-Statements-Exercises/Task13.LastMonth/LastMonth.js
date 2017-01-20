/**
 * Created by User on 30.9.2016 г..
 */
// input : ['17','3','2002']
// output : 28

function printLastDayOfPreviousMonth([day, month, year]) {
    // day = '1';
    let date = new Date(year, month-1, day);
    // let oneDay = 24 * 60 * 60 * 1000; // milliseconds in 1 day
    // let lastMonthDate = new Date(date.getTime() - oneDay);
    // console.log(lastMonthDate.getDate());
    date.setDate(0);
    console.log(date.getDate());
}

printLastDayOfPreviousMonth(['17','3','2002']);
printLastDayOfPreviousMonth(['13','12','2004']);