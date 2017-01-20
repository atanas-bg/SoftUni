/**
 * Created by User on 15.10.2016 г..
 */
// input : ['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']
// output : [{"Town":"Sofia","Latitude":42.69,"Longitude":23.32}, {"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]

function parseTownsToJSON(input) {
    let towns = input.slice(1);
    let result = [];
    for (let data of towns) {
        let [empty, town, lat, longit] = data.split(/\s*\|\s*/);
        let townData = {
            Town: town,
            Latitude: Number(lat),
            Longitude: Number(longit)
        };
        result.push(townData);
    }
    return JSON.stringify(result);
}

console.log(
    parseTownsToJSON(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |'])
);