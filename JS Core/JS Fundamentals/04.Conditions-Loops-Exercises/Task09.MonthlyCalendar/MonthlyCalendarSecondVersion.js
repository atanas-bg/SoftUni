/**
 * Created by user on 4.10.2016 г..
 */
function calendar([day, month, year]) {
    let result = '<table>\n';
    result += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    let firstDateOfCurrentMonth = new Date(year, month - 1, 1);
    let firstDayOfCurrentMonth = firstDateOfCurrentMonth.getDay(); // Sunday is day 0
    let firstCalendarDate = new Date(firstDateOfCurrentMonth);
    firstCalendarDate.setDate(firstDateOfCurrentMonth.getDate() - firstDateOfCurrentMonth.getDay());
    let prevMonthDate = new Date(firstDateOfCurrentMonth);
    let prevMonthLastDate = prevMonthDate.setDate(0);

    let lastCalendarDate = new Date(firstDateOfCurrentMonth);
    lastCalendarDate.setMonth(firstDateOfCurrentMonth.getMonth() + 1);
    lastCalendarDate.setDate(0);
    let currentMonthLastDate = new Date(lastCalendarDate);
    lastCalendarDate.setDate(lastCalendarDate.getDate() + 6 - lastCalendarDate.getDay());

    let currentDate = new Date(year, month - 1, day);

    for (let currentDay = firstCalendarDate; currentDay <= lastCalendarDate; currentDay.setDate(currentDay.getDate() + 1)) {
        if (currentDay.getDay() == 0) {
            result += '  <tr>';
        }
        if (currentDay <= prevMonthLastDate) {
            result += `<td class="prev-month">${currentDay.getDate()}</td>`;
        } else if (currentDay <= currentMonthLastDate) {
            if (currentDay.getDate() != currentDate.getDate()) {
                result += `<td>${currentDay.getDate()}</td>`;
            } else {
                result += `<td class="today">${currentDay.getDate()}</td>`;
            }
        }
        else {
            result += `<td class="next-month">${currentDay.getDate()}</td>`;
        }

        if (currentDay.getDay() == 6) {
            result += '</tr>\n';
        }
    }

    result += '</table>\n';
    console.log(result);
}

calendar([24, 10, 2016]);