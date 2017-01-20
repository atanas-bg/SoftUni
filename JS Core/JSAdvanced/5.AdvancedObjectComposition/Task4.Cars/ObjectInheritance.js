/**
 * Created by User on 31.10.2016 г..
 */
function cars(commands) {
    let map = new Map();
    let carManager = {
        create: function (input) {
            let name = input[0];
            let parent = input[2];
            if (parent) {
                parent = map.get(parent);
            } else {
                parent = null;
            }
            let newObj = Object.create(parent);
            map.set(name, newObj);
            // return newObj;
        }, set: function (input) {
            let name = input[0];
            let key = input[1];
            let value = input[2];
            let car = map.get(name);
            car[key] = value;
        }, print: function (input) {
            let name = input[0];
            let car = map.get(name);
            let ownKeys = Object.keys(car);
            let ownProperties = ownKeys.map((key)=>`${key}:${car[key]}`).join(', ');
            // for(let prop in car){
            //     console.log(prop);
            // } // правилният начин
            let parentProperties = [];
            let properties = Object.getPrototypeOf(car);
            while (properties) {
                parentProperties.push(properties);
                properties = Object.getPrototypeOf(properties);
            }
            parentProperties = Object.assign({}, ...parentProperties);

            let result;
            if (Object.keys(parentProperties).length > 0) {
                parentProperties = Object.keys(parentProperties).filter((key) => {
                    if (ownKeys.indexOf(key) == -1) {
                        return true;
                    } else {
                        return false;
                    }
                }).map((key)=>`${key}:${parentProperties[key]}`).join(', ');

                if (ownProperties) {
                    result = ownProperties + ', ' + parentProperties;
                } else {
                    result = parentProperties;
                }

            } else {
                result = ownProperties;
            }
            console.log(result);
        }
    };

    for (let command of commands) {
        let commandParameters = command.split(' ');
        let action = commandParameters.shift();
        carManager[action](commandParameters);
    }
}
//
cars(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c1 model bmw', 'set c2 model new', 'set c2 year 2016', 'set c1 type benzin', 'print c1', 'print c2']);

// cars(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']);