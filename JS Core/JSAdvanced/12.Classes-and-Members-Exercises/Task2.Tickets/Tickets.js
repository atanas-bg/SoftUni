/**
 * Created by User on 11.11.2016 г..
 */
class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function sortTickets(ticketsArray, sortParam) {
    "use strict";
    let result = [];
    for (let ticketDescription of ticketsArray) {
        let [destination, price, status] = ticketDescription.trim().split('|');
        let ticket = new Ticket(destination, price, status);
        result.push(ticket);
    }

    result.sort((a, b) => {
        if (Number(a[sortParam])) {
            return Number(a[sortParam]) - Number(a[sortParam]);
        }
        if (a[sortParam] < b[sortParam]) {
            return -1;
        }
        if (a[sortParam] == b[sortParam]) {
            return 0;
        }
        if (a[sortParam] > b[sortParam]) {
            return 1;
        }
    });

    return result;
}

console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));