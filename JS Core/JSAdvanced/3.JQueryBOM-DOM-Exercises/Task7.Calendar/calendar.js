/**
 * Created by User on 26.10.2016 г..
 */
function calendar([day, month, year]) {
    // creates table
    let table = $('<table>');

    // creates date
    let currentDate = new Date(year, month - 1, day);
    let fullMonth = currentDate.toLocaleString('en-us', {month: "long"});
    let fullYear = currentDate.getFullYear();

    // fills table
    let caption = $('<caption>');
    caption.text(fullMonth + ' ' + fullYear);
    caption.appendTo(table);

    let tBody = $('<tbody>');
    let headerRow = $('<tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></th></tr>');
    headerRow.appendTo(tBody);

    let firstDateOfCurrentMonth = new Date(year, month - 1, 1);
    let firstDayOfCurrentMonth = firstDateOfCurrentMonth.getDay(); // Sunday is day 0
    let firstCalendarDate = new Date(firstDateOfCurrentMonth);
    if (firstDateOfCurrentMonth.getDay() != 0) {
    firstCalendarDate.setDate(firstDateOfCurrentMonth.getDate() - firstDateOfCurrentMonth.getDay());
    } else {
        firstCalendarDate.setDate(-6);
    }
    let prevMonthDate = new Date(firstDateOfCurrentMonth);
    let prevMonthLastDate = prevMonthDate.setDate(0);

    let lastCalendarDate = new Date(firstDateOfCurrentMonth);
    lastCalendarDate.setMonth(firstDateOfCurrentMonth.getMonth() + 1);
    lastCalendarDate.setDate(0);
    let currentMonthLastDate = new Date(lastCalendarDate);
    if (lastCalendarDate.getDay() != 0) {
    lastCalendarDate.setDate(lastCalendarDate.getDate() + 6 - lastCalendarDate.getDay() + 1);
    }

    let tableRow;
    let today = currentDate.getDate();
    for (let currentDay = firstCalendarDate; currentDay <= lastCalendarDate; currentDay.setDate(currentDay.getDate() + 1)) {
        if (currentDay.getDay() == 1) {
            tableRow = $('<tr>');
        }
        if (currentDay <= prevMonthLastDate) {
            let tableCell = $('<td>').text('');
            tableCell.appendTo(tableRow);

        } else if (currentDay <= currentMonthLastDate) {
            if (currentDay.getDate() != today) {
                let dayOfMonth = currentDay.getDate();
                let tableCell = $('<td>').text(dayOfMonth);
                tableCell.appendTo(tableRow);
            } else {
                let tableCell = $('<td>').addClass('today').text(today);
                tableCell.appendTo(tableRow);
            }
        }
        else {
            let tableCell = $('<td>').text('');
            tableCell.appendTo(tableRow);
        }

        if (currentDay.getDay() == 0) {
            tBody.append(tableRow);
        }
    }

    tBody.appendTo(table);
    $('div#content').append(table);
}
