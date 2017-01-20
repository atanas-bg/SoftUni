/**
 * Created by User on 5.10.2016 г..
 */
// input : [120, interstate]
// output : excessive speeding

// Write a JS function that determines whether a driver is within the speed limit.
//     You will receive his speed and the area where he’s driving. Each area has a different limit:
//     on the motorway the limit is 130 km/h,
//     on the interstate the limit is 90,
//     inside a city the limit is 50 and
//     within a residential area the limit is 20 km/h.
//     If the driver is within the limits, your function prints nothing.
//     If he’s over the limit however, your function prints the severity of the infraction.
//     For speeds up to 20 km/h over the limit, he’s speeding;
//     for speeds up to 40 over the limit, the infraction is excessive speeding and
//     for anything else, reckless driving.


function roadRadar([speed, area]) {
    speed = Number(speed);
    let speedLimit = getLimit(area);
    let speedDeviation = speed - speedLimit;
    let speedCheck = checkLimit(speedDeviation);
    console.log(speedCheck);

    function checkLimit(deviationFromSpeedLimit) {
        switch (true) {
            case (deviationFromSpeedLimit <= 0) :
                return '';
            case (deviationFromSpeedLimit <= 20) :
                return 'speeding';
            case (deviationFromSpeedLimit <= 40) :
                return 'excessive speeding';
            default:
                return 'reckless driving';
        }
    }

    function getLimit(area) {
        let speedLimits = {
            'motorway': 130,
            'interstate': 90,
            'city': 50,
            'residential area': 20
        };
        let limit = speedLimits[area];
        return limit;
    }
}

roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);
roadRadar([40, 'city']);