/**
 * Created by User on 31.10.2016 г..
 */
function argumentInfo() {
    let allTypesCount = {};
    for (let arg of arguments) {
        let type = typeof arg;
        console.log(type + ': ' + arg);

        if (!allTypesCount.hasOwnProperty(type)) {
            allTypesCount[type] = 0;
        }
        allTypesCount[type] += 1;
    }
    let sortedTypes = [];
    for (let type in allTypesCount) {
        sortedTypes.push([type, allTypesCount[type]]);
    }
    sortedTypes.sort((a, b)=> b[1] - a[1]);
    sortedTypes.map(x=> console.log(x[0] + ' = ' + x[1]));
}

argumentInfo('cat', 42, function () {console.log('Hello world!');});