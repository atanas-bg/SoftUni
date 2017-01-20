function cars(commands) {
    let map = new Map();
    let carManager = {
        create: function ([name, ,parent]) {
            parent = parent ? map.get(parent) : null;
            let newObj = Object.create(parent);
            map.set(name, newObj);
            return newObj;
        }, set: function ([name, key, value]) {
            let obj = map.get(name);
            obj[key] = value;
        }, print: function ([name]) {
            let obj = map.get(name);
            let ownKeys = Object.keys(obj);
            let ownProperties = ownKeys.map((key)=>`${key}:${obj[key]}`).join(', ');
            let parentProperties = Object.getPrototypeOf(obj);
            let result;
            if (parentProperties) {
                parentProperties = Object.keys(parentProperties).filter((key) => {
                    if (ownKeys.indexOf(key) == -1) {
                        return true;
                    } else {
                        return false;
                    }
                }).map((key)=>`${key}:${parentProperties[key]}`).join(', ');
                result = ownProperties + ', ' + parentProperties;
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

cars(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c1 model bmw', 'set c2 model new', 'set c2 year 2016', 'set c1 type benzin', 'print c1', 'print c2']);