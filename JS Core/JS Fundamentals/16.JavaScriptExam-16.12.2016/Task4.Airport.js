/**
 * Created by User on 16.12.2016 г..
 */
function airport(input) {
    let arrivals = {};
    let departures = {};
    let towns = {};


    for (let planeData of input) {
        let [planeID, town, passengersCount, action] = planeData.split(/\s+/);
        passengersCount = Number(passengersCount);
        if (action === 'land') {
            if (!arrivals.hasOwnProperty(planeID)) {
                arrivals[planeID] = passengersCount;
                if (!towns.hasOwnProperty(town)) {
                    towns[town] = [];
                    towns[town]['planes'] = [];
                    towns[town]['arrivals'] = 0;
                    towns[town]['departures'] = 0;
                }
                if (towns[town]['planes'].indexOf(planeID) == -1) {
                    towns[town]['planes'].push(planeID);
                }
                towns[town]['arrivals'] += passengersCount;
            }
        } else if (action === 'depart') {
            if (arrivals.hasOwnProperty(planeID)) {
                // departures[planeID] = passengersCount;
                delete arrivals[planeID];

                // if (!towns.hasOwnProperty(town)) {
                //     towns[town] = [];
                //     towns['arrivals'] = 0;
                //     towns['departures'] = 0;
                // }
                if (towns[town]['planes'].indexOf(planeID) == -1) {
                    towns[town]['planes'].push(planeID);
                }
                towns[town]['departures'] += passengersCount;
            }
        }
    }

    let planesLeft = Object.keys(arrivals);

    // alphabetically sort the left planes
    if (planesLeft.length > 1) {
        planesLeft.sort(function (firstPlane, secondPlane) {
            firstPlane = firstPlane.toLowerCase();
            secondPlane = secondPlane.toLowerCase();
            if (firstPlane < secondPlane) return -1;
            if (firstPlane > secondPlane) return 1;
            return 0;
        });
    }

    console.log('Planes left:');
    for (let plane of planesLeft) {
        console.log(`- ${plane}`);
    }

    let townsArray = Object.keys(towns);
    if (townsArray.length > 1) {
        townsArray.sort(function (townA, townB) {
            let arrivalsFromTownA = towns[townA]['arrivals'];
            let arrivalsFromTownB = towns[townB]['arrivals'];
            if (arrivalsFromTownA != arrivalsFromTownB) {
                return arrivalsFromTownB - arrivalsFromTownA;
            } else {
                townA = townA.toLowerCase();
                townB = townB.toLowerCase();
                if (townA < townB) return -1;
                if (townA > townB) return 1;
                return 0;
            }
        });
    }


    for(let town of townsArray) {
        console.log(town);
        console.log(`Arrivals: ${towns[town]['arrivals']}`);
        console.log(`Departures: ${towns[town]['departures']}`);
        let planes = towns[town]['planes'];
        if (planes.length > 1) {
            planes.sort(function (firstPlane, secondPlane) {
                    firstPlane = firstPlane.toLowerCase();
                    secondPlane = secondPlane.toLowerCase();
                    if (firstPlane < secondPlane) return -1;
                    if (firstPlane > secondPlane) return 1;
                    return 0;
                }
            );
        }

        console.log('Planes:');
         for (let plane of planes) {
            console.log(`-- ${plane}`);
         }
    }

    // console.log(towns)

    // console.log(townsArray)
    // console.log(arrivals);
    // console.log(departures);
    // console.log(towns);
}

// airport([
//     "Airbus Paris 356 land",
//     "Airbus London 321 land",
//     "Airbus Paris 213 depart",
//     "Airbus Ljubljana 250 land"
// ]);

airport([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart",
    "ivan Madrid 100 land",
    "ivan Madrid 100 land",
    "ivan Madrid 100 depart",
    "ivan Sofia 200 land",
    "ivan Sofia 200 depart",
    "ivan Sofia 200 depart",
    "ivan Varna 23 land",
    "ivan Varna 23 land",
]);

// airport([]);