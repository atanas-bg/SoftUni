/**
 * Created by User on 16.10.2016 г..
 */
// input :['J', 'G', 'P', 'R', 'C', 'J-G', 'G-J', 'P-R', 'R-P', 'C-J']

// output :
// J
// 1. G
// 2. C


function radicalMarketing(input) {
    let personsLog = new Map();
    let subscribingSymbol = '-';

    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        let toSubscribe = line.indexOf(subscribingSymbol);
        if (toSubscribe != -1) {
            let parts = line.split(subscribingSymbol);
            let subscriber = parts[0];
            let person = parts[1];
            console.log(subscriber, person);
            if (personsLog.get(subscriber) && personsLog.get(person) && subscriber != person) {
                // if (!persons.get(person).)
                let subscribers = personsLog.get(person);
                subscribers = subscribers.push(subscriber);
                personsLog.set(person, subscribers);
            }
        }
        else {
            if (!personsLog.has(line)) {
                personsLog.set(line, []);
            }
        }
    }


        console.log(personsLog);
}

radicalMarketing(['J', 'G', 'P', 'R', 'C', 'J-G', 'G-J', 'P-R', 'R-P', 'C-J']);