/**
 * Created by User on 1.10.2016 г..
 */
// input : [4, 9, 2016]
// output :
// <table>
// <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>
// <tr><td class="prev-month">28</td><td class="prev-month">29</td><td class="prev-month">30</td><td class="prev-month">31</td><td>1</td><td>2</td><td>3</td></tr>
//     <tr><td class="today">4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
//     <tr><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr>
//     <tr><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td></tr>
//     <tr><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td class="next-month">1</td></tr>
//     </table>

function calendar([day, month, year]) {
    // add the calendar table header
    let result = '<table>\n';
    result += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    // add the days of the previous month
    let firstDayOfCurrentMonth = new Date(year, month - 1, 1);
    let dayOfWeek = firstDayOfCurrentMonth.getDay();
    if (dayOfWeek != 0) {
        let lastMonthFirstDate = new Date(firstDayOfCurrentMonth);
        lastMonthFirstDate.setDate(-(dayOfWeek - 1));
        let firstCalendarDay = lastMonthFirstDate.getDate(); // gets the first day of the week
        let lastMonthLastDate = new Date(firstDayOfCurrentMonth);
        lastMonthLastDate.setDate(0);
        let lastDay = lastMonthLastDate.getDate(); // gets the last day of the previous month

        result += '  <tr>';
        for (let i = firstCalendarDay; i < lastDay; i++) {
            result += `<td class="prev-month">${i}</td>`;
        }
    }

    // add the days of the current month
    let currentDate = new Date(year, month - 1, day);
    let currentDay = currentDate.getDate();
    let allDaysOfWeek = 7;
    let nextMonth = (month != 12) ? (month + 1) : 1;
    let lastDateOfCurrentMonthDate = new Date(year, nextMonth - 1, 0);
    let lastDayOfCurrentMonth = lastDateOfCurrentMonthDate.getDate();

    let daysCounter = dayOfWeek + 1;

    for (let currDay = 1; currDay <= lastDayOfCurrentMonth; currDay++) {
        if (daysCounter <= allDaysOfWeek) {
            if (currDay != currentDay) {
                result += `<td>${currDay}</td>`;
            } else {
                result += `<td class="today">${currDay}</td>`;
            }
            daysCounter += 1;
        } else {
            result += '</tr>\n';
            if (currDay != lastDayOfCurrentMonth) {
                result += '  <tr>';
            }
            daysCounter = 1;
            currDay -= 1;
        }
    }

    // add the days of the next month
    let dayOfWeekOfCurrentMonthLastDay = lastDateOfCurrentMonthDate.getDay();
    if (dayOfWeekOfCurrentMonthLastDay != 7) {
        let dayOfNextMonth = 1;
        for (let index = dayOfWeekOfCurrentMonthLastDay + 1; index <= allDaysOfWeek; index++) {
            result += `<td class="next-month">${dayOfNextMonth}</td>`;
            dayOfNextMonth += 1;
        }
        result += '</tr>\n';
    }

    result += '</table>';
    console.log(result);
}

calendar([24, 12, 2012]);